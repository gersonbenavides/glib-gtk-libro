# \section{Widgets compuestos}

Los widgets compuestos son contenedores que ya contienen una colección útil de widgets secundarios en un paquete agradable. Implementar un widget compuesto es fácil \footnote{Una vez que sepa cómo subclasificar una clase GObject.}, Solo necesita:
\begin{enumerate}
  \item Subclase un contenedor como \lstinline{GtkGrid} o \lstinline{GtkBin} o \lstinline{GtkWindow};
  \item En el constructor de la clase, cree los widgets secundarios y agréguelos al contenedor.
\end{enumerate}

En el esquema de la clase gedit, los widgets compuestos son las subclases de \lstinline{GtkGrid} (\lstinline{GeditPanel} y \lstinline{GeditTab}) y \lstinline{GeditWindow}.

\lstinline{GeditWindow} es una subclase indirecta de \lstinline{GtkBin}, por lo que puede contener como máximo un widget hijo. Es por eso que \lstinline{GeditWindow} usa un \lstinline{GtkGrid} como su widget hijo, de modo que \lstinline{GtkGrid} puede contener a su vez todos los elementos de la ventana.

Por defecto, una \lstinline{GeditTab} tiene solo un widget secundario, la \lstinline{GtkScrolledWindow} que contiene la \lstinline{GeditView}. Pero \lstinline{GeditTab} tiene una función para agregar un \lstinline{GtkInfoBar} en la parte superior, mostrando por ejemplo un mensaje de error.

Entonces, mientras \lstinline{GtkGrid} es un contenedor de uso general que inicialmente no contiene ningún widget secundario, un widget compuesto es un contenedor especializado que ya contiene widgets secundarios específicos. Escribir widgets compuestos es una forma conveniente de codificar aplicaciones.

%TODO muestra un ejemplo de código