# Macros de GObject

Cada clase de GObject proporciona un conjunto de macros estándar. La macro `G_APPLICATION()` como se demostró en la sección anterior es una de las macros estándar proporcionadas por la clase `GApplication`.

No todas las macros estándar de GObject se explicarán aquí, solo las macros útiles para *usar* un GObject de una manera básica. Las otras macros son más avanzadas y generalmente son útiles solo cuando se subclasifica una clase GObject, cuando se crea una propiedad o una señal, o cuando se reemplaza una función virtual.

Cada clase GObject define una macro de la forma `NAMESPACE_CLASSNAME(object)`, que convierte la variable al tipo "`NamespaceClassname *`" y comprueba en tiempo de ejecución si la variable contiene correctamente un `NamespaceClassname` objeto o una subclase del mismo. Si la variable es `NULL` o contiene un objeto incompatible, la macro imprime un mensaje de advertencia crítico en la consola y devuelve NULL.

Un elenco estándar también funciona, pero la mayoría de las veces no se recomienda porque no hay comprobaciones de tiempo de ejecución:

```c
GtkApplication *app;

/* Not recommended */
g_application_mark_busy ((GApplication *) app);
```

Otra macro útil cuando se usa un GObject es `NAMESPACE_IS_CLASSNAME(object)`, que devuelve `TRUE` si la variable es un objeto `NamespaceClassname` o una subclase del mismo.

<!-- POR HACER mostrar un ejemplo de una función que verifica sus argumentos con g_return? -->
