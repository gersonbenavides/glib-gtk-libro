# Otros aspectos a tener en cuenta

Si tiene dudas sobre el lenguaje a elegir, aquí hay otros aspectos a tener en cuenta. Tenga en cuenta que este texto está un poco sesgado ya que se eligió el lenguaje C.

C es un lenguaje de tipo estático: los tipos de variables y los prototipos de funciones en un programa se conocen en el momento de la compilación. El compilador descubre muchos errores triviales, como un error tipográfico en el nombre de una función. El compilador también es de gran ayuda cuando se hacen refactorizaciones de código, lo cual es esencial para el mantenimiento a largo plazo de un programa. Por ejemplo, cuando divide una clase en dos, si el código que usa la clase inicial no se actualiza correctamente, el compilador se lo informará amablemente.

> **📌 Nota:** Bueno, amablemente quizás no sea la mejor descripción, arrojar un montón de errores está más cerca de la realidad.

Con el desarrollo basado en pruebas (TDD), y escribiendo pruebas unitarias para *todo*, también es factible escribir una enorme base de código en un lenguaje de tipo dinámico como Python. Con una muy buena cobertura de código, las pruebas unitarias también detectarán errores al refactorizar el código. Pero las pruebas unitarias pueden ser mucho más lentas de ejecutar que compilar el código, ya que también prueba el comportamiento del programa. Por lo tanto, puede que no sea conveniente ejecutar todas las pruebas unitarias al realizar refactorizaciones de código. ¡Por supuesto, escribir pruebas unitarias también es una buena práctica para una base de código C! Sin embargo, para la parte GUI del código, escribir pruebas unitarias a menudo no es una tarea de alta prioridad si la aplicación está bien probada por sus desarrolladores.

C es un lenguaje escrito explícitamente: los tipos de variables son visibles en el código. Es una forma de auto-documentar el código; por lo general, no es necesario agregar comentarios para explicar qué contienen las variables. Conocer el tipo de variable es importante para comprender el código, saber qué representa la variable y qué funciones se pueden llamar sobre ella. En un asunto relacionado, el objeto *self* se pasa explícitamente como un argumento de función. Por lo tanto, cuando se accede a un atributo a través del puntero *self*, se sabe de dónde procede el atributo. Algunos lenguajes orientados a objetos tienen *esta* palabra clave para ese propósito, pero a veces es opcional como en C ++ o Java. En este último caso, una función útil del editor de texto es resaltar atributos de manera diferente, por lo que incluso cuando no se usa *esta* palabra clave, usted sabe que es un atributo y no una variable local. Con el objeto *self* pasado como argumento, no hay posibles confusiones.

El lenguaje C tiene una *cadena de herramientas* muy buena: compiladores estables (GCC, Clang,...), Editores de texto (Vim, Emacs,...), Depuradores (GDB, Valgrind,...), Herramientas de análisis estático, ...

Para algunos programas, un recolector de basura no es apropiado porque pausa el programa regularmente para liberar la memoria no utilizada. Para secciones de código críticas, como animaciones en tiempo real, no es conveniente pausar el programa (un recolector de basura a veces puede ejecutarse durante varios segundos). En este caso, la gestión manual de la memoria como en C es una solución.

Menos importante, pero útil; la verbosidad de C en combinación con las convenciones GLib/GTK tiene una ventaja: el código se puede buscar fácilmente con un comando como `grep`. Por ejemplo, la función `gtk_widget_show()` contiene el espacio de nombres (`gtk`), la clase (`widget`) y el método (`show`). Con un lenguaje orientado a objetos, la sintaxis es generalmente `object.show()`. Si se busca "show" en el código, probablemente habrá más falsos positivos, por lo que se necesita una herramienta más inteligente. Otra ventaja es que conocer el espacio de nombres y la clase de un método puede ser útil al leer el código, es otra forma de auto-documentación.

Más importante aún, la documentación de la API GLib/GTK está escrita principalmente para el lenguaje C. No es conveniente leer la documentación de C mientras se programa en otro idioma. Algunas herramientas están actualmente en desarrollo para generar la documentación de la API para otros lenguajes de destino, por lo que es de esperar que en el futuro ya no sea un problema.

GLib/GTK están escritos en C. Entonces, cuando se programa en C, no hay capa adicional. Una capa adicional es potencialmente una fuente de errores adicionales y cargas de mantenimiento. Además, usar el lenguaje C probablemente
sea mejor para propósitos pedagógicos. Un lenguaje de nivel superior puede ocultar algunos detalles sobre GLib/GTK. Por lo tanto, el código es más corto, pero cuando tiene un problema, debe comprender no solo cómo funciona la función de la biblioteca, sino también cómo funciona el enlace del idioma.

Dicho esto, si:

* No se siente cómodo en C.
* Ya domina un lenguaje de nivel superior con compatibilidad con GObject Introspection.
* Planea escribir solo una pequeña aplicación o complemento.

Elegir un lenguaje de nivel superior tiene mucho sentido.