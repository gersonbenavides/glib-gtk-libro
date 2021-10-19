# Macros de uso frecuente

GLib define una serie de macros familiares que se utilizan en muchos programas C, que se muestran en el <span class="glib-simplemacros">Listado</span>. Todos estos deben ser autoexplicativos. `MIN()`/`MAX()` devuelven el menor o mayor de sus argumentos. `ABS()` devuelve el valor absoluto de su argumento. `CLAMP(x, low, high)` significa `x`, a menos que `x` esté fuera del rango [`low`, `high`]; si `x` está por debajo del rango, se devuelve `low`; si x está por encima del rango, se devuelve `high`. Además de las macros que se muestran en el <span class="glib-simplemacros">Listado</span>, `TRUE`/`FALSE`/`NULL` se definen como los habituales `1`/`0`/`((void *)0)`.

<a id="glib-simplemacros"></a>

```c
#include <glib.h>

MAX (a, b);
MIN (a, b);
ABS (x);
CLAMP (x, low, high);
```

<div class="caption">

<p><span class="glib-simplemacros">Listado</span>: Macros C familiares.</p>

</div>

También hay muchas macros exclusivas de GLib, como las conversiones portátiles `gpointer`-to-`gint` y `gpointer`-to-`guint` que se muestran en el <span class="glib-pointerint">Listado</span>.

<a id="glib-pointerint"></a>

```c
#include <glib.h>

GINT_TO_POINTER (p);
GPOINTER_TO_INT (p);
GUINT_TO_POINTER (p);
GPOINTER_TO_UINT (p);
```

<div class="caption">

<p><span class="glib-pointerint">Listado</span>: Macros para almacenar enteros en punteros.</p>

</div>

La mayoría de las estructuras de datos de GLib están diseñadas para almacenar un `gpointer`. Si desea almacenar punteros a objetos asignados dinámicamente, esto es lo correcto. Sin embargo, a veces desea almacenar una lista simple de números enteros sin tener que asignarlos dinámicamente. Aunque el estándar C no lo garantiza estrictamente, es posible almacenar un `gint` o `guint` en una variable `gpointer` en la amplia gama de plataformas a las que GLib ha sido portado; en algunos casos, se requiere un yeso intermedio. Las macros en el <span class="glib-pointerint">Listado</span> abstraen la presencia del elenco.

He aquí un ejemplo:

```c
gint my_int;
gpointer my_pointer;

my_int = 5;
my_pointer = GINT_TO_POINTER (my_int);
printf ("We are storing %d\n", GPOINTER_TO_INT (my_pointer));
```

Pero ten cuidado; estas macros le permiten almacenar un entero en un puntero, pero almacenar un puntero en un entero *no* funcionará. Para hacerlo de forma portátil, debe almacenar el puntero en un `long`. (Sin embargo, sin duda es una mala idea hacerlo).

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-glib"></div>