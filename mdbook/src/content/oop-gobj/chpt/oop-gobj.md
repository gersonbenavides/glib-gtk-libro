# Una suave introducción a GObject

En el capítulo anterior hemos aprendido a escribir código semi-orientado a objetos en C. Así es como se escriben las clases en GLib core. GObject avanza varios pasos en la programación orientada a objetos, con herencia, interfaces, funciones virtuales, etc. GObject también simplifica el paradigma de programación dirigida por eventos, con señales y propiedades.

Se recomienda crear sus propias clases de GObject para escribir una aplicación GLib/GTK. Desafortunadamente, el código es un poco detallado, porque el lenguaje C no está orientado a objetos. El código repetitivo es necesario para algunas funciones, pero no tenga miedo, existen herramientas y scripts para generar el modelo repetitivo.

Sin embargo, este capítulo da un paso atrás del capítulo anterior, es solo una pequeña introducción a GObject; explicará las cosas esenciales para saber cómo *usar* una clase GObject existente (como todos los widgets y clases GTK en GIO). No explicará cómo *crear* sus propias clases de GObject, porque ya está bien cubierto en el manual de referencia de GObject, y el objetivo de este libro no es duplicar todo el contenido de los manuales de referencia, el objetivo es más para que sirva de guía de introducción.

Entonces, para obtener información más detallada sobre GObject y saber cómo crear subclases, la documentación de referencia de GObject contiene capítulos introductorios: "*Conceptos*" y "*Tutorial*", disponibles en:

[developer.gnome.org/gobject/stable/](https://developer.gnome.org/gobject/stable/)

Para explicar ciertos conceptos, se toman algunos ejemplos de GTK o GIO. Al leer este capítulo, se le anima a abrir Devhelp en paralelo, para mirar la referencia de API y ver por sí mismo cómo se documenta una biblioteca basada en GObject. El objetivo es que seas autónomo y puedas aprender cualquier clase nueva de GObject, ya sea en GIO, GTK o cualquier otra biblioteca.