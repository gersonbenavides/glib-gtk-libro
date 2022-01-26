# Referencias flotantes

Cuando una clase GObject hereda de `GInitiallyUnowned` (que es el caso de `GtkWidget`), el objeto inicialmente tiene una referencia *floating*. Se debe llamar a `g_object_ref_sink()` para convertir esa referencia flotante en una referencia normal y fuerte.

Cuando un GObject hereda de `GInitiallyUnowned`, significa que GObject debe incluirse en algún tipo de contenedor. El contenedor luego asume la propiedad de la referencia flotante, llamando a `g_object_ref_sink()`. Permite simplificar el código, para eliminar la necesidad de llamar a `g_object_unref()` después de incluir el objeto en el contenedor.

El <span class="oop-gobject-mem-management-normal">Listado</span> muestra cómo se maneja la administración de memoria con un GObject normal. Compare esto con el <span class="oop-gobject-mem-management-floating">Listado</span>, que muestra cómo se maneja la administración de memoria con un GObject derivado de `GInitiallyUnowned`. La diferencia es que `g_object_unref()` no se llama en el último Listado, por lo que acorta el código.

<a id="oop-gobject-mem-management-normal"></a>

```c
/* GObject normal */

a_normal_gobject = normal_gobject_new ();
/* a_normal_gobject tiene ahora un recuento de referencia de 1. */

container_add (container, a_normal_gobject);
/* a_normal_gobject tiene ahora un recuento de referencia de 2. */

/* Ya no necesitamos un a_normal_gobject, por lo que lo anulamos. */
g_object_unref (a_normal_gobject);
/* a_normal_gobject tiene ahora un recuento de referencia de 1. */
```

<div class="caption">

<p><span class="oop-gobject-mem-management-normal">Listado</span>: Gestión de la memoria de GObjects normales.</p>

</div>

<a id="oop-gobject-mem-management-floating"></a>

```c
/* Objeto GInitiallyUnowned, p. Ej. un GtkWidget */

widget = gtk_entry_new ();
/* widget tiene ahora solo una referencia flotante. */

gtk_container_add (container, widget);
/* El contenedor ha llamado a g_object_ref_sink(), tomando
 * posesion de la referencia flotante. El codigo esta
 * simplificado porque no debemos llamar a g_object_unref().
 */
```

<div class="caption">

<p><span class="oop-gobject-mem-management-floating">Listado</span>: Gestión de memoria de GObjects derivados de <code>GInitiallyUnowned</code>.</p>

</div>

Entonces, es importante saber si un GObject hereda de `GInitiallyUnowned` o no. Para eso, debe mirar la *Object Hierarchy*, por ejemplo, `GtkEntry` tiene la siguiente jerarquía:

```plaintext
GObject
└── GInitiallyUnowned
    └── GtkWidget
        └── GtkEntry
```

<!-- Habilitacion del enumeramiento de referencias -->

<div class="oop-gobj-refs"></div>