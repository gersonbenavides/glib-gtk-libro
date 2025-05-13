# Herencia

Un concepto importante de OOP es la herencia. Una clase puede ser una subclase de una clase principal. La subclase hereda las características de la clase padre, extendiendo o anulando su comportamiento.

La biblioteca GObject proporciona la clase base `GObject`. Cada clase en GIO y GTK hereda, directa o indirectamente, de la clase base `GObject`. Al mirar una clase basada en GObject, la documentación (si está escrita con GTK-Doc) siempre contiene una *Jerarquía de objetos*. Por ejemplo, `GtkApplication` tiene la siguiente jerarquía de objetos:

```plaintext
GObject
└── GApplication
    └── GtkApplication
```

Significa que cuando crea un objeto `GtkApplication`, también tiene acceso a las funciones, señales y propiedades de `GApplication` (implementado en GIO) y `GObject`. Por supuesto, las funciones `g_application_*` toman como primer argumento una variable de tipo "`GApplication *`", no "`GtkApplication *`". Para convertir la variable en el tipo correcto, la forma recomendada es usar la macro `G_APPLICATION()`. Por ejemplo:

```c
GtkApplication *app;

g_application_mark_busy (G_APPLICATION (app));
```
