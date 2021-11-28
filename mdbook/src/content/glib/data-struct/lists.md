# Listas

GLib proporciona listas genéricas con enlaces simples y dobles, `GSList` y `GList`, respectivamente. Estos se implementan como listas de `gpointer`; puede usarlos para contener enteros con las macros `GINT_TO_POINTER` y `GPOINTER_TO_INT`. `GSList` y `GList` tienen casi las mismas API, excepto que hay una función `g_list_previous()` y no `g_slist_previous()`. Esta sección discutirá `GSList` pero todo también se aplica a la lista doblemente enlazada.

<a id="glib-gslist-cell"></a>

```c
typedef struct _GSList GSList;

struct _GSList
{
  gpointer data;
  GSList *next;
};
```

<div class="caption">

<p><span class="glib-gslist-cell">Listado</span>: Celda <code>GSList</code>.</p>

</div>

Una celda `GSList` es una estructura autoexplicativa que se muestra en el <span class="glib-gslist-cell">Listado</span>. Los campos de estructura son públicos, por lo que puede usarlos directamente para acceder a los datos o para recorrer la lista.

En la implementación de GLib, la lista vacía es simplemente un puntero `NULL`. Siempre es seguro pasar `NULL` a las funciones de lista, ya que es una lista válida de longitud 0. El código para crear una lista y agregar un elemento podría verse así:

```c
GSList *list = NULL;
gchar *element = g_strdup ("Una cadena de caracteres");
list = g_slist_append (list, element);
```

Las listas GLib tienen una influencia Lisp notable; la lista vacía es un valor especial "nil" por esa razón. `g_slist_prepend()` funciona de forma muy similar a `cons` -- es una operación de tiempo constante `(O(1))` que agrega una nueva celda al principio de la lista.

<a id="glib-listchanging"></a>

```c
#include <glib.h>

GSList * g_slist_append (GSList *list, gpointer data);
GSList * g_slist_prepend (GSList *list, gpointer data);
GSList * g_slist_insert (GSList *list, gpointer data, gint position);
GSList * g_slist_remove (GSList *list, gconstpointer data);
```

<div class="caption">

<p><span class="glib-listchanging">Listado</span>: Cambiar el contenido de la lista vinculada.</p>

</div>

El <span class="glib-listchanging">Listado</span> muestra las funciones básicas para cambiar el contenido de `GSList`. Para todos estos, debe asignar el valor de retorno a su puntero de lista en caso de que cambie el encabezado de la lista. Tenga en cuenta que GLib *no* almacena un puntero al final de la lista, por lo que las funciones de agregar, insertar y eliminar se ejecutan en el tiempo `O(n)`, con `n` la longitud de la lista.

GLib se encargará de los problemas de memoria, desasignando y asignando celdas de lista según sea necesario. Por ejemplo, el siguiente código eliminaría el elemento agregado anteriormente y vaciaría la lista:

```c
list = g_slist_remove (list, element);
```

`list` ahora es `NULL`. Aún tienes que liberar `element` tú mismo, por supuesto.

Para acceder a un elemento de lista, consulte la estructura `GSList` directamente:

```c
gchar *my_data = list->data;
```

Para iterar sobre la lista, puede escribir un código como este:

```c
GSList *l;

for (l = list; l != NULL; l = l->next)
  {
    gchar *str = l->data;
    g_print ("Elemento: %s\n", str);
  }
```

<a id="glib-listfree"></a>

```c
#include <glib.h>

typedef void (* GDestroyNotify) (gpointer data);

void g_slist_free (GSList *list);
void g_slist_free_full (GSList *list, GDestroyNotify free_func);
```

<div class="caption">

<p><span class="glib-listfree">Listado</span>: Liberar listas enteras vinculadas.</p>

</div>

El <span class="glib-listfree">Listado</span> muestra funciones para borrar una lista completa. `g_slist_free()` elimina todos los enlaces de una sola vez. `g_slist_free()` no tiene valor de retorno porque siempre sería `NULL`, y simplemente puede asignar ese valor a su lista si lo desea. Obviamente, `g_slist_free()` libera solo las celdas de la lista; no tiene forma de saber qué hacer con el contenido de la lista. La función más inteligente `g_slist_free_full()` toma un segundo argumento con un puntero de función de destrucción que se llama en los datos de cada elemento. Para liberar la lista que contiene cadenas asignadas dinámicamente, puede escribir:

```c
g_slist_free_full (list, g_free);

/* Si la lista se puede usar mas tarde: */
list = NULL;
```

Esto es equivalente a escribir:

```c
GSList *l;

for (l = list; l != NULL; l = l->next)
  g_free (l->data);

g_slist_free (list);
list = NULL;
```

Construir una lista usando `g_slist_append()` es una *terrible* idea; use `g_slist_prepend()` y luego llame a `g_slist_reverse()` si necesita elementos en un orden en particular. Si prevé agregar con frecuencia a una lista, también puede mantener un puntero al último elemento.

> **📌 Nota:** Una forma más conveniente es usar el tipo de datos GQueue: una cola de dos extremos que mantiene un puntero a la cabeza, un puntero a la cola y la longitud de la lista doblemente enlazada.

El siguiente código se puede usar para realizar agregados eficientes:

```c
void
efficient_append (GSList   **list,
                  GSList   **list_end,
                  gpointer   data)
{
  g_return_if_fail (list != NULL);
  g_return_if_fail (list_end != NULL);

  if (*list == NULL)
    {
      g_assert (*list_end == NULL);

      *list = g_slist_append (*list, data);
      *list_end = *list;
    }
  else
    {
      *list_end = g_slist_append (*list_end, data)->next;
    }
}
```

Para usar esta función, debe almacenar la lista y su final en algún lugar, y pasar su dirección a `efficient_append()`:

```c
GSList* list = NULL;
GSList* list_end = NULL;

efficient_append (&list, &list_end, g_strdup ("Foo"));
efficient_append (&list, &list_end, g_strdup ("Bar"));
efficient_append (&list, &list_end, g_strdup ("Baz"));
```

Por supuesto, debe tener cuidado de no utilizar ninguna función de lista que pueda cambiar el final de la lista sin actualizar `list_end`.

<a id="glib-listaccess"></a>

```c
#include <glib.h>

typedef void (* GFunc) (gpointer data, gpointer user_data);

GSList * g_slist_find (GSList *list, gconstpointer data);
GSList * g_slist_nth (GSList *list, guint n);
gpointer g_slist_nth_data (GSList *list, guint n);
GSList * g_slist_last (GSList *list);
gint g_slist_index (GSList *list, gconstpointer data);
void g_slist_foreach (GSList *list, GFunc func, gpointer user_data);
```

<div class="caption">

<p><span class="glib-listaccess">Listado</span>: Acceder a datos en una lista vinculada.</p>

</div>

Para acceder a los elementos de la lista, se proporcionan las funciones del <span class="glib-listaccess">Listado</span>. Ninguno de estos cambia la estructura de la lista. `g_slist_foreach()` aplica un `GFunc` a cada elemento de la lista.

Usado en `g_slist_foreach()`, su `GFunc` se llamará en cada `list->data` en `list`, pasando el `user_data` que proporcionó a `g_slist_foreach()`. `g_slist_foreach()` es comparable a la función "map" de Scheme.

Por ejemplo, es posible que tenga una lista de cadenas y que desee poder crear una lista paralela con alguna transformación aplicada a las cadenas. Aquí hay algo de código, usando la función `efficient_append()` de un ejemplo anterior:

```c
typedef struct _AppendContext AppendContext;
struct _AppendContext
{
  GSList *list;
  GSList *list_end;
  const gchar *append;
};

static void
append_foreach (gpointer data,
                gpointer user_data)
{
  gchar *oldstring = data;
  AppendContext *context = user_data;

  efficient_append (&context->list,
                    &context->list_end,
                    g_strconcat (oldstring, context->append, NULL));
}

GSList *
copy_with_append (GSList      *list_of_strings,
                  const gchar *append)
{
  AppendContext context;

  context.list = NULL;
  context.list_end = NULL;
  context.append = append;

  g_slist_foreach (list_of_strings, append_foreach, &context);

  return context.list;
}
```

GLib y GTK usan mucho el lenguaje de "puntero de función y datos de usuario". Si tiene experiencia en programación funcional, esto es muy parecido a usar expresiones lambda para crear un *cierre*. (Un cierre combina una función con un *environment* -- un conjunto de enlaces nombre-valor. En este caso, el "environment" son los datos de usuario que pasa a `append_foreach()`, y el "cierre" es la combinación del puntero de función y los datos del usuario).

<a id="glib-listmanip"></a>

```c
#include <glib.h>

guint g_slist_length (GSList *list);
GSList * g_slist_concat (GSList *list1, GSList *list2);
GSList * g_slist_reverse (GSList *list);
GSList * g_slist_copy (GSList *list);
```

<div class="caption">

<p><span class="glib-listmanip">Listado</span>: Manipular una lista vinculada.</p>

</div>

Hay algunas prácticas rutinas de manipulación de listas, listadas en <span class="glib-listmanip">Listado</span>. Con la excepción de `g_slist_copy()`, todos estos afectan las listas en el lugar. Lo que significa que debe asignar el valor de retorno y olvidarse del puntero pasado, tal como lo hace al agregar o eliminar elementos de la lista. `g_slist_copy()` devuelve una lista recién asignada, por lo que puede continuar usando ambas listas y debe liberar ambas listas eventualmente.

<a id="glib-listsorted"></a>

```c
#include <glib.h>

typedef gint (* GCompareFunc) (gconstpointer a, gconstpointer b);

GSList * g_slist_insert_sorted (GSList *list, gpointer data, GCompareFunc func);
GSList * g_slist_sort (GSList *list, GCompareFunc compare_func);
GSList * g_slist_find_custom (GSList *list, gconstpointer data, GCompareFunc func);
```

<div class="caption">

<p><span class="glib-listsorted">Listado</span>: Listas ordenadas.</p>

</div>

Finalmente, hay algunas disposiciones para listas ordenadas, que se muestran en <span class="glib-listsorted">Listado</span>. Para usarlos, debe escribir un `GCompareFunc`, que es como la función de comparación en el estándar C `qsort()`.

Si `a < b` , `GCompareFunc` debería devolver un valor negativo; si `a > b` un valor positivo; si `a == b` debería devolver 0.

Una vez que tenga una función de comparación, puede insertar un elemento en una lista ya ordenada u ordenar una lista completa. Las listas se ordenan en orden ascendente. Incluso puedes reciclar tu GCompareFunc para encontrar elementos de la lista, usando `g_slist_find_custom()`.

Tenga cuidado con las listas ordenadas; su mal uso puede volverse muy ineficaz rápidamente. Por ejemplo, `g_slist_insert_sorted()` es una operación `O(n)`, pero si la usa en un bucle para insertar varios elementos, el bucle se ejecuta en tiempo cuadrático (`O(n^2)`). Es mejor simplemente anteponer todos sus elementos y luego llamar a `g_slist_sort()`. `g_slist_sort()` se ejecuta en `O(n log n)`.

También puede usar la estructura de datos `GSequence` para datos ordenados. `GSequence` tiene una API de lista, pero se implementa internamente con un árbol binario equilibrado.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="glib-refs"></div>