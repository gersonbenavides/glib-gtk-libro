# El bucle del evento principal

<a id="glib-event-loop"></a>

<div class="caption">

<img src="../../assets/img/diag/event-loop.svg" alt="Estructura de una aplicación impulsada por eventos" width="70%" />

<p><span class="glib-event-loop">Figura</span>: Estructura de una aplicación impulsada por eventos, con un bucle de eventos principal</p>

</div>

Las aplicaciones actuales a menudo se basan en eventos. Para las aplicaciones GUI, hay muchas fuentes de eventos: una pulsación de tecla, un clic del mouse, un gesto táctil, un mensaje de otra aplicación, un cambio en el sistema de archivos, estar conectado o desconectado de la red, etc. Una aplicación necesita reaccionar a esos eventos. Por ejemplo, cuando se presiona una tecla cuando una entrada de texto tiene el foco, el carácter debe insertarse y mostrarse en la pantalla.

Pero la programación dirigida por eventos también se aplica a los daemons. La comunicación entre procesos también ocurre entre daemons y aplicaciones. Un daemon podría recibir un evento cuando llega un paquete a una interfaz de red. Un daemon de impresora podría recibir eventos cuando una impresora está conectada, desconectada, tiene poco papel, etc. Un daemon de montaje puede escuchar las memorias USB insertadas. Otro daemon puede escuchar las conexiones de monitores externos para reconfigurar las pantallas, y así sucesivamente.

Un programa impulsado por eventos no está estructurado de la misma manera que un programa por lotes. El trabajo a realizar por un programa por lotes se determina al principio. Luego analiza la entrada, realiza algunos cálculos sobre ella y genera un informe. Por ejemplo, la mayoría de los comandos y scripts de Unix son programas por lotes.

Entonces, ¿cómo estructurar una aplicación que necesita responder a varios eventos que pueden llegar en cualquier momento? Como sugiere el título de esta sección ... ¡con un *bucle de evento principal* por supuesto! Esa es otra parte importante de GLib; Proporciona soporte básico de programación dirigida por eventos, con una abstracción de bucle de eventos principal, una implementación portátil de subprocesos y comunicación asincrónica entre subprocesos. Un bucle de eventos escucha algunas fuentes de eventos. Se asocia una prioridad con cada fuente de eventos. Cuando llega un evento, el bucle de eventos lo envía a la aplicación. El evento se puede tener en cuenta, ya sea en el mismo hilo o en otro hilo. La <span class="glib-event-loop">Figura</span> muestra una vista de alto nivel de lo que es un bucle de eventos principal.

La función `main()` de una aplicación dirigida por eventos se ve así:

```c
gint
main (gint   argc,
      gchar *argv[])
{
  /* Cree una ventana principal y adjunte devoluciones de llamada de senal. */

  /* Ejecute el bucle de eventos principal. */
  gtk_main ();

  return 0;
}
```

El bucle de eventos GTK tiene un nivel ligeramente más alto que la abstracción del bucle de eventos GLib. `gtk_main()` ejecuta el ciclo de eventos principal hasta que se llama a `gtk_main_quit()`. `gtk_main_quit()` normalmente se llama en la devolución de llamada de la función cuando se hace clic en el botón de cierre o se activa la acción del menú Salir.

Una devolución de llamada es una función que se llama cuando se envía una señal. El sistema de señales está implementado por la biblioteca GObject. Escuchar una señal se logra con la función `g_signal_connect()`:

```c
static void
button_clicked_cb (GtkButton *button,
                   gpointer   user_data)
{
  MyObject *self = user_data;

  /* Hacer algo */
}

static void
create_button (MyObject *self)
{
  GtkButton *button;

  /* Crear boton */

  /* Adjuntar devolucion de llamada de senal */
  g_signal_connect (button,
                    "clicked",
                    G_CALLBACK (button_clicked_cb),
                    self);
}
```

Cuando se ejecuta una devolución de llamada, bloquea el bucle principal. Entonces, para no congelar la interfaz de usuario, existen dos soluciones:

1. Las operaciones largas (especialmente las E/S) se pueden iniciar en otro hilo.

2. Las operaciones largas se pueden dividir en fragmentos más pequeños, y cada fragmento se ejecuta en una iteración de bucle principal separada.

Para la segunda solución, GLib proporciona las funciones `g_idle_add()` y `g_timeout_add()` (ver <span class="glib-idle-timeout">Listado</span>). Se llamará a una función inactiva cuando el bucle principal esté inactivo, es decir, cuando el bucle principal no tenga nada más que hacer. Se llama a una función de tiempo de espera a intervalos regulares. El valor de retorno booleano de una `GSourceFunc` permite continuar o detener la función. Si continúa, el bucle principal volverá a llamar a la función en el siguiente tiempo de inactividad o tiempo de espera. Puede eliminar manualmente `GSourceFunc` llamando a `g_source_remove()`, que toma como parámetro el ID de origen devuelto por `g_idle_add()` o `g_timeout_add()`. Debe prestar atención para eliminar una `GSourceFunc` cuando se destruye el objeto en el que realiza el cálculo. Por lo tanto, puede almacenar el ID de fuente en un atributo de objeto y llamar a `g_source_remove()` en el destructor si el ID de fuente es diferente de `0`. (Consulte la biblioteca de GObject para crear sus propias clases en C.)

<a id="glib-idle-timeout"></a>

```c
#include <glib.h>

typedef gboolean (* GSourceFunc) (gpointer user_data);

guint g_idle_add (GSourceFunc function, gpointer data);
guint g_timeout_add (guint interval, GSourceFunc function, gpointer data);

gboolean g_source_remove (guint source_id);
```

<div class="caption">

<p><span class="glib-idle-timeout">Listado</span>: Inactivos y tiempos de espera</p>

</div>
