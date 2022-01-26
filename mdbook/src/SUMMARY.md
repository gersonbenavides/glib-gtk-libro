# La plataforma de desarrollo GLib/GTK

[La plataforma de desarrollo GLib/GTK](./content/book/title.md)

- [Introducción](./content/intro/intro.md)
	- [¿Qué es GLib y GTK?](./content/intro/glib-gtk.md)
	- [El escritorio GNOME](./content/intro/gnome-dskt.md)
	- [Prerrequisitos](./content/intro/preq.md)
	- [¿Por qué y cuándo se usa el lenguaje C?](./content/intro/why-when-c.md)
		- [Separación de backend del frontend](./content/intro/sep-backend.md)
		- [Otros aspectos a tener en cuenta](./content/intro/other-aspects.md)
	- [Ruta de aprendizaje](./content/intro/lrn-path.md)
	- [El entorno de desarrollo](./content/intro/dev-env.md)
	- [Instalación](./content/intro/install.md)
		- [Linux](./content/intro/linux.md)
		- [Windows]()
		- [Mac]()

---

# GLib, la biblioteca principal

- [GLib, la biblioteca principal](./content/glib/glib.md)
	- [Lo esencial](./content/glib/basics.md)
		- [Definiciones de tipo](./content/glib/type-def.md)
		- [Macros de uso frecuente](./content/glib/freq-macros.md)
		- [Macros de depuración](./content/glib/dbg-macros.md)
		- [Memoria](./content/glib/mem.md)
		- [Manejo de string](./content/glib/str-hdlg.md)
	- [Estructura de datos](./content/glib/data-struct.md)
		- [Listas](./content/glib/lists.md)
		- [Árboles](./content/glib/trees.md)
		- [Tablas hash](./content/glib/hash-tables.md)
	- [El bucle del evento principal](./content/glib/main-loop.md)
	- [Otras características](./content/glib/other-feat.md)

# Programación orientada a objetos en C

<!-- [Programación orientada a objetos en C](./content/oop-semi/oop.md) -->

- [Programación semi-orientada a objetos en C](./content/oop-semi/oop-semi.md)
	- [Ejemplo de encabezado](./content/oop-semi/hdr-ex.md)
		- [Espacio de nombres del proyecto](./content/oop-semi/prj-names.md)
		- [Espacio de nombres de clase](./content/oop-semi/class-names.md)
		- [¿Minúsculas, Mayúsculas o CamelCase?](./content/oop-semi/letter-case.md)
		- [Incluir guardia](./content/oop-semi/incl-guard.md)
		- [Soporte de C++](./content/oop-semi/cpp-supt.md)
		- [#include](./content/oop-semi/incl.md)
		- [Definición de tipo](./content/oop-semi/type-def.md)
		- [Constructor de objetos](./content/oop-semi/obj-ctor.md)
		- [Destructor de objetos](./content/oop-semi/obj-dtor.md)
		- [Otras funciones públicas](./content/oop-semi/other-func.md)
	- [El archivo \*.c correspondiente](./content/oop-semi/c-file.md)
		- [Orden de \#include](./content/oop-semi/order-incl.md)
		- [Comentarios de GTK-Doc](./content/oop-semi/gtk-doc-cmnt.md)
		- [Anotaciones de introspección de GObject](./content/oop-semi/gobj-introsp.md)
		- [Funciones estáticas vs funciones no estáticas](./content/oop-semi/stc-vs-non-stc.md)
		- [Programación defensiva](./content/oop-semi/defen-prog.md)
		- [Estilo de codificación](./content/oop-semi/coding-style.md)
- [Una suave introducción a GObject](./content/oop-gobj/oop-gobj.md)
	- [Herencia](./content/oop-gobj/inherit.md)
	- [Macros de GObject](./content/oop-gobj/gobj-macros.md)
	- [Interfaces](./content/oop-gobj/intfc.md)
	- [Recuento de referencias](./content/oop-gobj/ref-cnt.md)
		- [Evitar ciclos de referencia con referencias débiles](./content/oop-gobj/avoid-ref.md)
		- [Referencias flotantes](./content/oop-gobj/float-ref.md)
	- [Señales y propiedades](./content/oop-gobj/sig-prop.md)
		- [Conexión de una función de devolución de llamada a una señal](./content/oop-gobj/cnct-callb-sig.md)
		- [Desconexión de controladores de señales](./content/oop-gobj/disc-sig.md)
		- [Propiedades](./content/oop-gobj/prop.md)

# GTK

- [Ejemplo de una arquitectura de código de aplicación GTK](./content/gtk-app-arch/gtk-app-arch.md)
	- [La función main() y GeditApp](./content/gtk-app-arch/main-func.md)
	- [GeditWindow](./content/gtk-app-arch/geditwindow.md)
	- [GeditNotebook y lo que contiene](./content/gtk-app-arch/geditnotebook.md)
	- [¿Por qué y cuándo crear subclases de widgets GTK?](./content/gtk-app-arch/why-when-sub-class.md)
	- [Widgets compuestos](./content/gtk-app-arch/comp-widg.md)

# Lectura adicional

- [Lecturas adicionales](./content/fthr-rdg/fthr-rdg.md)
	- [GTK y GIO](./content/fthr-rdg/gtk-gio.md)
	- [Escribir sus propias clases de GObject](./content/fthr-rdg/wrtg-gobj-class.md)
	- [Sistema de compilación](./content/fthr-rdg/bld-sys.md)
		- [Las Autotools](./content/fthr-rdg/autotools.md)
		- [Meson](./content/fthr-rdg/meson.md)
	- [Mejores prácticas de programación](./content/fthr-rdg/prog-prac.md)

---

[Bibliografía](./content/book/biblio.md)