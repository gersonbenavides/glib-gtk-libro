# ¿Por qué y cuándo se usa el lenguaje C?

Las bibliotecas GLib y GTK pueden ser utilizadas por otros lenguajes de programación además de C. Gracias a GObject Introspection, los enlaces automáticos están disponibles para una variedad de idiomas para todas las bibliotecas basadas en GObject. Los enlaces oficiales de GNOME están disponibles para los siguientes lenguajes:

| Lenguaje             | v3 | v4 |
|----------------------|----|----|
| [C++][gtk-cpp]       | ☑  | ☑  |
| [JavaScript][gtk-js] | ☑  | ☑  |
| [Python][gtk-py]     | ☑  | ☑  |
| [Rust][gtk-rs]       | ☑  | ☑  |
| [Vala][gtk-vala]     | ☑  | ☑  |

> **📌 Nota:** Aunque existen enlaces a mas lenguajes, los expresados en la tabla son los mas activos es sus repositorios y con una mayor comunidad.

Vala es un nuevo lenguaje de programación basado en GObject que integra las peculiaridades de GObject directamente en su sintaxis similar a C#. Más allá de los enlaces oficiales de GNOME, GLib y GTK se pueden usar en más de una docena de lenguajes de programación, con un nivel de soporte variable. Entonces, ¿por qué y cuándo elegir el lenguaje C? Para escribir un demonio en un sistema Unix, C es el idioma *predeterminado*. Pero es menos obvio para una aplicación. Para responder a la pregunta, veamos primero cómo estructurar el código base de una aplicación.

[gtk-cpp]: <https://www.gtkmm.org/en/index.html> "gtkmm"
[gtk-js]: <https://gjs.guide/> "GJS"
[gtk-py]: <https://pygobject.readthedocs.io/en/latest/> "PyGObject"
[gtk-rs]: <https://gtk-rs.org/> "gtk-rs"
[gtk-vala]: <https://valadoc.org/> "Vala"