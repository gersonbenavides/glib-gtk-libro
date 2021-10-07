# Manejo de string

GLib proporciona una serie de funciones para el manejo de cadenas; algunos son exclusivos de GLib y otros resuelven problemas de portabilidad. Todos interoperan muy bien con las rutinas de asignación de memoria GLib.

Para aquellos interesados en una cadena mejor que `gchar *`, también hay un tipo `GString`. No se trata en este libro; consulte la documentación de la API para obtener más información.

<a id="glib-strext"></a>

```c
gint g_snprintf (gchar *string, gulong n, gchar const *format, ...);
```

<div class="caption">

<p><span class="glib-strext"></span>: Envoltorio de portabilidad.</p>

</div>

El <span class="glib-strext"></span> muestra un sustituto que GLib proporciona para la función `snprintf()`. `g_snprintf()` envuelve el `snprintf()` nativo en las plataformas que lo tienen y proporciona una implementación en las que no lo tienen.

Preste atención a no usar la función `sprintf()` que causa fallas, crea agujeros de seguridad y generalmente es maligna. Al usar `g_snprintf()` o `g_strdup_printf()` relativamente seguros (ver más abajo), puedes despedirte de `sprintf()` para siempre.

<a id="glib-strdup"></a>

```c
#include <glib.h>

gchar * g_strdup (const gchar *str);
gchar * g_strndup (const gchar *str, gsize n);
gchar * g_strdup_printf (const gchar *format, ...);
gchar * g_strdup_vprintf (const gchar *format, va_list args);
gchar * g_strnfill (gsize length, gchar fill_char);
```

<div class="caption">

<p><span class="glib-strdup"></span>: Asignar cadenas.</p>

</div>

El <span class="glib-strdup"></span> muestra la amplia gama de funciones de GLib para asignar cadenas. Como era de esperar, `g_strdup()` y `g_strndup()` producen una copia asignada de `str` o los primeros `n` caracteres de `str`. Para mantener la coherencia con las funciones de asignación de memoria GLib, devuelven `NULL` si se les pasa un puntero `NULL`. Las variantes `printf()` devuelven una cadena formateada. `g_strnfill()` devuelve una cadena de tamaño `length` rellena con `fill_char`.

`g_strdup_printf()` merece una mención especial; es una forma más sencilla de manejar este código común:

```c
gchar *str = g_malloc (256);
g_snprintf (str, 256, "%d printf-style %s", num, string);
```

En su lugar, podría decir esto y evitar tener que averiguar la longitud adecuada del búfer para arrancar:

```c
gchar *str = g_strdup_printf ("%d printf-style %s", num, string);
```

<a id="glib-strmanip"></a>

```c
#include <glib.h>

gchar * g_strchug (gchar *string);
gchar * g_strchomp (gchar *string);
gchar * g_strstrip (gchar *string);
```

<div class="caption">

<p><span class="glib-strmanip"></span>: Modificaciones de cadenas in situ.</p>

</div>

Las funciones del <span class="glib-strmanip"></span> modifican una cadena en el lugar: `g_strchug ()` y `g_strchomp()` "chug" la cadena (elimina los espacios iniciales), o "chomp" (eliminar los espacios finales). Esas dos funciones devuelven la cadena, además de modificarla en el lugar; en algunos casos, puede ser conveniente utilizar el valor de retorno. Hay una macro, `g_strstrip()`, que combina ambas funciones para eliminar los espacios iniciales y finales.

<a id="glib-strformats"></a>

```c
#include <glib.h>

gdouble g_strtod (const gchar *nptr, gchar **endptr);
const gchar * g_strerror (gint errnum);
const gchar * g_strsignal (gint signum);
```

<div class="caption">

<p><span class="glib-strformats"></span>: Conversiones de cadenas.</p>

</div>

El listado 2.10 muestra algunas funciones semi-estándar más que envuelve GLib. `g_strtod` es como `strtod()` -- convierte la cadena `nptr` en un double -- con la excepción de que también intentará convertir el double en la configuración local de `"C"` si no puede convertirlo en la configuración local predeterminada del usuario. `*endptr` se establece en el primer carácter no convertido, es decir, cualquier texto después de la representación numérica. Si la conversión falla, `*endptr` se establece en `nptr`. `endptr` puede ser `NULL`, lo que hace que se ignore.

`g_strerror()` y `g_strsignal()` son como sus equivalentes no `g_ `, pero portátiles. (Devuelven una representación de cadena para un errno o un número de señal).

<a id="glib-strconcat"></a>

```c
#include <glib.h>

gchar * g_strconcat (const gchar *string1, ...);
gchar * g_strjoin (const gchar *separator, ...);
```

<div class="caption">

<p><span class="glib-strconcat"></span>: Concatenar cadenas.</p>

</div>

GLib proporciona algunas funciones convenientes para concatenar cadenas, que se muestran en el <span class="glib-strconcat"></span>. `g_strconcat()` devuelve una cadena recién asignada creada concatenando cada una de las cadenas en la lista de argumentos. El último argumento debe ser `NULL`, por lo que `g_strconcat()` sabe cuándo detenerse. `g_strjoin()` es similar, pero `separator` se inserta entre cada cadena. Si `separator` es `NULL` , no se usa ningún separador.

<a id="glib-strvector"></a>

```c
#include <glib.h>

gchar ** g_strsplit (const gchar *string,
                     const gchar *delimiter,
                     gint max_tokens);
gchar * g_strjoinv (const gchar *separator, gchar **str_array);
void g_strfreev (gchar **str_array);
```

<div class="caption">

<p><span class="glib-strvector"></span>: Manipulación de vectores de cadena terminados en <code>NULL</code>.</p>

</div>

Finalmente, el <span class="glib-strvector"></span> resume algunas rutinas que manipulan matrices de cadenas terminadas en `NULL`. `g_strsplit()` rompe `string` en cada `delimiter`, devolviendo una matriz recién asignada. `g_strjoinv()` concatena cada cadena en la matriz con un `separator` opcional, devolviendo una cadena asignada. `g_strfreev()` libera cada cadena en la matriz y luego la propia matriz.

<script>
/* Asignacion de indice de listados en todo la pagina */

let lst = 6;
let i = 0;

lst += 1
let lst01 = document.getElementsByClassName("glib-strext");
for( i = 0; i < lst01.length; i++ ) {
    lst01[i].innerHTML = "<a href=\"#glib-strext\">Listado 2." + lst + "</a>";
}

lst += 1
let lst02 = document.getElementsByClassName("glib-strdup");
for( i = 0; i < lst02.length; i++ ) {
    lst02[i].innerHTML = "<a href=\"#glib-strdup\">Listado 2." + lst + "</a>";
}

lst += 1
let lst03 = document.getElementsByClassName("glib-strmanip");
for( i = 0; i < lst03.length; i++ ) {
    lst03[i].innerHTML = "<a href=\"#glib-strmanip\">Listado 2." + lst + "</a>";
}

lst += 1
let lst04 = document.getElementsByClassName("glib-strformats");
for( i = 0; i < lst04.length; i++ ) {
    lst04[i].innerHTML = "<a href=\"#glib-strformats\">Listado 2." + lst + "</a>";
}

lst += 1
let lst05 = document.getElementsByClassName("glib-strconcat");
for( i = 0; i < lst05.length; i++ ) {
    lst05[i].innerHTML = "<a href=\"#glib-strconcat\">Listado 2." + lst + "</a>";
}

lst += 1
let lst06 = document.getElementsByClassName("glib-strvector");
for( i = 0; i < lst06.length; i++ ) {
    lst06[i].innerHTML = "<a href=\"#glib-strvector\">Listado 2." + lst + "</a>";
}
</script>