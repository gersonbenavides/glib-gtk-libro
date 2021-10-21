# Constructor de objetos

`myapp_spell_checker_new()` es el constructor de la clase. Toma un parámetro de código de idioma (por ejemplo `"en_US"`) y devuelve una *instancia* de la clase, también llamada *objeto*. Lo que hace la función es simplemente asignar dinámicamente la `estructura` y devolver el puntero. Ese valor de retorno se usa luego como el primer parámetro de las funciones restantes de la clase. En algunos lenguajes como Python, ese primer parámetro se llama parámetro *self*, ya que hace referencia a "sí mismo", es decir, a su propia clase. Otros lenguajes orientados a objetos como Java y C ++ tienen la palabra clave *this* para acceder a los datos del objeto.

Tenga en cuenta que `myapp_spell_checker_new()` se puede llamar varias veces para crear diferentes objetos. Cada objeto tiene sus propios datos. Esa es la diferencia fundamental con las variables globales: si los datos se almacenan en variables globales, puede haber como máximo una instancia de ellos.

> **📌 Nota:** A menos que la variable global almacene los "objetos" en una estructura de datos agregados como una matriz, un lista enlazada o una tabla hash, con un identificador como el parámetro "*self*" (por ejemplo, un número entero o una cadena) para acceder a un elemento específico. Pero este es un código realmente desagradable, ¡por favor no lo hagas!.

<!-- POR HACER explicar new() (asignación en el montón) vs init() (asignación en la pila) y dar un ejemplo con init(). Pero el ejemplo también requiere el código *.c, por lo que quizás sea mejor agregar la explicación en una subsección posterior. -->