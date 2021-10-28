# Conexión de una función de devolución de llamada a una señal

Para hacer las cosas más concretas, si observa la documentación de `GtkButton`, verá que proporciona la señal `"clicked"`. Para realizar la acción deseada cuando se emite la señal, una o más funciones de devolución de llamada deben estar conectadas de antemano.

Para conectar una devolución de llamada a una señal, se puede usar la función `g_signal_connect()`, o una de las otras funciones `g_signal_connect_*()`:

* `g_signal_connect()`
* `g_signal_connect_after()`
* `g_signal_connect_swapped()`
* `g_signal_connect_data()`
* `g_signal_connect_object()`
* Y algunas más avanzadas.

El Listado~\ref{oop-gobject-gtkbutton-clicked} p.~\pageref{oop-gobject-gtkbutton-clicked} muestra el prototipo de la señal `GtkButton::clicked`.

> **📌 Nota:** La convención cuando se hace referencia a una señal de GObject es "`ClassName::signal-name`". Así es como se documenta con los comentarios de GTK-Doc.

<a id="oop-gobject-gtkbutton-clicked"></a>

```c
void
user_function (GtkButton *button,
               gpointer   user_data);
```

<div class="caption">

<p><span class="oop-gobject-gtkbutton-clicked">Listado</span>: El prototipo de la señal <code>GtkButton::clicked</code>.</p>

</div>

Cuando se usa `g_signal_connect()`, la función de devolución de llamada debe tener el mismo prototipo que el prototipo de señal. Muchas señales tienen más argumentos y algunas señales devuelven un valor. Si la devolución de llamada tiene un prototipo incompatible, sucederán cosas malas, habrá errores o bloqueos aleatorios.

El Listado~\ref{oop-gobject-connect-to-signal} p.~\pageref{oop-gobject-connect-to-signal} muestra un ejemplo de cómo usar `g_signal_connect()`.

<a id="oop-gobject-connect-to-signal"></a>

```c
static void
button_clicked_cb (GtkButton *button,
                   gpointer   user_data)
{
  MyClass *my_class = MY_CLASS (user_data);

  g_message ("Button clicked!");
}

static void
create_button (MyClass *my_class)
{
  GtkButton *button;

  /* Create the button */
  /* ... */

  /* Connect the callback function */
  g_signal_connect (button,
                    "clicked",
                    G_CALLBACK (button_clicked_cb),
                    my_class);
}
```

<div class="caption">

<p><span class="oop-gobject-connect-to-signal">Listado</span>: Cómo conectarse a una señal</p>

</div>

La macro `G_CALLBACK()` es necesaria porque `g_signal_connect()` es genérica: se puede usar para conectarse a cualquier señal de cualquier clase de GObject, por lo que el puntero de función debe ser convertido.

Hay dos convenciones principales para nombrar funciones de devolución de llamada:

* Termine el nombre de la función con "`cb`", atajo de "callback". Por ejemplo: `button_clicked_cb()` como en el ejemplo de código anterior.
* Inicie el nombre de la función con "`on`". Por ejemplo: `on_button_clicked()`.

Con una de esas convenciones de nomenclatura --- y con el parámetro `gpointer user_data`, que siempre es el último parámetro --- es fácil reconocer que una función es una devolución de llamada.

El lenguaje C permite escribir una firma de función de devolución de llamada diferente --- pero compatible ---, aunque no se considera universalmente como algo bueno:


* Uno o más de los *últimos* argumentos de la función se pueden omitir si no se utilizan. Pero como se explicó anteriormente, el argumento `gpointer user_data` permite reconocer fácilmente que la función es efectivamente una devolución de llamada.

> **📌 Nota:** Al igual que con los lenguajes naturales, la redundancia permite comprender mejor y más rápidamente lo que leemos o escuchamos.

* Los tipos de argumentos se pueden modificar a un tipo compatible: p. Ej. otra clase en la jerarquía de herencia, o en el ejemplo anterior, reemplazando "`gpointer`" por "`MyClass *`" (pero hacer eso hace que el código sea un poco menos robusto porque `No se llama a la macro MY_CLASS()`).
