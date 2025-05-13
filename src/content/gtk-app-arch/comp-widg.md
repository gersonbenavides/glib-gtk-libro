# Widgets compuestos

Los widgets compuestos son contenedores que ya contienen una colección útil de widgets secundarios en un paquete agradable. Implementar un widget compuesto es fácil (una vez que sepa cómo subclasificar una clase GObject), solo necesita:


1. Subclase un contenedor como `GtkGrid` o `GtkBin` o `GtkWindow`;
1. En el constructor de la clase, cree los widgets secundarios y agréguelos al contenedor.


En el esquema de la clase gedit, los widgets compuestos son las subclases de `GtkGrid` (`GeditPanel` y `GeditTab`) y `GeditWindow`.

`GeditWindow` es una subclase indirecta de `GtkBin`, por lo que puede contener como máximo un widget hijo. Es por eso que `GeditWindow` usa un `GtkGrid` como su widget hijo, de modo que `GtkGrid` puede contener a su vez todos los elementos de la ventana.

Por defecto, una `GeditTab` tiene solo un widget secundario, la `GtkScrolledWindow` que contiene la `GeditView`. Pero `GeditTab` tiene una función para agregar un `GtkInfoBar` en la parte superior, mostrando por ejemplo un mensaje de error.

Entonces, mientras `GtkGrid` es un contenedor de uso general que inicialmente no contiene ningún widget secundario, un widget compuesto es un contenedor especializado que ya contiene widgets secundarios específicos. Escribir widgets compuestos es una forma conveniente de codificar aplicaciones.

<!-- POR HACER mostrar un ejemplo de código -->