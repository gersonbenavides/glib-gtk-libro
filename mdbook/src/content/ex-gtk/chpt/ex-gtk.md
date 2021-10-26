# \part{GTK}
\chapter{Ejemplo de una arquitectura de código de aplicación GTK}
\label{gtk-app-arch}

\emph{Este capítulo no está completamente terminado, puede ser difícil de entender sin ningún conocimiento sobre GTK u otro conjunto de herramientas de widgets. Y el capítulo no está bien integrado con los otros capítulos, la introducción y los capítulos de lectura adicional no se han adaptado, por ejemplo. Este capítulo se distribuye con la esperanza de que sea útil, pero SIN NINGUNA GARANTÍA; incluso sin la garantía implícita de COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO EN PARTICULAR.}

%FIXME: vuelve a explicar qué es un "widget" y un "contenedor". Y agregue un glosario al final.

Para cualquier proyecto de programación, es importante diseñar correctamente la arquitectura de código general. Con Programación Orientada a Objetos, significa definir las clases principales. Este capítulo explica un buen ejemplo de una arquitectura de código para una aplicación GTK, observando una vista simplificada del editor de texto gedit \footnote{\url{https://wiki.gnome.org/Apps/Gedit}}.

gedit tiene una interfaz de documento con pestañas: se pueden abrir varios archivos en la misma ventana de gedit, en diferentes pestañas. Como veremos, esto se refleja en la arquitectura del código.

La Figura~\ref{fig:gedit-architecture} p.~\pageref{fig:gedit-architecture} muestra el esquema de la clase. Cada clase gedit en el esquema es una subclase de una clase GTK o GtkSourceView. (GtkSourceView \footnote{\url{https://wiki.gnome.org/Projects/GtkSourceView}} es una biblioteca que extiende el widget \lstinline{GtkTextView}; \lstinline{GtkTextView} es parte de GTK).

Repasaremos el esquema de la clase, explicando las clases paso a paso, comenzando por la parte superior. Esto permitirá presentar algunas de las clases GTK más importantes, no describiéndolas en detalle con muchos ejemplos de código, sino dando una descripción general de alto nivel.

\begin{figure}
  \begin{center}
    \includegraphics[width=\textwidth]{assets/img/gedit-architecture.pdf}
    \caption{Arquitectura de código simplificada del editor de texto gedit}
    \label{fig:gedit-architecture}
  \end{center}
\end{figure}
