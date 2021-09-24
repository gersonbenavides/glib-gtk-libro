# Definiciones de tipo

En lugar de utilizar los tipos estándar de C (`int`, `long` , etc.), GLib define los suyos propios. Estos sirven para una variedad de propósitos. Por ejemplo, se garantiza que `gint32` tiene 32 bits de ancho, algo que ningún tipo C89 estándar puede garantizar. `guint` es simplemente más fácil de escribir que `unsigned` . Algunos de los typedefs existen solo por coherencia; por ejemplo, `gchar` siempre es equivalente al `char` estándar.

Los tipos primitivos más importantes definidos por GLib:

* `gint8`, `guint8`, `gint16`, `guint16`, `gint32`, `guint32`, `gint64`, `guint64` --- le dará números enteros de un tamaño garantizado. (Si no es obvio, los tipos `guint` son `unsigned`, los tipos de `gint` son `signed`).
* `gboolean` es útil para hacer su código más legible, ya que C89 no tiene un tipo bool.
* `gchar`, `gshort`, `glong`, `gint`, `gfloat`, `gdouble` son puramente cosméticos.
* `gpointer` puede ser más conveniente de escribir que `void *`. `gconstpointer` le da `const void *`. (`const gpointer` no hará lo que normalmente quiere; dedique un tiempo a leer un buen libro sobre C si no ve por qué).
* `gsize` es un tipo entero sin signo que puede contener el resultado del operador `sizeof`.