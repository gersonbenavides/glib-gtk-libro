# Programación semi-orientada a objetos en C

En el capítulo anterior se explicó que la biblioteca principal de GLib utiliza un estilo de codificación semi-orientado a objetos. Esta sección explica lo que significa y cómo escribir su propio código con este estilo de codificación.

Una de las ideas principales de OOP es *mantener los datos y el comportamiento relacionados en un solo lugar*.

> **📌 Nota:** Esta es una de las pautas discutidas en *Heurística de diseño orientado a objetos* <span class="oop-book"></span>.

En C, los datos se almacenan en una `struct` y el comportamiento se implementa con funciones. Para mantenerlos en un solo lugar, los colocamos en el mismo archivo *.c, con las funciones públicas presentes en el archivo *.h correspondiente (el encabezado).

Otra idea importante de OOP es *ocultar todos los datos dentro de su clase*. En C, significa que la declaración completa de `struct` debe estar presente solo en el archivo *.c, mientras que el encabezado contiene solo un `typedef`. Cómo se almacenan los datos dentro de la clase y qué estructuras de datos se utilizan debe seguir siendo un detalle de implementación. Un usuario de la clase no debe estar al tanto de los detalles de implementación, en su lugar, debe confiar solo en la interfaz externa, es decir, lo que está presente en el encabezado y la documentación pública. De esa manera, la implementación de la clase puede cambiar sin afectar a los usuarios de la clase, siempre que la API no cambie.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-biblio"></div>