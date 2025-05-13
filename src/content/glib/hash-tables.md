# Tablas hash

`GHashTable` es una implementación de tabla hash simple, que proporciona una matriz asociativa con búsquedas en tiempo constante. Para crear y destruir una `GHashTable`, use un constructor y un destructor listados en <span class="glib-hashnew">Listado</span>. Debe proporcionar una `GHashFunc`, que debería devolver un entero positivo cuando se le pase una clave hash. Cada `guint` devuelto (módulo del tamaño de la tabla) corresponde a un "slot" o "bucket" en el hash; `GHashTable` maneja las colisiones almacenando una lista vinculada de pares clave-valor en cada espacio. Por lo tanto, los valores de `guint` devueltos por su `GHashFunc` deben distribuirse de manera bastante uniforme sobre el conjunto de posibles valores de `guint`, o la tabla hash degenerará en una lista enlazada. Su `GHashFunc` también debe ser rápido, ya que se usa para cada búsqueda.

Además de `GHashFunc`, se requiere una `GEqualFunc` para probar la igualdad de las claves. Se utiliza para encontrar el par clave-valor correcto cuando las colisiones hash dan como resultado más de un par en la misma ranura hash.

Si usa el constructor básico `g_hash_table_new()`, recuerde que GLib no tiene forma de saber cómo destruir los datos contenidos en su tabla hash; solo destruye la tabla misma. Si es necesario liberar las claves y los valores, use `g_hash_table_new_full()`, las funciones de destrucción se llamarán en cada clave y valor antes de destruir la tabla hash.

<a id="glib-hashnew"></a>

```c
#include <glib.h>

typedef guint (* GHashFunc) (gconstpointer key);
typedef gboolean (* GEqualFunc) (gconstpointer a, gconstpointer b);
typedef void (* GDestroyNotify) (gpointer data);

GHashTable * g_hash_table_new (GHashFunc hash_func, GEqualFunc key_equal_func);

GHashTable * g_hash_table_new_full (GHashFunc hash_func,
                                    GEqualFunc key_equal_func,
                                    GDestroyNotify key_destroy_func,
                                    GDestroyNotify value_destroy_func);

void g_hash_table_destroy (GHashTable *hash_table);
```

<div class="caption">

<p><span class="glib-hashnew">Listado</span>: <code>GHashTable</code> constructores y destructores</p>

</div>

Se proporcionan funciones de comparación y hash listas para usar para claves comunes: enteros, punteros, cadenas y otros tipos de GLib. Los más comunes se enumeran en el <span class="glib-hashfuncs">Listado</span>. Las funciones para enteros aceptan un puntero a `gint`, en lugar de a `gint` en sí. Si pasa `NULL` como argumento de la función hash a `g_hash_table_new()`, `g_direct_hash()` se usa por defecto. Si pasa `NULL` como la función de igualdad de claves, entonces se usa una comparación de puntero simple (equivalente a `g_direct_equal()`, pero sin una llamada de función).

<a id="glib-hashfuncs"></a>

```c
#include <glib.h>

guint g_int_hash (gconstpointer key);
gboolean g_int_equal (gconstpointer key1, gconstpointer key2);
guint g_direct_hash (gconstpointer key);
gboolean g_direct_equal (gconstpointer key1, gconstpointer key2);
guint g_str_hash (gconstpointer key);
gboolean g_str_equal (gconstpointer key1, gconstpointer key2);
```

<div class="caption">

<p><span class="glib-hashfuncs">Listado</span>: Hashes/comparaciones preescritos</p>

</div>

Manipular la tabla hash es simple. Las rutinas se resumen en <span class="glib-hashmanip">Listado</span>. Las inserciones *no* copian la clave o el valor; estos se ingresan en la tabla exactamente como los proporciona, reemplazando cualquier par clave-valor preexistente con la misma clave ("igual" está definido por sus funciones hash e igualdad, recuerde). Si esto es un problema, debe realizar una búsqueda o eliminar antes de insertar. Tenga especial cuidado si asigna claves o valores de forma dinámica. Si ha proporcionado funciones `GDestroyNotify`, éstas se llamarán automáticamente en el antiguo par clave-valor antes de reemplazarlo.

El `g_hash_table_lookup()` simple devuelve el valor que encuentra asociado con `key`, o `NULL` si no hay ningún valor. A veces esto no funciona. Por ejemplo, `NULL` puede ser un valor válido en sí mismo. Si está utilizando cadenas como claves, especialmente cadenas asignadas dinámicamente, saber que una clave está en la tabla puede no ser suficiente; es posible que desee recuperar el `gchar*` exacto que utiliza la tabla hash para representar la clave `"foo"` . Se proporciona una segunda función de búsqueda para casos como estos. `g_hash_table_lookup_extended()` devuelve `TRUE` si la búsqueda se realizó correctamente; si devuelve `TRUE`, coloca la clave y el valor que encontró en las ubicaciones proporcionadas.

<a id="glib-hashmanip"></a>

```c
#include <glib.h>

gboolean g_hash_table_insert (GHashTable *hash_table, gpointer key, gpointer value);
gboolean g_hash_table_remove (GHashTable *hash_table, gconstpointer key);
gpointer g_hash_table_lookup (GHashTable *hash_table, gconstpointer key);
gboolean g_hash_table_lookup_extended (GHashTable *hash_table,
                                       gconstpointer lookup_key,
                                       gpointer *orig_key,
                                       gpointer *value);
```

<div class="caption">

<p><span class="glib-hashmanip">Listado</span>: Manipular una <code>GHashTable</code></p>

</div>
