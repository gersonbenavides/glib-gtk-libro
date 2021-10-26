# \section{GeditNotebook y lo que contiene}

\lstinline{GeditNotebook} es una subclase de \lstinline{GtkNotebook}, que es el widget que muestra pestañas y también contiene su contenido.

En el esquema de la clase, podemos ver que el contenido de una pestaña es un widget \lstinline{GeditTab}, una subclase de \lstinline{GtkGrid}. El elemento principal dentro de una \lstinline{GeditTab} es \lstinline{GeditView}. Más precisamente --- se omitió en el esquema por concisión --- el \lstinline{GeditView} está contenido en una \lstinline{GtkScrolledWindow} que está contenido en el \lstinline{GeditTab}. Pero \lstinline{GeditTab} puede contener otros widgets, por ejemplo, barras de información en la parte superior del documento.

\lstinline{GeditView} es una subclase de \lstinline{GtkSourceView}, que en sí misma es una subclase de \lstinline{GtkTextView}. \lstinline{GtkTextView} --- que es parte de GTK --- es la base para un editor de texto multilínea. La biblioteca GtkSourceView agrega características útiles para el código fuente, como el resaltado de sintaxis. \lstinline{GtkTextView} sigue un patrón Modelo-Vista-Controlador. \lstinline{GtkTextBuffer} es el modelo, es decir, contiene los datos.
