#include "myapp-spell-checker.h"
#include <string.h>

struct _MyappSpellChecker
{
  gchar *language_code;

  /* Ponga aqui otras estructuras de datos utilizadas
   * para implementar la revision ortografica.
   */
};

static void
load_dictionary (MyappSpellChecker *checker)
{
  /* ... */
};

/**
 * myapp_spell_checker_new:
 * @language_code: el lenguaje del codigo a utlizar.
 *
 * Returns: un nuevo objeto #MyappSpellChecker. Libre con
 * myapp_spell_checker_free().
 */
MyappSpellChecker *
myapp_spell_checker_new (const gchar *language_code)
{
  MyappSpellChecker *checker;

  g_return_val_if_fail (language_code != NULL, NULL);

  checker = g_new0 (MyappSpellChecker, 1);
  checker->language_code = g_strdup (language_code);

  load_dictionary (checker);

  return checker;
}

/**
 * myapp_spell_checker_free:
 * @checker: un #MyappSpellChecker.
 *
 * Libera @checker.
 */
void
myapp_spell_checker_free (MyappSpellChecker *checker)
{
  if (checker == NULL)
    return;

  g_free (checker->language_code);
  g_free (checker);
}

/**
 * myapp_spell_checker_check_word:
 * @checker: un #MyappSpellChecker.
 * @word: la palabra para comprobar.
 * @word_length: la longitud de bytes de @word, o -1 si @word
 * es terminado en nulo.
 *
 * Returns: %TRUE si @word esta escrito correctamente, %FALSE
 * de lo contrario.
 */
gboolean
myapp_spell_checker_check_word (MyappSpellChecker *checker,
                                const gchar       *word,
                                gssize             word_length)
{
  g_return_val_if_fail (checker != NULL, FALSE);
  g_return_val_if_fail (word != NULL, FALSE);
  g_return_val_if_fail (word_length >= -1, FALSE);

  /* ... Compruebe si la palabra esta presente en un diccionario. */

  return TRUE;
}

/**
 * myapp_spell_checker_get_suggestions:
 * @checker: un #MyappSpellChecker.
 * @word: una palabra mal escrita.
 * @word_length: la longitud de bytes de @word, o -1 si @word
 * es terminado en nulo.
 *
 * Obtiene las sugerencias para @word. Libera el valor de retorno con
 * g_slist_free_full(suggestions, g_free).
 *
 * Returns: (transfer full) (element-type utf8): la lista de sugerencias.
 */
GSList *
myapp_spell_checker_get_suggestions (MyappSpellChecker *checker,
                                     const gchar       *word,
                                     gssize             word_length)
{
  GSList *suggestions = NULL;

  g_return_val_if_fail (checker != NULL, NULL);
  g_return_val_if_fail (word != NULL, NULL);
  g_return_val_if_fail (word_length >= -1, NULL);

  if (word_length == -1)
    word_length = strlen (word);

  if (strncmp (word, "punchness", word_length) == 0)
    suggestions = g_slist_prepend (suggestions,
                                   g_strdup ("punchiness"));

  return suggestions;
}
