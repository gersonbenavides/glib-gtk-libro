# Desconexión de controladores de señales

En el Listado~\ref{oop-gobject-connect-to-signal}, se llama a `button_clicked_cb()` cada vez que el objeto `button` emite la señal `"clicked"`. Si el objeto `button` todavía está vivo después de que `my_class` se haya liberado, cuando la señal se emita nuevamente habrá un pequeño problema ... Entonces, en el destructor de `MyClass`, el manejador de señales (es decir, la devolución de llamada) debe desconectarse. ¿Como hacer eso?

Las funciones `g_signal_connect*()` en realidad devuelven un ID del manejador de señales, como un entero `gulong` siempre mayor que 0 (para conexiones exitosas). Al almacenar ese ID, es posible desconectar ese manejador de señal específico con la función `g_signal_handler_disconnect()`.

A veces también queremos desconectar el controlador de señales simplemente porque ya no estamos interesados en el evento.

El Listado~\ref{oop-gobject-disconnect-signal} muestra un ejemplo completo de cómo desconectar un manejador de señales cuando se libera su argumento `user_data`. Volvemos a un ejemplo con un corrector ortográfico, porque el ejemplo con el botón GTK no se ajusta bien a la situación.

> **📌 Nota:** La mayoría de las veces, un widget GTK no vive más tiempo que el contenedor al que se agrega, y el El objeto que escucha la señal del widget suele ser el propio contenedor. Entonces, si el widget muere al mismo tiempo que el contenedor, no es posible que el widget envíe una señal mientras su contenedor ya ha sido destruido. En ese caso, no tiene sentido desconectar la señal en el destructor del contenedor, ya que en ese punto el widget ya está liberado; y es más difícil para un objeto muerto enviar una señal.

> **📌 Nota:** Cuando digo que es más difícil, en realidad es imposible, por supuesto.

<!-- GObject es aburrido, por lo que un poco de humor no duele, una nota al pie dentro de una nota al pie, recepción al pie :-) -->

El argumento de devolución de llamada `user_data` es una instancia de `MyTextView`, con `MyTextView` implementado con un estilo semi-OOP. Dado que el objeto del corrector ortográfico puede vivir más tiempo que la instancia de `MyTextView`, la señal debe desconectarse en el destructor `MyTextView`.

<a id="oop-gobject-disconnect-signal"></a>

```c
{{#include ../../../assets/code/disconnect-signal.c}}
```

<div class="caption">

<p><span class="oop-gobject-disconnect-signal">Listado</span>: Desconectar un manejador de señales cuando se libera su argumento `user_data`.</p>

</div>

En realidad, hay otras funciones de `g_signal_handler*()` que permiten desconectar los manejadores de señales:

* `g_signal_handlers_disconnect_by_data()`
* `g_signal_handlers_disconnect_by_func()`
* `g_signal_handlers_disconnect_matched()`

Habría sido posible utilizar una de las funciones anteriores en el Listado~\ref{oop-gobject-disconnect-signal}, y habría evitado la necesidad de almacenar `word_added_to_personal_handler_id`. La función básica `g_signal_handler_disconnect()` se ha utilizado con fines de aprendizaje.

Tenga en cuenta también que si `MyTextView` fuera una clase GObject, habría sido posible conectarse a la señal del corrector ortográfico con `g_signal_connect_object()`, y habría eliminado por completo la necesidad de desconectar manualmente el controlador de señal en el destructor `MyTextView`. Una (pequeña) razón más para aprender a crear subclases de GObject.
