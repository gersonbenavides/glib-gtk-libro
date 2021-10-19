# Otras características

Simplemente no hay espacio para cubrir todas las funciones de GLib en este
libro. Vale la pena mirar GLib cada vez que piense: "Realmente *debería* haber
una función que ...". Esta sección enumera otras características que proporciona
GLib, pero *no* es exhaustiva.

Parte del soporte de aplicaciones principales que no se ha mencionado aún:

* `GError`: un sistema de notificación de errores, similar a las excepciones en otros lenguajes.

* La función `g_log()` le permite imprimir advertencias, mensajes, etc. con niveles de registro configurables y rutinas de impresión conectables.

Utilidades:

* Un analizador de opciones de línea de comandos.

* Un marco de prueba unitaria.

* Una instalación de temporizador.

* Funciones calendáricas/aritméticas de fechas.

* Manipulación de nombre de archivo, como `g_path_get_basename()` y `g_path_is_absolute()`.

* Un analizador XML simple.

* Expresiones regulares compatibles con Perl.

Una selección de utilidades más pequeñas:

* `G_MAXFLOAT`, etc. equivalentes para muchos tipos numéricos.

* Conversiones por orden de bytes.

* `G_DIR_SEPARATOR` maneja las diferencias de Windows/Unix.

* Rutinas de conveniencia/portabilidad para obtener el directorio de inicio del usuario, obtener el nombre de un directorio `/tmp` y tareas similares.

* `G_VA_COPY` copia una `va_list` de forma portátil.

* Numerosas macros para permitir el uso de extensiones del compilador (especialmente extensiones GCC) de forma portátil.

* Manipulación de campo de bits.

* Portable `g_htonl()` y otras conversiones de host a red.

Y por último, pero no menos importante, otros tipos de datos interesantes:

* Clases mejoradas de cadenas y matrices. Arreglos de punteros y bytes.

* `GQuark` -- mapeo bidireccional de cadenas a identificadores enteros.

* `GVariant` -- un tipo de datos genérico que almacena un valor junto con información sobre el tipo de ese valor.