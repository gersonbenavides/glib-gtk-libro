# Programación semi-orientada a objetos en C

En el capítulo anterior se explicó que la biblioteca principal de GLib utiliza un estilo de codificación semi-orientado a objetos. Esta sección explica lo que significa y cómo escribir su propio código con este estilo de codificación.

Una de las ideas principales de OOP es *mantener los datos y el comportamiento relacionados en un solo lugar* \footnote{Esta es una de las pautas discutidas en *Heurística de diseño orientado a objetos* \cite{oop-book}.} . En C, los datos se almacenan en una `struct` y el comportamiento se implementa con funciones. Para mantenerlos en un solo lugar, los colocamos en el mismo archivo *.c, con las funciones públicas presentes en el archivo *.h correspondiente (el encabezado).

Otra idea importante de OOP es *ocultar todos los datos dentro de su clase*. En C, significa que la declaración completa de `struct` debe estar presente solo en el archivo *.c, mientras que el encabezado contiene solo un `typedef`. Cómo se almacenan los datos dentro de la clase y qué estructuras de datos se utilizan debe seguir siendo un detalle de implementación. Un usuario de la clase no debe estar al tanto de los detalles de implementación, en su lugar, debe confiar solo en la interfaz externa, es decir, lo que está presente en el encabezado y la documentación pública. De esa manera, la implementación de la clase puede cambiar sin afectar a los usuarios de la clase, siempre que la API no cambie.



\subsection{Espacio de nombres de clase}
Además, hay un segundo espacio de nombres con el nombre de la clase, aquí ``SpellChecker''. Si sigue esa convención de forma coherente, el nombre de un símbolo es más predecible, lo que facilita el trabajo con la API. El nombre de un símbolo siempre será ``espacio de nombres del proyecto'' + ``nombre de la clase''+ ``nombre del símbolo''.

\subsection{¿Minúsculas, Mayúsculas o CamelCase?}
Dependiendo del tipo de símbolo, su nombre está en mayúsculas, minúsculas o CamelCase. La convención en el mundo GLib es:
\begin{itemize}
    \item Letras mayúsculas para una constante, ya sea para un valor `#define` o `enum`;
    \item CamelCase para un tipo `struct} o `enum`;
    \item Minúsculas para funciones, variables, campos `struct`,…
\end{itemize}

\subsection{Incluir guardia}
El encabezado contiene el típico protector de inclusión:

\begin{lstlisting}
#ifndef MYAPP_SPELL_CHECKER_H
#define MYAPP_SPELL_CHECKER_H

/* ... */

#endif /* MYAPP_SPELL_CHECKER_H */
\end{lstlisting}

Evita que el encabezado se incluya varias veces en el mismo archivo * .c.

\subsection{Soporte C++}
El par `G_BEGIN_DECLS`/`G_END_DECLS` permite que el encabezado se incluya desde el código C ++. Es más importante para una biblioteca, pero también es una buena práctica agregar esas macros en el código de la aplicación, incluso si la aplicación no usa C ++. De esa manera, una clase de aplicación se podría mover a una biblioteca fácilmente (puede ser difícil notar que faltan las macros `G_BEGIN_DECLS` y `G_END_DECLS`). Y si surge el deseo, la aplicación podría trasladarse a C ++ de forma incremental.

\subsection{\#include}
\label{oop-semi-include-in-header}
Hay varias formas de organizar los `#include` en una base de código C. La convención en GLib/GTK es que incluir un encabezado en un archivo *.c no debería requerir incluir otro encabezado de antemano \footnote{Esa es la regla general, pero existen excepciones: por ejemplo, incluir `glib/gi18n-lib.h` requiere que se defina `GETTEXT_PACKAGE`, este último suele estar presente en el encabezado `config.h`.}.

\path{myapp-spell-checker.h} contiene el siguiente `#include`:
\begin{lstlisting}
#include <glib.h>
\end{lstlisting}

Debido a que \path{glib.h} es necesario para las macros `G_BEGIN_DECLS} y `G_END_DECLS`, para las definiciones de tipos básicos de GLib (`gchar`, `gboolean`, etc.) y `GSList`.

Si se elimina el `#include` en `myapp-spell-checker.h`, cada archivo *.c que incluya `myapp-spell-checker.h` también debería incluir `glib.h` de antemano; de lo contrario, el compilador no podría compilar ese archivo *.c. Pero no queremos agregar tal requisito para los usuarios de la clase.

\subsection{Definición de tipo}
El tipo `MyappSpellChecker` se define de la siguiente manera:

\begin{lstlisting}
typedef struct _MyappSpellChecker MyappSpellChecker;
\end{lstlisting}

La `struct _MyappSpellChecker` se declarará en el archivo `myapp-spell-checker.c`. Cuando usa `MyappSpellChecker` en otro archivo, no debería necesitar saber qué contiene `struct`, debería usar las funciones públicas de la clase en su lugar. La excepción a la mejor práctica de OOP es cuando llamar a una función sería un problema de rendimiento, por ejemplo, para estructuras de datos de bajo nivel utilizadas para gráficos por computadora (coordenadas, rectángulos,…). Pero recuerde: *la optimización prematura es la raíz de todos los males* (Donald~Knuth).

\subsection{Constructor de objetos}
`myapp_spell_checker_new()` es el constructor de la clase. Toma un parámetro de código de idioma ---~por ejemplo `"en_US"`~--- y devuelve una *instancia* de la clase, también llamada *objeto*. Lo que hace la función es simplemente asignar dinámicamente la `estructura` y devolver el puntero. Ese valor de retorno se usa luego como el primer parámetro de las funciones restantes de la clase. En algunos lenguajes como Python, ese primer parámetro se llama parámetro *self*, ya que hace referencia a "sí mismo", es decir, a su propia clase. Otros lenguajes orientados a objetos como Java y C ++ tienen la palabra clave *this* para acceder a los datos del objeto.

Tenga en cuenta que `myapp_spell_checker_new()` se puede llamar varias veces para crear diferentes objetos. Cada objeto tiene sus propios datos. Esa es la diferencia fundamental con las variables globales: si los datos se almacenan en variables globales, puede haber como máximo una instancia de ellos.

> **📌 Nota:** A menos que la variable global almacene los "objetos" en una estructura de datos agregados como una matriz, un lista enlazada o una tabla hash, con un identificador como el parámetro "*self*" (por ejemplo, un número entero o una cadena) para acceder a un elemento específico. Pero este es un código realmente desagradable, ¡por favor no lo hagas!.

<!-- POR HACER explicar new() (asignación en el montón) vs init() (asignación en la pila) y dar un ejemplo con init(). Pero el ejemplo también requiere el código *.c, por lo que quizás sea mejor agregar la explicación en una subsección posterior. -->

\subsection{Destructor de objetos}
`myapp_spell_checker_free()} es el destructor de la clase. Destruye un objeto liberando su memoria y liberando otros recursos asignados.

\subsection{Otras funciones públicas}
Las funciones `myapp_spell_checker_check_word()} y `myapp_spell_checker_get_suggestions()} son las características disponibles de la clase. Comprueba si una palabra está escrita correctamente y obtiene una lista de sugerencias para corregir una palabra mal escrita.

El tipo de parámetro `word_length} es `gssize}, que es un tipo entero GLib que puede contener ---~por ejemplo~--- el resultado de `strlen()}, y también puede contener un valor negativo ya que ---~contrario a `gsize}~--- \lstinline {gssize} es un tipo entero *con signo}. El parámetro `word_length} puede ser `-1} si la cadena está terminada en nul, es decir, si la cadena termina con el carácter especial `'\0'}. El propósito del parámetro `word_length} es poder pasar un puntero a una palabra que pertenece a una cadena más grande, sin la necesidad de llamar, por ejemplo, `g_strndup()}.

\section{El archivo *.c correspondiente}

Veamos ahora el archivo \path{myapp-spell-checker.c}:

\vspace{0.7cm}
\lstinputlisting[caption={myapp-spell-checker.c}, label=oop-semi-spell-checker-c]{assets/code/myapp-spell-checker.c}

\subsection{Orden de \#include}
En la parte superior del archivo, se encuentra la lista habitual de `#include}. Un detalle pequeño pero digno de mención es que el orden de inclusión no se eligió al azar. En cierto archivo *.c, es mejor incluir primero su archivo *.h correspondiente, y luego los otros encabezados \footnote{Excepto si tiene un archivo \path{config.h}, en ese caso debería \path{config.h}, *luego} el *.h correspondiente, y luego los otros encabezados.}. Al incluir la primera \path{myapp-spell-checker.h}, si falta un `#include} en \path{myapp-spell-checker.h}, el compilador informará un error. Como se explica en la sección~\ref{oop-semi-include-in-header} p.~\pageref{oop-semi-include-in-header}, un encabezado siempre debe tener el mínimo requerido `#include}s para que ese encabezado se incluya a su vez.

Además, dado que \path{glib.h} ya está incluido en \path{myapp-spell-checker.h}, no es necesario incluirlo una segunda vez en \path{myapp-spell-checker.c}.

\subsection{Comentarios de GTK-Doc}
La API pública está documentada con comentarios GTK-Doc. Un comentario de GTK-Doc comienza con `/**}, con el nombre del símbolo a documentar en la siguiente línea. Cuando nos referimos a un símbolo, existe una sintaxis especial a utilizar dependiendo del tipo de símbolo:
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