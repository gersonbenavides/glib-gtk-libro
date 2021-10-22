# La plataforma de desarrollo GLib/GTK

[La plataforma de desarrollo GLib/GTK](./content/book/struct/title.md)

- [Introducción](./content/intro/chpt/intro.md)
	- [¿Qué es GLib y GTK?](./content/intro/sect/glib-and-gtk.md)
	- [El escritorio GNOME](./content/intro/sect/gnome-desktop.md)
	- [Prerrequisitos](./content/intro/sect/prerequisites.md)
	- [¿Por qué y cuándo se usa el lenguaje C?](./content/intro/sect/why-and-when-c.md)
		- [Separación de backend del frontend](./content/intro/sect/separate-backend.md)
		- [Otros aspectos a tener en cuenta](./content/intro/sect/other-aspects.md)
	- [Ruta de aprendizaje](./content/intro/sect/learning-path.md)
	- [El entorno de desarrollo](./content/intro/sect/environment.md)

---

# GLib, la biblioteca principal

- [GLib, la biblioteca principal](./content/glib/chpt/glib.md)
	- [Lo esencial](./content/glib/basics/basics.md)
		- [Definiciones de tipo](./content/glib/basics/type-def.md)
		- [Macros de uso frecuente](./content/glib/basics/freq-macros.md)
		- [Macros de depuración](./content/glib/basics/dbg-macros.md)
		- [Memoria](./content/glib/basics/memory.md)
		- [Manejo de string](./content/glib/basics/str-handling.md)
	- [Estructura de datos](./content/glib/data-struct/data-struct.md)
		- [Listas](./content/glib/data-struct/lists.md)
		- [Árboles](./content/glib/data-struct/trees.md)
		- [Tablas hash](./content/glib/data-struct/hash-tables.md)
	- [El bucle del evento principal](./content/glib/sect/main-loop.md)
	- [Otras características](./content/glib/sect/other-feat.md)

# Programación orientada a objetos en C

<!-- [Programación orientada a objetos en C](./content/oop-semi/oop.md) -->

- [Programación semi-orientada a objetos en C](./content/oop-semi/chpt/oop-semi.md)
	- [Ejemplo de encabezado](./content/oop-semi/hdr-ex/hdr-ex.md)
		- [Espacio de nombres del proyecto](./content/oop-semi/hdr-ex/prj-names.md)
		- [Espacio de nombres de clase](./content/oop-semi/hdr-ex/class-names.md)
		- [¿Minúsculas, Mayúsculas o CamelCase?](./content/oop-semi/hdr-ex/letter-case.md)
		- [Incluir guardia](./content/oop-semi/hdr-ex/incl-guard.md)
		- [Soporte de C++](./content/oop-semi/hdr-ex/cpp-supt.md)
		- [#include](./content/oop-semi/hdr-ex/incl.md)
		- [Definición de tipo](./content/oop-semi/hdr-ex/type-def.md)
		- [Constructor de objetos](./content/oop-semi/hdr-ex/obj-ctor.md)
		- [Destructor de objetos](./content/oop-semi/hdr-ex/obj-dtor.md)
		- [Otras funciones públicas](./content/oop-semi/hdr-ex/other-func.md)
	- [El archivo *.c correspondiente]()
- [Una suave introducción a GObject]()
	- [Herencia]()
	- [Macros de GObject]()
	- [Interfaces]()
	- [Recuento de referencias]()
	- [Señales y propiedades]()
- [GTK]()
	- [Ejemplo de una arquitectura de código de aplicación GTK]()
- [Lecturas adicionales]()

---

[Bibliografía](./content/book/struct/biblio.md)