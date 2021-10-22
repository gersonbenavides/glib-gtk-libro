# \#include

Hay varias formas de organizar los `#include` en una base de código C. La convención en GLib/GTK es que incluir un encabezado en un archivo \*.c no debería requerir incluir otro encabezado de antemano.

> **📌 Nota:** Esa es la regla general, pero existen excepciones: por ejemplo, incluir `glib/gi18n-lib.h` requiere que se defina `GETTEXT_PACKAGE`, este último suele estar presente en el encabezado `config.h`.

`myapp-spell-checker.h` contiene el siguiente `#include`:

```c
#include <glib.h>
```

Debido a que `glib.h` es necesario para las macros `G_BEGIN_DECLS` y `G_END_DECLS`, para las definiciones de tipos básicos de GLib (`gchar`, `gboolean`, etc.) y `GSList`.

Si se elimina el `#include` en `myapp-spell-checker.h`, cada archivo \*.c que incluya `myapp-spell-checker.h` también debería incluir `glib.h` de antemano; de lo contrario, el compilador no podría compilar ese archivo \*.c. Pero no queremos agregar tal requisito para los usuarios de la clase.