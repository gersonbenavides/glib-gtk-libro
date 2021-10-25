# Funciones estáticas vs funciones no estáticas

En el código de ejemplo, puede ver que la función `load_dictionary()` se ha marcado como `static`. De hecho, es una buena práctica en C marcar las funciones internas como `static`. Una función `static` solo se puede usar en el mismo archivo \*.c. Por otro lado, una función pública debe ser no estática y tener un prototipo en un encabezado.

Existe la opción de advertencia `-Wmissing-prototypes` GCC para garantizar que un fragmento de código siga esta convención.

> **📌 Nota:** Cuando se usan las herramientas automáticas, la macro `AX\_COMPILER\_FLAGS` Autoconf habilita, entre otras cosas, esa bandera GCC.

Además, contrariamente a una función pública, una función `static` no requiere que el proyecto y los espacios de nombres de la clase tengan el prefijo \(aquí, `myapp_spell_checker`\).

