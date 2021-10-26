# \section{GTK y GIO}

GTK y GIO se pueden aprender en paralelo.

Debería poder usar cualquier clase de GObject en GIO, solo lea la descripción de la clase y hojee la lista de funciones para tener una descripción general de las características que proporciona una clase. Entre otras cosas interesantes, GIO incluye:
\begin{itemize}
  \item \lstinline{GFile} para manejar archivos y directorios.
  \item \lstinline{GSettings} para almacenar la configuración de la aplicación.
  \item \lstinline{GDBus}: una API de alto nivel para el sistema de comunicación entre procesos D-Bus.
  \item \lstinline{GSubprocess} para iniciar procesos secundarios y comunicarse con ellos de forma asincrónica.
  \item \lstinline{GCancellable}, \lstinline{GAsyncResult} y \lstinline{GTask} para usar o implementar tareas asincrónicas y cancelables.
  \item Muchas otras funciones, como flujos de E/S, soporte de red o soporte de aplicaciones.
\end{itemize}

Para crear aplicaciones gráficas con GTK, no se preocupe, la documentación de referencia tiene una guía de introducción, disponible con Devhelp o en línea en: \\
\url{https://developer.gnome.org/gtk3/stable/}

Después de leer la guía de introducción, lea toda la referencia de la API para familiarizarse con los widgets, contenedores y clases base disponibles. Algunos widgets tienen una API bastante grande, por lo que también están disponibles algunos tutoriales externos, por ejemplo, para \lstinline{GtkTextView} y \lstinline{GtkTreeView}. Consulte la página de documentación en: \\
\url{http://www.gtk.org}

También hay una serie de pequeños tutoriales sobre varios temas GLib / GTK: \\
\url{https://wiki.gnome.org/HowDoI}

\section{Escribir sus propias clases de GObject}

El capítulo~\ref{oop-gobject} explica cómo \emph{usar} una clase GObject existente, que es muy útil para aprender GTK, pero no explica cómo \emph{crear} tus propias clases GObject. Escribir sus propias clases de GObject permite contar con referencias, puede crear sus propias propiedades y señales, puede implementar interfaces, anular funciones virtuales (si la función virtual no está asociada a una señal), etc.

Como se explicó al principio del capítulo~\ref{oop-gobject}, si desea obtener información más detallada sobre GObject y saber cómo crear subclases, la documentación de referencia de GObject contiene capítulos introductorios: ``\emph{Concepts}'' y ``\emph{Tutorial}'', disponibles como de costumbre en Devhelp o en línea en: \\
\url{https://developer.gnome.org/gobject/stable/}
