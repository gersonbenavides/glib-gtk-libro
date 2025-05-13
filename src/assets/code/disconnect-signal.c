#include <glib-object.h>

typedef struct _MyTextView MyTextView;

struct _MyTextView
{
  GspellChecker *spell_checker;
  gulong word_added_to_personal_handler_id;
};

static void
word_added_to_personal_cb (GspellChecker *spell_checker,
                           const gchar   *word,
                           gpointer       user_data)
{
  MyTextView *text_view = user_data;

  g_message ("La palabra '%s' se ha agregado al diccionario personal "
             "del usuario. text_view=%p se actualizara en consecuencia.",
             word,
             text_view);
}

MyTextView *
my_text_view_new (GspellChecker *spell_checker)
{
  MyTextView *text_view;

  g_return_val_if_fail (GSPELL_IS_CHECKER (spell_checker), NULL);

  text_view = g_new0 (MyTextView, 1);

  /* Almacenamos el GObject de spell_checker en la variable
   * de instancia, por lo que aumentamos el recuento de referencias
   * para asegurarnos de que el corrector ortografico permanece activo
   * durante la vida util de la text_view.
   *
   * Tenga en cuenta que el corrector ortografico se proporciona de
   * forma externa, por lo que el corrector ortografico puede vivir mas
   * tiempo que text_view, de ahi la necesidad de desconectar la señal
   * en my_text_view_free().
   */
  text_view->spell_checker = g_object_ref (spell_checker);

  text_view->word_added_to_personal_handler_id =
    g_signal_connect (spell_checker,
                      "word-added-to-personal",
                      G_CALLBACK (word_added_to_personal_cb),
                      text_view);

  return text_view;
}

void
my_text_view_free (MyTextView *text_view)
{
  if (text_view == NULL)
    return;

  if (text_view->spell_checker != NULL &&
      text_view->word_added_to_personal_handler_id != 0)
    {
      g_signal_handler_disconnect (text_view->spell_checker,
                                   text_view->word_added_to_personal_handler_id);

      /* Aqui no es necesario restablecer el valor a 0 porque
       * text_view de todos modos se liberara, es solo para tener
       * un ejemplo mas completo.
       */
      text_view->word_added_to_personal_handler_id = 0;
    }

  /* El equivalente de:
   * if (text_view->spell_checker != NULL)
   * {
   *   g_object_unref (text_view->spell_checker);
   *   text_view->spell_checker = NULL;
   * }
   *
   * Despues de disminuir el recuento de referencias, spell_checker
   * aun puede estar activo si otra parte del programa todavia
   * hace referencia al mismo corrector ortografico.
   */
  g_clear_object (&text_view->spell_checker);

  g_free (text_view);
}
