# Orden de \#include

En la parte superior del archivo, se encuentra la lista habitual de `#include`. Un detalle pequeño pero digno de mención es que el orden de inclusión no se eligió al azar. En cierto archivo \*.c, es mejor incluir primero su archivo \*.h correspondiente, y luego los otros encabezados.

> **📌 Nota:** Excepto si tiene un archivo `config.h`, en ese caso debería `config.h`, *luego* el \*.h correspondiente, y luego los otros encabezados.

Al incluir la primera `myapp-spell-checker.h`, si falta un `#include` en `myapp-spell-checker.h`, el compilador informará un error. Como se explica en la sección <span class="ch-oop-semi-header-include"></span>, un encabezado siempre debe tener el mínimo requerido `#include`s para que ese encabezado se incluya a su vez.

Además, dado que `glib.h` ya está incluido en `myapp-spell-checker.h`, no es necesario incluirlo una segunda vez en `myapp-spell-checker.c`.

\subsection{Comentarios de GTK-Doc}
La API pública está documentada con comentarios GTK-Doc. Un comentario de GTK-Doc comienza con `/**`, con el nombre del símbolo a documentar en la siguiente línea. Cuando nos referimos a un símbolo, existe una sintaxis especial a utilizar dependiendo del tipo de símbolo:
\begin{itemize}
    \item Un parámetro de función tiene el prefijo `@}.
    \item El *nombre} de una `estructura} o `enum} tiene el prefijo `#}.
    \item Una constante ---~por ejemplo, una `enum} *valor} ~---tiene el prefijo `%}.
    \item Una función tiene el sufijo `()}.
\end{itemize}

GTK-Doc puede analizar esos comentarios especiales y generar páginas HTML que luego pueden ser navegadas fácilmente por un navegador API como Devhelp. Pero los comentarios especialmente formateados en el código no son lo único que necesita GTK-Doc, también necesita integración con el sistema de compilación de su proyecto (por ejemplo, Autotools), junto con algunos otros archivos para enumerar las diferentes páginas, describe el estructura general con la lista de símbolos y, opcionalmente, proporciona contenido adicional escrito en formato DocBook XML. Estos archivos suelen estar presentes en el directorio \path{docs/reference/}.

Describir en detalle cómo integrar el soporte GTK-Doc en su código está más allá del alcance de este libro. Para eso, debe consultar el manual de GTK-Doc~\cite{gtk-doc}.

Cada biblioteca basada en GLib debe tener una documentación GTK-Doc. Pero también es útil escribir una documentación GTK-Doc para el código interno de una aplicación. Como se explica en la sección~\ref{intro-backend-frontend-separation} p.~\pageref{intro-backend-frontend-separation}, es una buena práctica separar el backend de una aplicación de su(s) frontend(s), y escribir el backend como una biblioteca interna o, más tarde, una biblioteca compartida. Como tal, se recomienda documentar la API pública del backend con GTK-Doc, incluso si sigue siendo una biblioteca interna vinculada estáticamente. Porque cuando el código base se vuelve más grande, es de gran ayuda -- especialmente para los recién llegados -- tener una descripción general de las clases disponibles y saber cómo usar una clase sin la necesidad de comprender su implementación.

\subsection{Anotaciones de introspección de GObject}
El comentario de GTK-Doc para la función `myapp_spell_checker_get_suggestions()} contiene anotaciones de GObject Introspection para el valor de retorno:
\begin{lstlisting}
/**
 * ...
 * Returns: (transfer full) (element-type utf8): the list of suggestions.
 */
\end{lstlisting}

El tipo de retorno de la función es `GSList *}, que no es suficiente para que los enlaces de idioma sepan qué contiene la lista, y cómo liberarla. \texttt{(transferencia completa)} significa que la persona que llama debe liberar completamente el valor de retorno: la lista misma *y} sus elementos. \texttt{(tipo de elemento utf8)} significa que la lista contiene cadenas UTF-8.

Para obtener un valor de retorno, si la anotación de transferencia es \texttt{(contenedor de transferencia)}, la persona que llama necesita liberar solo la estructura de datos, no sus elementos. Y si la anotación de transferencia es \texttt{(transferir ninguna)}, la propiedad del contenido variable no se transfiere y, por lo tanto, la persona que llama no debe liberar el valor de retorno.

Hay muchas otras anotaciones de GObject Introspection (GI), por nombrar solo un par de otras:
\begin{itemize}
    \item \texttt{(nullable)}: el valor puede ser `NULL};
    \item \texttt{(out)}: un parámetro de función ``out'', es decir, un parámetro que devuelve un valor.
\end{itemize}

Como puede ver, las anotaciones GI no solo son útiles para los enlaces de idiomas, sino que también recopilan información útil para el programador de C.

Para obtener una lista completa de anotaciones GI, consulte la wiki de GObject Introspection~\cite{gobject-introspection}.

\subsection{Funciones estáticas vs funciones no estáticas}
En el código de ejemplo, puede ver que la función `load_dictionary()} se ha marcado como `static}. De hecho, es una buena práctica en C marcar las funciones internas como `static}. Una función `static} solo se puede usar en el mismo archivo *.c. Por otro lado, una función pública debe ser no estática y tener un prototipo en un encabezado.

Existe la opción de advertencia \texttt{-Wmissing-prototypes} GCC para garantizar que un fragmento de código siga esta convención \footnote{Cuando se usan las herramientas automáticas, la macro \texttt{AX\_COMPILER\_FLAGS} Autoconf habilita, entre otras cosas, esa bandera GCC.}.

Además, contrariamente a una función pública, una función `static} no requiere que el proyecto y los espacios de nombres de la clase tengan el prefijo (aquí, `myapp_spell_checker}).

\subsection{Programación defensiva}
Cada función pública verifica sus precondiciones con las macros de depuración de `g_return_if_fail()} o `g_return_val_if_fail()}, como se describe en la sección~\ref{glib-debugging-macros} p.~\pageref{glib-debugging-macros}. El parámetro *self} también se verifica, para ver si no es `NULL}, excepto por el destructor, `myapp_spell_checker_free()}, para que sea consistente con `free()} y `g_free()} que acepta un parámetro `NULL} por conveniencia.

Tenga en cuenta que las macros `g_return} deben usarse solo para los puntos de entrada de una clase, es decir, en sus funciones públicas. Por lo general, puede asumir que los parámetros pasados a una función `static} son válidos, especialmente el parámetro *self}. Sin embargo, a veces es útil verificar un argumento de una función `static} con `g_assert()}, para hacer que el código sea más robusto y auto-documentado.

\subsection{Estilo de codificación}
Finalmente, vale la pena explicar algunas cosas sobre el estilo de codificación. Se le anima a utilizar desde el principio el mismo estilo de codificación para su proyecto, ya que puede ser algo difícil de cambiar después. Si cada programa tiene diferentes convenciones de código, es una pesadilla para alguien dispuesto a contribuir.

Aquí hay un ejemplo de una definición de función:
\begin{lstlisting}
gboolean
myapp_spell_checker_check_word (MyappSpellChecker *checker,
                                const gchar       *word,
                                gssize             word_length)
{
  /* ... */
}
\end{lstlisting}

Vea cómo se alinean los parámetros: hay un parámetro por línea, con el tipo alineado en el paréntesis de apertura y con los nombres alineados en la misma columna. Algunos editores de texto se pueden configurar para hacerlo automáticamente.

Para una función *call}, si poner todos los parámetros en la misma línea da como resultado una línea demasiado larga, los parámetros también deben estar alineados entre paréntesis, para que el código sea más fácil de leer:
\begin{lstlisting}
  function_call (one_param,
                 another_param,
                 yet_another_param);
\end{lstlisting}

A diferencia de otros proyectos como el kernel de Linux, no existe realmente un límite en la longitud de la línea. Un código basado en GObject puede tener líneas bastante largas, incluso si los parámetros de una función están alineados entre paréntesis. Por supuesto, si una línea termina en, digamos, la columna 120, podría significar que hay demasiados niveles de sangría y que debería extraer el código en funciones intermedias.

El tipo de retorno de una función *definition} está en la línea anterior que el nombre de la función, por lo que el nombre de la función está al principio de la línea. Al escribir una función *prototype}, el nombre de la función nunca debe estar al principio de una línea, idealmente debe estar en la misma línea que el tipo de retorno \footnote{En \path{myapp-spell-checker.h}, los nombres de las funciones están sangrados con dos espacios en lugar de estar en las mismas líneas que los tipos de retorno, porque no hay suficiente espacio horizontal en la página.}. De esa manera, puede hacer una búsqueda de expresión regular para encontrar la implementación de una función, por ejemplo, con el comando de shell \shellcmd{grep}:

\begin{lstlisting}[language=bash]
$ grep -n -E "^function_name" *.c
\end{lstlisting}

O, si el código está dentro de un repositorio de Git, es un poco más conveniente de usar \lstinline[language=bash]{git grep}:

\begin{lstlisting}[language=bash]
$ git grep -n -E "^function_name"
\end{lstlisting}

Asimismo, existe una manera fácil de encontrar la declaración de una `struct} pública. La convención es prefijar el nombre del tipo con un guión bajo al declarar la `struct}. Por ejemplo:
\begin{lstlisting}
/* In the header: */
typedef struct _MyappSpellChecker MyappSpellChecker;

/* In the *.c file: */
struct _MyappSpellChecker
{
  /* ... */
};
\end{lstlisting}

Como resultado, para encontrar la declaración completa del tipo `MyappSpellChecker}, puede buscar ```_MyappSpellChecker}'':

\begin{lstlisting}[language=bash]
$ git grep -n _MyappSpellChecker
\end{lstlisting}

En GLib/GTK, esta convención de prefijo de subrayado se aplica normalmente a cada `struct} que tiene una línea `typedef} separada. La convención no se sigue a fondo cuando se usa una `struct} en un solo archivo *.c. Y la convención generalmente no se sigue para los tipos `enum}. Sin embargo, para su proyecto, nada le impide aplicar consistentemente la convención de prefijo de subrayado a todos los tipos.

Tenga en cuenta que existen herramientas más sofisticadas que \shellcmd{grep} para examinar una base de código C, por ejemplo, Cscope\footnote{http://cscope.sourceforge.net/}.

Para aprender más sobre el estilo de codificación usado en GLib, GTK y GNOME, lea las Pautas de programación de GNOME~\cite{gnome-programming-guidelines}.