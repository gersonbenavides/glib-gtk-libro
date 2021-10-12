# Memoria

GLib envuelve el estándar `malloc()` y `free()` con sus propias variantes `g_`, `g_malloc()` y `g_free()`, que se muestran en el <span class="glib-malloc-free">Listado</span>. Estos son agradables de varias maneras pequeñas:

* `g_malloc()` siempre devuelve un `gpointer`, nunca un `char *`, por lo que no es necesario emitir el valor de retorno.

* `g_malloc()` aborta el programa si el `malloc()` subyacente falla, por lo que no tiene que buscar un valor devuelto `NULL`.

* `g_malloc()` maneja con gracia un `size` de `0`, devolviendo `NULL`.

* `g_free()` ignorará cualquier puntero `NULL` que le pase.

> **📌 Nota:** Antes del estándar ANSI/ISO C, el tipo de puntero genérico `void *` no existía y `malloc()` devolvía un valor `char *`. Actualmente, `malloc()` devuelve un tipo `void *` (que es lo mismo que `gpointer`) y `void *` permite conversiones de puntero implícitas en C. Lanzando el valor de retorno de `malloc()` es necesario si: el desarrollador quiere admitir compiladores antiguos; o si el desarrollador piensa que una conversión explícita aclara el código; o si se usa un compilador de C++, porque en C++ se requiere una conversión del tipo `void *`.

<a id="glib-malloc-free"></a>

```c
#include <glib.h>

gpointer g_malloc (gsize n_bytes);
void g_free (gpointer mem);
gpointer g_realloc (gpointer mem, gsize n_bytes);
gpointer g_memdup (gconstpointer mem, guint n_bytes);
```

<div class="caption">

<p><span class="glib-malloc-free">Listado</span>: Asignación de memoria GLib.</p>

</div>

Es importante hacer coincidir `g_malloc()` con `g_free()`, `malloc()` simple con `free()` y si estás usando C++ `new` con `delete`. De lo contrario, pueden suceder errores, ya que estos asignadores pueden usar diferentes grupos de memoria (y `new`/`delete` llama a constructores y destructores).

Por supuesto, hay un `g_realloc()` equivalente a `realloc()`. También hay un conveniente `g_malloc0()` que llena la memoria asignada con ceros, y `g_memdup()` que devuelve una copia de `n_bytes` bytes comenzando en `mem`. `g_realloc()` y `g_malloc0()` aceptarán ambos un tamaño de 0, por coherencia con `g_malloc()`. Sin embargo, `g_memdup()` no lo hará.

Si no es obvio: `g_malloc0()` llena la memoria sin procesar con bits no configurados, no el valor 0 para cualquier tipo que pretenda poner allí. De vez en cuando, alguien espera obtener una matriz de números de coma flotante inicializados en 0.0; *no* se garantiza que funcione de forma portátil.

Por último, existen macros de asignación con reconocimiento de tipos, que se muestran en el <span class="glib-g_new">Listado</span>. El argumento `type` para cada uno de estos es el nombre de un tipo, y el argumento `count` es el número de bloques de tamaño `type` a asignar. Estas macros le ahorran algo de escritura y multiplicación y, por lo tanto, son menos propensas a errores. Se lanzan automáticamente al tipo de puntero de destino, por lo que intentar asignar la memoria asignada al tipo de puntero incorrecto debería activar una advertencia del compilador. (Si tiene las advertencias activadas, ¡como debería hacerlo un programador responsable!)

<a id="glib-g_new"></a>

```c
#include <glib.h>

g_new (type, count);
g_new0 (type, count);
g_renew (type, mem, count);
```

<div class="caption">

<p><span class="glib-g_new">Listado</span>: Macros de asignación.</p>

</div>

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-glib"></div>