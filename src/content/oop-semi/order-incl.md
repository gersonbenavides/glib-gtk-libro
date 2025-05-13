# Orden de \#include

En la parte superior del archivo, se encuentra la lista habitual de `#include`. Un detalle pequeño pero digno de mención es que el orden de inclusión no se eligió al azar. En cierto archivo \*.c, es mejor incluir primero su archivo \*.h correspondiente, y luego los otros encabezados.

> **📌 Nota:** Excepto si tiene un archivo `config.h`, en ese caso debería `config.h`, *luego* el \*.h correspondiente, y luego los otros encabezados.

Al incluir la primera `myapp-spell-checker.h`, si falta un `#include` en `myapp-spell-checker.h`, el compilador informará un error. Como se explica en la sección <span class="ch-oop-semi-header-include"></span>, un encabezado siempre debe tener el mínimo requerido `#include`s para que ese encabezado se incluya a su vez.

Además, dado que `glib.h` ya está incluido en `myapp-spell-checker.h`, no es necesario incluirlo una segunda vez en `myapp-spell-checker.c`.
