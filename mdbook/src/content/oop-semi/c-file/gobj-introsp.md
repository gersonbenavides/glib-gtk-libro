# Anotaciones de introspección de GObject

El comentario de GTK-Doc para la función `myapp_spell_checker_get_suggestions()` contiene anotaciones de GObject Introspection para el valor de retorno:

```c
/**
 * ...
 * Returns: (transfer full) (element-type utf8): the list of suggestions.
 */
```

El tipo de retorno de la función es `GSList *`, que no es suficiente para que los enlaces de idioma sepan qué contiene la lista, y cómo liberarla. <span class="text-monospace">(transferencia completa)</span> significa que la persona que llama debe liberar completamente el valor de retorno: la lista misma *y* sus elementos. <span class="text-monospace">(tipo de elemento utf8)</span> significa que la lista contiene cadenas UTF-8.

Para obtener un valor de retorno, si la anotación de transferencia es <span class="text-monospace">contenedor de transferencia</span>, la persona que llama necesita liberar solo la estructura de datos, no sus elementos. Y si la anotación de transferencia es <span class="text-monospace">transferir ninguna</span>, la propiedad del contenido variable no se transfiere y, por lo tanto, la persona que llama no debe liberar el valor de retorno.

Hay muchas otras anotaciones de GObject Introspection (GI), por nombrar solo un par de otras:

* `(nullable)`: el valor puede ser `NULL`;
* `(out)`: un parámetro de función "out", es decir, un parámetro que devuelve un valor.

Como puede ver, las anotaciones GI no solo son útiles para los enlaces de idiomas, sino que también recopilan información útil para el programador de C.

Para obtener una lista completa de anotaciones GI, consulte la wiki de GObject Introspection <span class="gobject-introspection"></span>.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-biblio"></div>