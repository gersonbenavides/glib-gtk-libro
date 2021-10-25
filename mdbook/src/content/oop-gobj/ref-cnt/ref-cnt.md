# Recuento de referencias

La gestión de la memoria de las clases de GObject se basa en *recuento de referencias*. Una clase GObject tiene un contador:

* Cuando se crea el objeto, el contador es igual a uno;
* `g_object_ref()` incrementa el contador;
* `g_object_unref()` disminuye el contador;
* Si el contador llega a cero, el objeto se libera.

Permite almacenar el GObject en varios lugares sin necesidad de coordinar cuándo liberar el objeto.

