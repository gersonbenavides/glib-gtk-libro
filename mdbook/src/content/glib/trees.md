# Árboles

Hay dos tipos diferentes de árboles en GLib; `GTree` es su árbol binario balanceado básico, útil para almacenar pares clave-valor ordenados por clave; `GNode` almacena datos arbitrarios estructurados en árbol, como un árbol de análisis o taxonomía.

## GTree

<a id="glib-treeconstruct"></a>

```c
#include <glib.h>

typedef gint (* GCompareFunc) (gconstpointer a, gconstpointer b);
typedef gint (* GCompareDataFunc) (gconstpointer a,
                                   gconstpointer b,
                                   gpointer user_data);

GTree * g_tree_new (GCompareFunc key_compare_func);

GTree * g_tree_new_full (GCompareDataFunc key_compare_func,
                         gpointer key_compare_data,
                         GDestroyNotify key_destroy_func,
                         GDestroyNotify value_destroy_func);

void g_tree_destroy (GTree *tree);
```

<div class="caption">

<p><span class="glib-treeconstruct">Listado</span>: Creando y destruyendo árboles binarios balanceados.</p>

</div>

Para crear y destruir un `GTree`, use un constructor y un destructor que se muestran en el <span class="glib-treeconstruct">Listado</span>. `GCompareFunc` es la misma `qsort()`-función de comparación de estilo descrita para `GSList`; en este caso, se utiliza para comparar claves en el árbol. `g_tree_new_full()` es útil para facilitar la gestión de la memoria para claves y valores asignados dinámicamente.

La estructura `GTree` es un tipo de datos opaco. Se accede y modifica a su contenido únicamente con funciones públicas.

<a id="glib-treemanip"></a>

```c
#include <glib.h>

void g_tree_insert (GTree *tree, gpointer key, gpointer value);
gboolean g_tree_remove (GTree *tree, gconstpointer key);
gpointer g_tree_lookup (GTree *tree, gconstpointer key);
```

<div class="caption">

<p><span class="glib-treemanip">Listado</span>: Manipular el contenido de <code>GTree</code>.</p>

</div>

Las funciones para manipular el contenido del árbol se muestran en <span class="glib-treemanip">Listado</span>. Todo muy sencillo; `g_tree_insert()` sobrescribe cualquier valor existente, así que si no usa `g_tree_new_full()`, tenga cuidado si el valor existente es su único puntero a una porción de memoria asignada. Si `g_tree_lookup()` no encuentra la clave, devuelve `NULL`; de lo contrario, devuelve el valor asociado. Tanto las claves como los valores tienen el tipo `gpointer` o `gconstpointer`, pero las macros `GPOINTER_TO_INT()` y `GPOINTER_TO_UINT()` le permiten usar enteros en su lugar.

<a id="glib-treesize"></a>

```c
#include <glib.h>

gint g_tree_nnodes (GTree *tree);
gint g_tree_height (GTree *tree);
```

<div class="caption">

<p><span class="glib-treesize">Listado</span>: Determinar el tamaño de un <code>GTree</code>.</p>

</div>

Hay dos funciones que le dan una idea del tamaño del árbol, que se muestran en el <span class="glib-treesize">Listado</span>.

<a id="glib-treetraverse"></a>

```c
#include <glib.h>

typedef gboolean (* GTraverseFunc) (gpointer key,
                                    gpointer value,
                                    gpointer data);

void g_tree_foreach (GTree *tree, GTraverseFunc func, gpointer user_data);
```

<div class="caption">

<p><span class="glib-treetraverse">Listado</span>: Atravesando un <code>GTree</code>.</p>

</div>

Usando `g_tree_foreach()` (<span class="glib-treetraverse">Listado</span>) puedes recorrer todo el árbol. Para usarlo, proporcione un `GTraverseFunc`, al que se le pasa cada par clave-valor y un argumento `data` que le da a `g_tree_foreach()`. El recorrido continúa mientras `GTraverseFunc` devuelva `FALSE`; si alguna vez devuelve `TRUE`, el recorrido se detiene. Puede usar esto para buscar en el árbol por *valor*.

## GNode

<a id="glib-nodecell"></a>

```c
typedef struct _GNode GNode;

struct _GNode
{
  gpointer data;
  GNode *next;
  GNode *prev;
  GNode *parent;
  GNode *children;
};
```

<div class="caption">

<p><span class="glib-nodecell">Listado</span>: Celda <code>GNode</code>.</p>

</div>

A `GNode` es un árbol N-ario, implementado como una lista doblemente enlazada con listas padre e hijo. Por lo tanto, la mayoría de las operaciones de lista tienen análogos en la API `GNode`. Puedes caminar por el árbol de varias maneras. El <span class="glib-nodecell">Listado</span> muestra la declaración de un nodo.

<a id="glib-nodeaccess"></a>

```c
#include <glib.h>

g_node_prev_sibling (node);
g_node_next_sibling (node);
g_node_first_child (node);
```

<div class="caption">

<p><span class="glib-nodeaccess">Listado</span>: Accediendo a <code>GNode</code>.</p>

</div>

Hay macros para acceder a los miembros de `GNode` , que se muestran en el <span class="glib-nodeaccess">Listado</span>. Al igual que con `GList`, el miembro `data` está diseñado para usarse directamente. Estas macros devuelven los miembros `next`, `prev` y `children` respectivamente; también comprueban si su argumento es `NULL` antes de eliminar la referencia, y devuelven `NULL` si lo es.

<a id="glib-nodenew"></a>

```c
#include <glib.h>

GNode * g_node_new (gpointer data);
```

<div class="caption">

<p><span class="glib-nodenew">Listado</span>: Creando un <code>GNode</code>.</p>

</div>

Para crear un nodo, se proporciona la función `_new()` habitual (<span class="glib-nodenew">Listado</span>). `g_node_new()` crea un nodo sin hijos y sin padres que contiene `datos`. Normalmente, `g_node_new()` se usa solo para crear el nodo raíz; Se proporcionan macros de conveniencia que crean automáticamente nuevos nodos según sea necesario.

<a id="glib-nodebuild"></a>

```c
#include <glib.h>

GNode * g_node_insert (GNode *parent, gint position, GNode *node);
GNode * g_node_insert_before (GNode *parent, GNode *sibling, GNode *node);
GNode * g_node_prepend (GNode *parent, GNode *node);
```

<div class="caption">

<p><span class="glib-nodebuild">Listado</span>: Construyendo un árbol <code>GNode</code>.</p>

</div>

Para construir un árbol se utilizan las operaciones fundamentales que se muestran en el <span class="glib-nodebuild">Listado</span>. Cada operación devuelve el nodo recién agregado, para mayor comodidad al escribir bucles o recuperar el árbol. A diferencia de `GList`, es seguro ignorar el valor de retorno.

<a id="glib-nodeconv"></a>

```c
#include <glib.h>

g_node_append (parent, node);
g_node_insert_data (parent, position, data);
g_node_insert_data_before (parent, sibling, data);
g_node_prepend_data (parent, data);
g_node_append_data (parent, data);
```

<div class="caption">

<p><span class="glib-nodeconv">Listado</span>: Construyendo un <code>GNode</code>.</p>

</div>

Las macros de conveniencia que se muestran en el <span class="glib-nodeconv">Listado</span> se implementan en términos de las operaciones fundamentales. `g_node_append()` es análogo a `g_node_prepend()`; el resto toma un argumento `data`, automáticamente le asigna un nodo y llama a la operación básica correspondiente.

<a id="glib-nodedestroy"></a>

```c
#include <glib.h>

void g_node_destroy (GNode *root);
void g_node_unlink (GNode *node);
```

<div class="caption">

<p><span class="glib-nodedestroy">Listado</span>: Destruyendo un <code>GNode</code>.</p>

</div>

Para eliminar un nodo del árbol, hay dos funciones que se muestran en el <span class="glib-nodedestroy">Listado</span>. `g_node_destroy()` elimina el nodo de un árbol, destruyéndolo a él ya todos sus hijos. `g_node_unlink()` elimina un nodo y lo convierte en un nodo raíz; es decir, convierte un subárbol en un árbol independiente.

<a id="glib-nodeextrema"></a>

```c
#include <glib.h>

G_NODE_IS_ROOT (node);
G_NODE_IS_LEAF (node);
```

<div class="caption">

<p><span class="glib-nodeextrema">Listado</span>: Predicados para <code>GNode</code>.</p>

</div>

Hay dos macros para detectar la parte superior e inferior de un árbol `GNode`, que se muestran en el <span class="glib-nodeextrema">Listado</span>. Un nodo raíz se define como un nodo sin padres ni hermanos. Un nodo hoja no tiene hijos.

<a id="glib-nodeproperties"></a>

```c
#include <glib.h>

guint g_node_n_nodes (GNode *root, GTraverseFlags flags);
GNode * g_node_get_root (GNode *node);
gboolean g_node_is_ancestor (GNode *node, GNode *descendant);
guint g_node_depth (GNode *node);
GNode * g_node_find (GNode *root,
                     GTraverseType order,
                     GTraverseFlags flags,
                     gpointer data);
```

<div class="caption">

<p><span class="glib-nodeproperties">Listado</span>: Propiedades de <code>GNode</code>.</p>

</div>

Puede pedirle a GLib que proporcione información útil sobre un `GNode`, incluido el número de nodos que contiene, su nodo raíz, su profundidad y el nodo que contiene un puntero de datos en particular. Estas funciones se muestran en el <span class="glib-nodeproperties">Listado</span>.

`GTraverseType` es una enumeración; hay cuatro valores posibles. Estos son sus significados:

* `G_PRE_ORDER` visita el nodo actual, luego recurre a cada niño por turno.

* `G_POST_ORDER` recurre a cada niño en orden, luego visita el nodo actual.

* `G_IN_ORDER` primero recurre al hijo más a la izquierda del nodo, luego visita el nodo mismo y luego recurre al resto de los hijos del nodo. Esto no es muy útil; en su mayoría, está diseñado para su uso con un árbol binario.

* `G_LEVEL_ORDER` primero visita el nodo en sí; luego cada uno de los hijos del nodo; luego los hijos de los hijos; luego los hijos de los hijos de los hijos; y así. Es decir, visita cada nodo de profundidad 0, luego cada nodo de profundidad 1, luego cada nodo de profundidad 2, etc.

Las funciones de recorrido de árbol de `GNode` tienen un argumento `GTraverseFlags`. Este es un campo de bits que se utiliza para cambiar la naturaleza del recorrido. Actualmente solo hay tres banderas: puede visitar solo los nodos de hoja, solo los nodos que no son de hoja o todos los nodos:

* `G_TRAVERSE_LEAVES` significa atravesar solo los nodos hoja.

* `G_TRAVERSE_NON_LEAVES` significa atravesar solo nodos que no son hojas.

* `G_TRAVERSE_ALL` es simplemente un atajo para <br /> `(G_TRAVERSE_LEAVES | G_TRAVERSE_NON_LEAVES)`.

<a id="glib-nodeaccessors"></a>

```c
#include <glib.h>

typedef gboolean (* GNodeTraverseFunc) (GNode *node, gpointer data);
typedef void (* GNodeForeachFunc) (GNode *node, gpointer data);

void g_node_traverse (GNode *root,
                      GTraverseType order,
                      GTraverseFlags flags,
                      gint max_depth,
                      GNodeTraverseFunc func,
                      gpointer data);

void g_node_children_foreach (GNode *node,
                              GTraverseFlags flags,
                              GNodeForeachFunc func,
                              gpointer data);

guint g_node_max_height (GNode *root);
void g_node_reverse_children (GNode *node);
guint g_node_n_children (GNode *node);
gint g_node_child_position (GNode *node, GNode *child);
GNode * g_node_nth_child (GNode *node, guint n);
GNode * g_node_last_child (GNode *node);
```

<div class="caption">

<p><span class="glib-nodeaccessors">Listado</span>: Accediendo a un <code>GNode</code>.</p>

</div>

El <span class="glib-nodeaccessors">Listado</span> muestra algunas de las funciones restantes de `GNode`. Son sencillos; la mayoría de ellos son simplemente operaciones en la lista de hijos del nodo. Hay dos definiciones de tipos de función exclusivas de `GNode`: `GNodeTraverseFunc` y `GNodeForeachFunc`. Estos se llaman con un puntero al nodo que se está visitando y los datos de usuario que proporciona. Un `GNodeTraverseFunc` puede devolver `TRUE` para detener cualquier recorrido que esté en progreso; por lo tanto, puede usar `g_node_traverse()` para buscar el árbol por valor.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="glib-refs"></div>