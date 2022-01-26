# La función main() y GeditApp

Aunque no está representado en el esquema, el punto de entrada de una aplicación GTK (como para todos los programas en C) es la función `main()`. Para crear una aplicación GTK, lo principal que se debe hacer en `main()` es crear una instancia de `GtkApplication`, o una subclase de la misma. En el esquema vemos que `GeditApp` es una subclase de `GtkApplication`, por lo que la función `main()` de gedit crea un objeto `GeditApp`.

`GtkApplication` es la clase que contiene y representa la aplicación completa. Por lo general, solo hay una instancia de `GtkApplication` por proceso, por lo que puede considerarse una clase singleton. Lo que contiene `GtkApplication` son *windows*, por ejemplo, `GeditWindow` en el caso de gedit, además de otros tipos de ventanas como ventanas de diálogo.

Ya vimos la jerarquía de clases `GtkApplication` en la sección <span class="ch-oop-gobj-inherit">Herencia</span> al explicar la herencia POO con GObject:

```plaintext
GObject
└── GApplication
    └── GtkApplication
```

`GApplication` es parte de la biblioteca GIO e implementa las funciones que no están relacionadas con la interfaz gráfica de usuario (GUI). Entonces, para un programa que se ejecuta en la terminal, es posible usar solo `GApplication`.

Una característica importante que proporciona `GApplication` es la unicidad del proceso (pero puede desactivarse si no se desea). Lo que hace la unicidad del proceso es tener solo un proceso por aplicación por sesión de usuario. Para que esa característica funcione, se debe proporcionar un ID de aplicación al crear el objeto `GApplication`. Con ese ID, `GApplication` busca si otro proceso ya ejecuta la misma aplicación en la misma sesión de usuario; si es el caso, comunica a la instancia primaria las acciones que deben realizarse (por ejemplo, abrir una nueva ventana, o abrir un nuevo archivo en una ventana existente, etc.). Cuando las acciones se realizan en la instancia principal, el segundo proceso finaliza inmediatamente. En Linux, `GApplication` utiliza el sistema de comunicación entre procesos (IPC) D-Bus para comunicarse entre los dos procesos.

La singularidad del proceso tiene varias ventajas, por dar algunos ejemplos concretos:


* Para una aplicación con una interfaz de documento con pestañas, al hacer clic en un archivo en un administrador de archivos como Nautilus, el archivo se puede abrir en una nueva pestaña en lugar de crear cada vez una nueva ventana. Para que esto funcione, la comunicación entre procesos es necesaria de una forma u otra;

* Una aplicación no necesita sincronizar explícitamente su estado y datos entre diferentes procesos. En aras del argumento, digamos que en gedit el usuario puede crear "herramientas de compilación" personalizadas para compilar el archivo o proyecto actual. gedit guarda las herramientas de construcción personalizadas en un archivo XML y se muestran en el menú para ejecutar sus comandos. En Linux, el archivo XML se guarda, por ejemplo, en el directorio `~/.local/share/` del usuario. Sin la unicidad del proceso, si un proceso gedit modifica las herramientas de compilación personalizadas, los otros procesos gedit deben volver a cargar el archivo XML y deben asegurarse de que no haya carreras (dos procesos gedit diferentes no deben modificar el archivo XML al mismo tiempo) . Con la unicidad del proceso, ese problema no existe, todas las ventanas gedit comparten el mismo estado de la aplicación, y el desarrollador puede asumir que solo un proceso por usuario puede modificar el archivo XML (Por supuesto, el usuario todavía tiene la posibilidad de editar el archivo XML a mano, pero en ese caso la aplicación se puede reiniciar, normalmente se espera que el usuario modifique las herramientas de compilación de la GUI que proporciona gedit).

> **📌 Nota:** Tenga en cuenta que esto no sería cierto si fuera posible abrir *varias* sesiones gráficas para el mismo usuario, en la misma máquina (con soporte para múltiples puestos) o al menos compartir el almacenamiento de respaldo para el directorio de inicio (por ejemplo, con montajes NFS). Pero GNOME y la mayoría de las aplicaciones no admiten esto, un usuario puede abrir como máximo una sesión gráfica a la vez para el mismo directorio de inicio. Para los inicios de sesión en la misma máquina física, esto se aplica mediante GDM (el administrador de pantalla GNOME y la pantalla de inicio de sesión) y D-Bus. En el caso de montajes NFS, esto no se aplica, pero si el mismo usuario abre varias sesiones gráficas en diferentes equipos, es posible que algunos programas no funcionen correctamente. Entonces, aunque la unicidad del proceso de `GApplication` está documentada como por *sesión de usuario*, en la práctica podemos decir que es simplemente por *usuario*.

Otra característica importante de `GApplication` es ejecutar el ciclo de eventos principal. El bucle de eventos principal de GLib se describió en la sección <span class="ch-glib-main-loop">El bucle del evento principal</span>. Con `GApplication`, esto se hace con la función `g_application_run()`. Una versión minimalista de la función `main()` en gedit se vería así:

```c
int
main (int    argc,
      char **argv)
{
  GeditApp *app;
  int status;

  /* Inicializacion de i18n (internacionalizacion) aqui. */

  app = gedit_app_new ();
  status = g_application_run (G_APPLICATION (app), argc, argv);
  g_object_unref (app);

  return status;
}
```

Lo que hace `GeditApp` es básicamente lo que debería hacerse en `main()` si no hubiera una subclase `GtkApplication`. Esto incluye:

* Configurando correctamente el objeto `GtkApplication`, por ejemplo, dando el ID de la aplicación;

* Conectando devoluciones de llamada a algunas señales, por ejemplo para crear una `GeditWindow` cuando sea necesario;

> **📌 Nota:** Pero tenga en cuenta que en una subclase de GObject, en lugar de conectar devoluciones de llamada a señales de una clase principal con p. Ej. `g_signal_connect()`, es mejor anular las funciones virtuales en su lugar.

* Implementando `GAction` en toda la aplicación. `GAction` es una parte de clase de GIO que representa una acción que el usuario puede desencadenar. Una acción en toda la aplicación es, por ejemplo, salir de la aplicación o abrir el cuadro de diálogo de preferencias (porque las preferencias se aplican a toda la aplicación).

Cuando comienzas a escribir una nueva aplicación GTK, no ves directamente la necesidad de una subclase `GtkApplication`, ya que el código en `main()`, más las devoluciones de llamada, aún son pequeñas. Pero cuando se agregan más y más características, es una buena idea en algún momento mover el código a una subclase `GtkApplication`. O para crear una subclase directamente. Una subclase es especialmente útil cuando surge la necesidad de almacenar datos adicionales.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-ch"></div>
