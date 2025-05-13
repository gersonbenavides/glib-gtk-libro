# Interfaces

Con GObject es posible crear interfaces. Una interfaz es solo una API, no contiene la implementación. Una clase GObject puede implementar una o varias interfaces. Si una clase GObject está documentada con GTK-Doc, la documentación contendrá una sección *Interfaces implementadas*.

Por ejemplo, GTK contiene la interfaz `GtkOrientable` que es implementada por muchos widgets y permite establecer la orientación: horizontal o vertical.

Las dos macros explicadas en la sección anterior también funcionan para interfaces. Un ejemplo con `GtkGrid`:

```c
GtkWidget *vgrid;

vgrid = gtk_grid_new ();
gtk_orientable_set_orientation (GTK_ORIENTABLE (vgrid),
                                GTK_ORIENTATION_VERTICAL);
```

Entonces, cuando busca una determinada característica en la API para una cierta clase de GObject, la característica se puede ubicar en tres lugares diferentes:

* En la propia clase GObject;
* En una de las clases padre en *Jerarquía de objetos*;
* O en una de las *Interfaces implementadas*.
