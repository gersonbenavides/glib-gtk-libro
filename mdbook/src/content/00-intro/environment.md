# El entorno de desarrollo

Esta sección describe el entorno de desarrollo que se usa normalmente al programar con GLib y GTK en un sistema Unix.

En una distribución GNU / Linux, a menudo se puede instalar un solo paquete o grupo para obtener un entorno de desarrollo C completo, que incluye, entre otros:

* Un compilador compatible con C89, GCC por ejemplo.
* El depurador GNU GDB.
* GNU Make.
* Los Autotools (Autoconf, Automake y Libtool).
* Las páginas del manual: the Linux kernel and the glibc.

> **📌 Nota:** No confundir la biblioteca GNU C (glibc) con GLib. La primera es de nivel inferior.

Para utilizar GLib y GTK como desarrollador, existen varias soluciones:

* Los encabezados y la documentación se pueden instalar con el administrador de paquetes. El nombre de los paquetes suele terminar con uno de los siguientes sufijos: `-devel`, `-dev` o `-doc`. Por ejemplo `glib2-devel` y `glib2-doc` en Fedora.
* Las últimas versiones de GLib y GTK se pueden instalar con Jhbuild: [wiki.gnome.org/Projects/Jhbuild](https://wiki.gnome.org/Projects/Jhbuild)

Para leer la documentación de la API de GLib y GTK, Devhelp es una aplicación útil, si ha instalado el paquete -dev o -doc. Para el editor de texto o IDE, hay muchas opciones (y una fuente de muchos trolls): Vim, Emacs, gedit, Anjuta,
MonoDevelop/Xamarin Studio, Geany,... Un prometedor IDE especializado para GNOME es Builder, actualmente en desarrollo. Para crear una GUI con GTK, puede escribir directamente el código para hacerlo o puede usar Glade para diseñar la GUI gráficamente. Finalmente, GTK-Doc se usa para escribir documentación de API y agregar las anotaciones de GObject Introspection.

Cuando utilice GLib o GTK, preste atención a no utilizar API obsoletas para el código recién escrito. Asegúrese de leer la documentación más reciente. También están disponibles en línea en:

[developer.gnome.org](https://developer.gnome.org/)