# Estilo de codificación

Finalmente, vale la pena explicar algunas cosas sobre el estilo de codificación. Se le anima a utilizar desde el principio el mismo estilo de codificación para su proyecto, ya que puede ser algo difícil de cambiar después. Si cada programa tiene diferentes convenciones de código, es una pesadilla para alguien dispuesto a contribuir.

Aquí hay un ejemplo de una definición de función:

```c
gboolean
myapp_spell_checker_check_word (MyappSpellChecker *checker,
                                const gchar       *word,
                                gssize             word_length)
{
  /* ... */
}
```

Vea cómo se alinean los parámetros: hay un parámetro por línea, con el tipo alineado en el paréntesis de apertura y con los nombres alineados en la misma columna. Algunos editores de texto se pueden configurar para hacerlo automáticamente.

Para una función *call*, si poner todos los parámetros en la misma línea da como resultado una línea demasiado larga, los parámetros también deben estar alineados entre paréntesis, para que el código sea más fácil de leer:

```c
  function_call (one_param,
                 another_param,
                 yet_another_param);
```

A diferencia de otros proyectos como el kernel de Linux, no existe realmente un límite en la longitud de la línea. Un código basado en GObject puede tener líneas bastante largas, incluso si los parámetros de una función están alineados entre paréntesis. Por supuesto, si una línea termina en, digamos, la columna 120, podría significar que hay demasiados niveles de sangría y que debería extraer el código en funciones intermedias.

El tipo de retorno de una función *definition* está en la línea anterior que el nombre de la función, por lo que el nombre de la función está al principio de la línea. Al escribir una función *prototype*, el nombre de la función nunca debe estar al principio de una línea, idealmente debe estar en la misma línea que el tipo de retorno.

> **📌 Nota:** En `myapp-spell-checker.h`, los nombres de las funciones están sangrados con dos espacios en lugar de estar en las mismas líneas que los tipos de retorno, porque no hay suficiente espacio horizontal en la página.

De esa manera, puede hacer una búsqueda de expresión regular para encontrar la implementación de una función, por ejemplo, con el comando de shell `grep`:

```bash
$ grep -n -E "^function_name" *.c
```

O, si el código está dentro de un repositorio de Git, es un poco más conveniente de usar `git grep`:

```bash
$ git grep -n -E "^function_name"
```

Asimismo, existe una manera fácil de encontrar la declaración de una `struct` pública. La convención es prefijar el nombre del tipo con un guión bajo al declarar la `struct`. Por ejemplo:

```c
/* In the header: */
typedef struct _MyappSpellChecker MyappSpellChecker;

/* In the *.c file: */
struct _MyappSpellChecker
{
  /* ... */
};
```

Como resultado, para encontrar la declaración completa del tipo `MyappSpellChecker`, puede buscar "`_MyappSpellChecker`":

```bash
$ git grep -n _MyappSpellChecker
```

En GLib/GTK, esta convención de prefijo de subrayado se aplica normalmente a cada `struct` que tiene una línea `typedef` separada. La convención no se sigue a fondo cuando se usa una `struct` en un solo archivo \*.c. Y la convención generalmente no se sigue para los tipos `enum`. Sin embargo, para su proyecto, nada le impide aplicar consistentemente la convención de prefijo de subrayado a todos los tipos.

Tenga en cuenta que existen herramientas más sofisticadas que `grep` para examinar una base de código C, por ejemplo, [Cscope](http://cscope.sourceforge.net/).

Para aprender más sobre el estilo de codificación usado en GLib, GTK y GNOME, lea las Pautas de programación de GNOME <span class="gnome-programming-guidelines"></span>.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="biblio-refs"></div>
