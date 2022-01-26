# Sistema de compilación

Un Makefile básico generalmente no es suficiente si desea instalar su aplicación en diferentes sistemas. Por tanto, se necesita una solución más sofisticada. Para un programa basado en GLib/GTK, existen dos alternativas principales: Autotools y Meson.

GNOME y GTK históricamente usan Autotools, pero a partir de 2017 algunos módulos (incluido GTK) están migrando a Meson. Para un nuevo proyecto, se puede recomendar Meson.
