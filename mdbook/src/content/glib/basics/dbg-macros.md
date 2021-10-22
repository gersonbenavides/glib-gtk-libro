# Macros de depuración

GLib tiene un buen conjunto de macros que puede usar para hacer cumplir invariantes y condiciones previas en su código. GTK los usa generosamente, una de las razones por las que es tan estable y fácil de usar. Todos desaparecen cuando define `G_DISABLE_CHECKS` o `G_DISABLE_ASSERT`, por lo que no hay penalización de rendimiento en el código de producción. Usarlos generosamente es una muy, muy buena idea. Encontrará errores mucho más rápido si lo hace. Incluso puede agregar afirmaciones y verificaciones cada vez que encuentre un error para asegurarse de que el error no vuelva a aparecer en versiones futuras; esto complementa un conjunto de regresión. Las comprobaciones son especialmente útiles cuando el código que está escribiendo será utilizado como caja negra por otros programadores; los usuarios sabrán inmediatamente cuándo y cómo han hecho un mal uso de su código.


Por supuesto, debe tener mucho cuidado de asegurarse de que su código no dependa sutilmente de declaraciones de solo depuración para funcionar correctamente. Las declaraciones que desaparecerán en el código de producción *nunca* deberían tener efectos secundarios.

<a id="glib-precondition"></a>

```c
#include <glib.h>

g_return_if_fail (condition);
g_return_val_if_fail (condition, return_value);
```

<div class="caption">

<p><span class="glib-precondition">Listado</span>: Comprobaciones de condiciones previas.</p>

</div>

El <span class="glib-precondition">Listado</span> muestra las verificaciones de condiciones previas de GLib. `g_return_if_fail()` imprime una advertencia y regresa inmediatamente de la función actual si `condition` es `FALSE`. `g_return_val_if_fail()` es similar pero le permite devolver algún `return_value`. Estos macros son increíblemente útiles, si las usa libremente, especialmente en
combinación con la verificación de tipo en tiempo de ejecución de GObject, reducirá a la mitad el tiempo que dedica a buscar punteros incorrectos y errores
tipográficos.


Usar estas funciones es simple; aquí hay un ejemplo de la implementación de la tabla hash GLib:

```c
void
g_hash_table_foreach (GHashTable *hash_table,
                      GHFunc      func,
                      gpointer    user_data)
{
  gint i;

  g_return_if_fail (hash_table != NULL);
  g_return_if_fail (func != NULL);

  for (i = 0; i < hash_table->size; i++)
    {
      guint node_hash = hash_table->hashes[i];
      gpointer node_key = hash_table->keys[i];
      gpointer node_value = hash_table->values[i];

      if (HASH_IS_REAL (node_hash))
        (* func) (node_key, node_value, user_data);
    }
}
```

Sin las comprobaciones, pasar `NULL` como parámetro a esta función resultaría en una misteriosa falla de segmentación. La persona que usa la biblioteca tendría que averiguar dónde ocurrió el error con un depurador y tal vez incluso indagar en el código GLib para ver qué estaba mal. Con las comprobaciones, obtendrán un bonito mensaje de error que les indicará que los argumentos `NULL` no están permitidos.

<a id="glib-assertions"></a>

```c
#include <glib.h>

g_assert (condition);
g_assert_not_reached ();
```

<div class="caption">

<p><span class="glib-assertions">Listado</span>: Afirmaciones.</p>

</div>

GLib también tiene macros de aserción más tradicionales, que se muestran en el <span class="glib-assertions">Listado</span>. `g_assert()` es básicamente idéntico a `assert()`, pero responde a `G_DISABLE_ASSERT` y se comporta consistentemente en todas las plataformas. También se proporciona `g_assert_not_reached()`; esta es una afirmación que siempre falla. Las afirmaciones llaman a `abort()` para salir del programa y (si su entorno lo admite) descargan un archivo central con fines de depuración.

Las afirmaciones fatales deben usarse para verificar la *consistencia interna* de una función o biblioteca, mientras que `g_return_if_fail()` está destinado a garantizar que se pasen valores cuerdos a las interfaces públicas de un módulo de programa. Es decir, si una aserción falla, normalmente busca un error en el módulo que contiene la aserción; Si falla una comprobación de `g_return_if_fail()`, normalmente busca el error en el código que invoca el módulo.

Este código del módulo de cálculos calendáricos de GLib muestra la diferencia:

```c
GDate *
g_date_new_dmy (GDateDay   day,
                GDateMonth month,
                GDateYear  year)
{
  GDate *date;
  g_return_val_if_fail (g_date_valid_dmy (day, month, year), NULL);

  date = g_new (GDate, 1);

  date->julian = FALSE;
  date->dmy = TRUE;

  date->month = month;
  date->day = day;
  date->year = year;

  g_assert (g_date_valid (date));

  return date;
}
```

La verificación de condiciones previas al principio asegura que el usuario pasa en valores razonables para el día, mes y año; la afirmación al final asegura que GLib construyó un objeto sano, dados valores cuerdos.

`g_assert_not_reached()` debe usarse para marcar situaciones "imposibles"; un uso común es detectar declaraciones de cambio que no manejan todos los valores posibles de una enumeración:

```c
switch (value)
  {
  case FOO_ONE:
    break;

  case FOO_TWO:
    break;

  default:
    g_assert_not_reached ();
  }
```

Todas las macros de depuración imprimen una advertencia utilizando la función `g_log()` de GLib, lo que significa que la advertencia incluye el nombre de la aplicación o biblioteca de origen y, opcionalmente, puede instalar una rutina de impresión de advertencias de reemplazo. Por ejemplo, puede enviar todas las advertencias a un cuadro de diálogo o archivo de registro en lugar de imprimirlas en la consola.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="glib-refs"></div>