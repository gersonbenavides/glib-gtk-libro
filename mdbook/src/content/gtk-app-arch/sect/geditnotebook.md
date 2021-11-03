# GeditNotebook y lo que contiene

`GeditNotebook` es una subclase de `GtkNotebook`, que es el widget que muestra pestañas y también contiene su contenido.

En el esquema de la clase, podemos ver que el contenido de una pestaña es un widget `GeditTab`, una subclase de `GtkGrid`. El elemento principal dentro de una `GeditTab` es `GeditView`. Más precisamente --- se omitió en el esquema por concisión --- el `GeditView` está contenido en una `GtkScrolledWindow` que está contenido en el `GeditTab`. Pero `GeditTab` puede contener otros widgets, por ejemplo, barras de información en la parte superior del documento.

`GeditView` es una subclase de `GtkSourceView`, que en sí misma es una subclase de `GtkTextView`. `GtkTextView` --- que es parte de GTK --- es la base para un editor de texto multilínea. La biblioteca GtkSourceView agrega características útiles para el código fuente, como el resaltado de sintaxis. `GtkTextView` sigue un patrón Modelo-Vista-Controlador. `GtkTextBuffer` es el modelo, es decir, contiene los datos.
