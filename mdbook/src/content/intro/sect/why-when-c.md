# ¿Por qué y cuándo se usa el lenguaje C?

Las bibliotecas GLib y GTK pueden ser utilizadas por otros lenguajes de programación además de C. Gracias a GObject Introspection, los enlaces automáticos están disponibles para una gran variedad de lenguajes, de manera que puedan ser usadas todas las bibliotecas basadas en GObject por estos. Los enlaces oficiales de GNOME están disponibles para los siguientes lenguajes:

| Lenguaje             | v3 | v4 |
|----------------------|----|----|
| [C++][gtk-cpp]       | ☑  | ☑  |
| [JavaScript][gtk-js] | ☑  | ☑  |
| [Python][gtk-py]     | ☑  | ☑  |
| [Rust][gtk-rs]       | ☑  | ☑  |
| [Vala][gtk-vala]     | ☑  | ☑  |

> **📌 Nota:** Aunque existen enlaces a más lenguajes, los expresados en la tabla son los más activos es sus repositorios y con una mayor comunidad.

Una buena alternativa es Vala, el cual es un nuevo lenguaje de programación que integra las peculiaridades de GObject directamente en su sintaxis similar a C#. De manera que todo el código hecho en Vala es traducido a código en C, el cual hace uso de GObject directamente, esto puede resultar útil si desea código cercano a C pero haciendo uso de un lenguaje más moderno.

> **📌 Nota:** Tenga en cuenta que el lenguaje Vala podría considerarse un lenguaje de nicho, teniendo una comunidad pequeña si es comparado con lenguajes más populares.

Más allá de los enlaces oficiales de GNOME, GLib y GTK se pueden usar en más de una docena de lenguajes de programación, con un nivel de soporte variable. Entonces, *¿por qué y cuándo elegir el lenguaje C?*.

Por ejemplo, para escribir un demonio en un sistema tipo Unix, C es el idioma *predeterminado*. Pero es menos obvio que lenguaje usar para una aplicación. Para responder a la pregunta, veamos primero cómo estructurar el código base de una aplicación.

[gtk-cpp]: <https://www.gtkmm.org/en/index.html> "gtkmm"
[gtk-js]: <https://gjs.guide/> "GJS"
[gtk-py]: <https://pygobject.readthedocs.io/en/latest/> "PyGObject"
[gtk-rs]: <https://gtk-rs.org/> "gtk-rs"
[gtk-vala]: <https://valadoc.org/> "Vala"