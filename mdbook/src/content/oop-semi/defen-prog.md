# Programación defensiva

Cada función pública verifica sus precondiciones con las macros de depuración de `g_return_if_fail()` o `g_return_val_if_fail()`, como se describe en la sección <span class="ch-glib-dbg-macros"></span>. El parámetro *self* también se verifica, para ver si no es `NULL`, excepto por el destructor, `myapp_spell_checker_free()`, para que sea consistente con `free()` y `g_free()` que acepta un parámetro `NULL` por conveniencia.

Tenga en cuenta que las macros `g_return` deben usarse solo para los puntos de entrada de una clase, es decir, en sus funciones públicas. Por lo general, puede asumir que los parámetros pasados a una función `static` son válidos, especialmente el parámetro *self*. Sin embargo, a veces es útil verificar un argumento de una función `static` con `g_assert()`, para hacer que el código sea más robusto y auto-documentado.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-ch"></div>