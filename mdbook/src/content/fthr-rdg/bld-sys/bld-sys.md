# Sistema de compilación

Un Makefile básico generalmente no es suficiente si desea instalar su aplicación en diferentes sistemas. Por tanto, se necesita una solución más sofisticada. Para un programa basado en GLib/GTK, existen dos alternativas principales: Autotools y Meson.

GNOME y GTK históricamente usan Autotools, pero a partir de 2017 algunos módulos (incluido GTK) están migrando a Meson. Para un nuevo proyecto, se puede recomendar Meson.

\subsection{Las herramientas automáticas}

Las Autotools comprenden tres componentes principales: Autoconf, Automake y Libtool. Está basado en scripts de shell, macros m4 y `make`.

Las macros están disponibles para varios propósitos (la documentación del usuario, estadísticas de cobertura de código para pruebas unitarias, etc.). El libro más reciente sobre el tema es *Autotools*, de John Calcote \cite{autotools}.

Pero Autotools tiene la reputación de ser difícil de aprender.

\subsection{Meson}

Meson es un sistema de construcción bastante nuevo, es más fácil de aprender que Autotools y también resulta en construcciones más rápidas. Algunos módulos de GNOME ya usan Meson. Consulte el sitio web para obtener más información:

[mesonbuild.com](http://mesonbuild.com/)
