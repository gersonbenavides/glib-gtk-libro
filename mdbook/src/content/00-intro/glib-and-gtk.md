# ¿Qué es GLib y GTK?

En términos generales, GLib es un conjunto de bibliotecas: GLib core, GObject y GIO. Esas tres bibliotecas se desarrollan en el mismo repositorio de Git llamado *glib*, por lo que cuando se hace referencia a "GLib", puede significar "GLib core" o el conjunto más amplio que incluye también GObject y GIO.

GLib core proporciona manejo de estructura de datos para C (listas enlazadas, árboles, tablas hash, ...), envoltorios de portabilidad, un bucle de eventos, hilos, carga dinámica de módulos y muchas funciones de utilidad.

GObject -- que depende del núcleo GLib -- simplifica la programación orientada a objetos y los paradigmas de programación dirigida por eventos en C. La programación dirigida por eventos no solo es útil para interfaces gráficas de usuario (con eventos de usuario como pulsaciones de teclas y clics del mouse), pero también para demonios que responden a cambios de hardware (una memoria USB insertada, un segundo monitor conectado, una impresora con poco papel), o software que escucha conexiones de red o mensajes de otros procesos, etc.

GIO -- que depende de GLib core y GObject -- proporciona API de alto nivel para entrada/salida: lectura de un archivo local, un archivo remoto, un flujo de red, comunicación entre procesos con D-Bus y muchos más.

Las bibliotecas GLib se pueden utilizar para escribir servicios del sistema operativo, bibliotecas, utilidades de línea de comandos y demás. GLib ofrece API de mayor nivel que el estándar POSIX; por lo tanto, es más cómodo escribir un programa en C con GLib.

GTK es un conjunto de herramientas de widgets basado en GLib que se puede utilizar para desarrollar aplicaciones con una interfaz gráfica de usuario (GUI). Un “widget” es un elemento de la GUI, por ejemplo, un botón, un texto, un menú, etc. Y hay algunos tipos especiales de widgets que se denominan “containers”, que pueden contener otros widgets, para ensamblar los elementos en una ventana. GTK proporciona una amplia gama de widgets y contenedores.

La primera versión de GTK +, o GIMP Tool Kit, fue escrita principalmente por Peter Mattis en 1996 para el GIMP (Programa de manipulación de imágenes GNU), pero se ha convertido rápidamente en una biblioteca de uso general. El “+” se ha agregado más tarde para distinguir entre la versión original y una nueva versión que agregó características orientadas a objetos. GLib comenzó como parte de GTK +, pero ahora es una biblioteca independiente.

> **📌 Nota:** El nombre `` The GIMP Tool Kit '' ahora rara vez se usa, hoy se conoce más comúnmente como GTK para abreviar.

Las API GLib y GTK están documentadas con GTK-Doc. Los comentarios especiales están escritos en el código fuente y GTK-Doc extrae esos comentarios para generar páginas HTML.

Aunque GLib y GTK están escritos en C, los enlaces de lenguaje están disponibles para JavaScript, Python, Perl y muchos otros lenguajes de programación. Al principio, se crearon enlaces manuales, que debían actualizarse cada vez que cambiaba la API de la biblioteca. Hoy en día, los enlaces de lenguaje son genéricos y, por lo tanto, se actualizan automáticamente cuando, por ejemplo, se agregan nuevas funciones, esto es gracias a GObject Introspection. Se agregan anotaciones especiales a los comentarios de GTK-Doc, para exponer más información de la que puede proporcionar la sintaxis de C, por ejemplo, sobre la transferencia de propiedad de contenido asignado dinámicamente.

> **📌 Nota:** Por ejemplo, si necesita liberar el valor de retorno.

Además, las anotaciones también son útiles para el programador en C porque es una forma buena y concisa de documentar ciertos aspectos recurrentes de la API.

GLib y GTK son parte del Proyecto GNU, cuyo objetivo general es desarrollar un sistema operativo libre (llamado GNU) más aplicaciones que lo acompañen. GNU significa “GNU’s Not Unix”, una forma divertida de decir que el sistema operativo GNU es compatible con Unix. Puede obtener más información sobre
GNU en [www.gnu.org](https://www.gnu.org).

El sitio web de GLib/GTK es: [www.gtk.org](http://www.gtk.org)