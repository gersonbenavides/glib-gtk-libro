# Espacio de nombres del proyecto

Lo primero a tener en cuenta es el uso del espacio de nombres "Myapp". Cada símbolo del encabezado tiene como prefijo el espacio de nombres del proyecto.

Es una buena práctica elegir un espacio de nombres para su código, para evitar conflictos de símbolos en el momento del enlace. Es especialmente importante tener un espacio de nombres para una biblioteca, pero también es mejor tener uno para una aplicación. Por supuesto, el espacio de nombres debe ser único para cada base de código; por ejemplo, *no* debe reutilizar los espacios de nombres "G" o "Gtk" para su aplicación o biblioteca.