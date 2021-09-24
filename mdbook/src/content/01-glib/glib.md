# GLib, la biblioteca principal

GLib es la biblioteca central de bajo nivel que forma la base para proyectos como GTK y GNOME. Proporciona estructuras de datos, funciones de utilidad, envoltorios de portabilidad y otras funciones esenciales, como un bucle de eventos e hilos. GLib está disponible en la mayoría de los sistemas similares a Unix y Windows.

Este capítulo cubre algunas de las funciones más utilizadas. GLib es simple y los conceptos son familiares; así que nos moveremos rápidamente. Para obtener una cobertura más completa de GLib, consulte la última documentación de la API que viene con la biblioteca (para el entorno de desarrollo, consulte la sección 1.9 en la p. 10). Por cierto: si tiene preguntas muy específicas sobre la implementación, no tema mirar el código fuente. Normalmente, la ocumentación contiene suficiente información, pero si encuentra un detalle faltante, por favor presente un error (por supuesto, lo mejor sería con un parche proporcionado).

Las diversas instalaciones de GLib están destinadas a tener una interfaz coherente; el estilo de codificación está orientado a semiobjetos, y los identificadores tienen el prefijo "g" para crear una especie de espacio de nombres.

GLib tiene algunos encabezados de nivel superior:

* `glib.h`, el encabezado principal.
* `gmodule.h` para carga dinámica de módulos.
* `glib-unix.h` para API específicas de Unix.
* `glib/gi18n.h` y `glib/gi18n-lib.h` para la internacionalización;
* `glib/gprintf.h` y `glib/gstdio.h` para evitar hacer uso de todo `stdio`.

> **📌 Nota:** En lugar de reinventar la rueda, este capítulo se basa en gran medida en el capítulo correspondiente del libro *GTK+/Gnome Application Development* de Havoc Pennington, con licencia de Open Publication License (consulte la sección 1.1 p. 3). GLib tiene una API muy estable. A pesar de que el libro de Havoc Pennington fue escrito en 1999 (para GLib 1.2), solo se requirieron algunas actualizaciones para adaptarse a las últimas versiones de GLib (versión 2.42 en el momento de escribir este artículo).