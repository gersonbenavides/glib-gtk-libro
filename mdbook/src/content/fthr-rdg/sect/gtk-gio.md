# GTK y GIO

GTK y GIO se pueden aprender en paralelo.

Debería poder usar cualquier clase de GObject en GIO, solo lea la descripción de la clase y hojee la lista de funciones para tener una descripción general de las características que proporciona una clase. Entre otras cosas interesantes, GIO incluye:

* `GFile` para manejar archivos y directorios.
* `GSettings` para almacenar la configuración de la aplicación.
* `GDBus`: una API de alto nivel para el sistema de comunicación entre procesos D-Bus.
* `GSubprocess` para iniciar procesos secundarios y comunicarse con ellos de forma asincrónica.
* `GCancellable`, `GAsyncResult` y `GTask` para usar o implementar tareas asincrónicas y cancelables.
* Muchas otras funciones, como flujos de E/S, soporte de red o soporte de aplicaciones.

Para crear aplicaciones gráficas con GTK, no se preocupe, la documentación de referencia tiene una guía de introducción, disponible con Devhelp o en línea en:


[developer.gnome.org/gtk3/stable/](https://developer.gnome.org/gtk3/stable/)

Después de leer la guía de introducción, lea toda la referencia de la API para familiarizarse con los widgets, contenedores y clases base disponibles. Algunos widgets tienen una API bastante grande, por lo que también están disponibles algunos tutoriales externos, por ejemplo, para `GtkTextView` y `GtkTreeView`. Consulte la página de documentación en:

[www.gtk.org](http://www.gtk.org)

También hay una serie de pequeños tutoriales sobre varios temas GLib/GTK:

[wiki.gnome.org/HowDoI](https://wiki.gnome.org/HowDoI)
