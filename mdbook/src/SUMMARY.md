# La plataforma de desarrollo GLib/GTK

[La plataforma de desarrollo GLib/GTK](./content/book/struct/title.md)

- [Introducción](./content/intro/chpt/intro.md)
	- [¿Qué es GLib y GTK?](./content/intro/sect/glib-gtk.md)
	- [El escritorio GNOME](./content/intro/sect/gnome-dskt.md)
	- [Prerrequisitos](./content/intro/sect/preq.md)
	- [¿Por qué y cuándo se usa el lenguaje C?](./content/intro/sect/why-when-c.md)
		- [Separación de backend del frontend](./content/intro/sect/sep-backend.md)
		- [Otros aspectos a tener en cuenta](./content/intro/sect/other-aspects.md)
	- [Ruta de aprendizaje](./content/intro/sect/lrn-path.md)
	- [El entorno de desarrollo](./content/intro/sect/dev-env.md)

---

# GLib, la biblioteca principal

- [GLib, la biblioteca principal](./content/glib/chpt/glib.md)
	- [Lo esencial](./content/glib/basics/basics.md)
		- [Definiciones de tipo](./content/glib/basics/type-def.md)
		- [Macros de uso frecuente](./content/glib/basics/freq-macros.md)
		- [Macros de depuración](./content/glib/basics/dbg-macros.md)
		- [Memoria](./content/glib/basics/mem.md)
		- [Manejo de string](./content/glib/basics/str-hdlg.md)
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
	- [El archivo \*.c correspondiente](./content/oop-semi/c-file/c-file.md)
		- [Orden de \#include](./content/oop-semi/c-file/order-incl.md)
		- [Comentarios de GTK-Doc](./content/oop-semi/c-file/gtk-doc-cmnt.md)
		- [Anotaciones de introspección de GObject](./content/oop-semi/c-file/gobj-introsp.md)
		- [Funciones estáticas vs funciones no estáticas](./content/oop-semi/c-file/stc-vs-non-stc.md)
		- [Programación defensiva](./content/oop-semi/c-file/defen-prog.md)
		- [Estilo de codificación](./content/oop-semi/c-file/coding-style.md)
- [Una suave introducción a GObject](./content/oop-gobj/chpt/oop-gobj.md)
	- [Herencia](./content/oop-gobj/sect/inherit.md)
	- [Macros de GObject](./content/oop-gobj/sect/gobj-macros.md)
	- [Interfaces](./content/oop-gobj/sect/intfc.md)
	- [Recuento de referencias](./content/oop-gobj/ref-cnt/ref-cnt.md)
		- [Evitar ciclos de referencia con referencias débiles](./content/oop-gobj/ref-cnt/avoid-ref.md)
		- [Referencias flotantes](./content/oop-gobj/ref-cnt/float-ref.md)
	- [Señales y propiedades](./content/oop-gobj/sig-prop/sig-prop.md)
		- [Conexión de una función de devolución de llamada a una señal](./content/oop-gobj/sig-prop/cnct-callb-sig.md)
		- [Desconexión de controladores de señales](./content/oop-gobj/sig-prop/disc-sig.md)
		- [Propiedades](./content/oop-gobj/sig-prop/prop.md)

# GTK

- [Ejemplo de una arquitectura de código de aplicación GTK](./content/gtk-app-arch/chpt/gtk-app-arch.md)
	- [La función main() y GeditApp](./content/gtk-app-arch/sect/main-func.md)
	- [GeditWindow](./content/gtk-app-arch/sect/geditwindow.md)
	- [GeditNotebook y lo que contiene](./content/gtk-app-arch/sect/geditnotebook.md)
	- [¿Por qué y cuándo crear subclases de widgets GTK?](./content/gtk-app-arch/sect/why-when-sub-class.md)
	- [Widgets compuestos](./content/gtk-app-arch/sect/comp-widg.md)

# Lectura adicional

- [Lecturas adicionales](./content/fthr-rdg/chpt/fthr-rdg.md)
	- [GTK y GIO](./content/fthr-rdg/sect/gtk-gio.md)
	- [Escribir sus propias clases de GObject](./content/fthr-rdg/sect/wrtg-gobj-class.md)
	- [Sistema de compilación](./content/fthr-rdg/bld-sys/bld-sys.md)
		- [Las Autotools](./content/fthr-rdg/bld-sys/autotools.md)
		- [Meson](./content/fthr-rdg/bld-sys/meson.md)
	- [Mejores prácticas de programación](./content/fthr-rdg/sect/prog-prac.md)

---

[Bibliografía](./content/book/struct/biblio.md)