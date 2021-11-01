# Propiedades

Si ha mirado la referencia de la API GTK o GIO, debe haber notado que algunas clases de GObject tienen una o más *propiedades*. Una propiedad es como una variable de instancia, también llamada "attribute", pero es diferente en el contexto de GObject porque tiene propiedades interesantes adicionales (Pun intencionado).

Como se dijo anteriormente al comienzo de la sección <span class="ch-oop-gobject-sig-prop"></span>, un buen ejemplo de una propiedad es el estado de un botón de verificación, es decir, un valor booleano que describe si el botón está actualmente marcado o no. Si ya conoce un poco de GTK, es posible que haya descubierto que hay un botón de verificación disponible con el widget `GtkCheckButton`. Pero había una pequeña trampa si quería encontrar la propiedad de la que estaba hablando, porque la propiedad está implementada en la clase padre `GtkToggleButton`: la propiedad `GtkToggleButton:active`

> **📌 Nota:** De la misma manera como las señales se documentan con GTK-Doc como "`ClassName::signal-name`", las propiedades se documentan como "`ClassName:property-name`".

## La señal `notify`

El atributo principal (Pun también intencionado) de una propiedad (además de representar un valor) es que la clase GObject emite la señal `GObject::notify` cuando cambia el valor de una propiedad.

Hay un concepto de señales GObject que aún no se ha explicado y se usa con la señal `GObject::notify`: cuando se emite una señal, se puede proporcionar un *detail*. En el caso de la señal de notificación, el detalle es el nombre de la propiedad cuyo valor ha cambiado. Dado que solo hay una señal para todas las propiedades, gracias al *detail* es posible conectar una devolución de llamada para recibir una notificación solo cuando una determinada propiedad haya cambiado. Si el *detail* no se proporciona al conectar la devolución de llamada, la devolución de llamada se llamará cuando *cualquiera* de las propiedades del objeto cambie, lo que generalmente no es lo que se desea.

Será más claro con un ejemplo. El <span class="oop-gobject-connect-to-notify">Listado</span> muestra cómo conectarse a la señal de notificación. Tenga en cuenta que en lugar de conectarse a la señal detallada `"notify::active"`, en realidad es más conveniente utilizar la señal `GtkToggleButton::toggled`. Hay mejores casos de uso en el mundo real en los que es necesario conectarse a la señal de notificación, pero al menos el <span class="oop-gobject-connect-to-notify">Listado</span> es, con suerte, comprensible con solo un conocimiento limitado de GTK (y si mira la documentación en Devhelp en paralelo).

<a id="oop-gobject-connect-to-notify"></a>

```c
/* If you look at the notify signal documentation, the first parameter
 * has the type GObject, not GtkCheckButton. Since GtkCheckButton is a
 * sub-class of GObject, the C language allows to write GtkCheckButton
 * directly.
 */
static void
check_button_notify_cb (GtkCheckButton *check_button,
                        GParamSpec     *pspec,
                        gpointer        user_data)
{
  /* Called each time that any property of check_button changes. */
}

static void
check_button_notify_active_cb (GtkCheckButton *check_button,
                               GParamSpec     *pspec,
                               gpointer        user_data)
{
  MyWindow *window = MY_WINDOW (user_data);
  gboolean active;

  active = gtk_toggle_button_get_active (GTK_TOGGLE_BUTTON (check_button));
  gtk_widget_set_visible (window->side_panel, active);
}

static GtkWidget *
create_check_button (MyWindow *window)
{
  GtkWidget *check_button;

  check_button = gtk_check_button_new_with_label ("Show side panel");

  /* Connect without the detail. */
  g_signal_connect (check_button,
                    "notify",
                    G_CALLBACK (check_button_notify_cb),
                    NULL);

  /* Connect with the detail, to be notified only when
   * the GtkToggleButton:active property changes.
   */
  g_signal_connect (check_button,
                    "notify::active",
                    G_CALLBACK (check_button_notify_active_cb),
                    window);

  return check_button;
}
```

<div class="caption">

<p><span class="oop-gobject-connect-to-notify">Listado</span>: Conexión a la señal de notificación para escuchar cambios en la propiedad.</p>

</div>

## Vinculaciones de propiedad

Otro aspecto útil de las propiedades es que dos propiedades se pueden vincular fácilmente: cuando una propiedad cambia, la otra se actualiza para tener el mismo valor. Lo mismo se puede lograr con la señal `"notify"`, pero existen funciones de nivel superior.

Se pueden vincular dos propiedades de varias formas con una de las funciones `g_object_bind_property*()`. El <span class="oop-gobject-binding-properties">Listado</span> muestra una implementación más simple del <span class="oop-gobject-connect-to-notify">Listado</span>; el código es equivalente, pero usa la función `g_object_bind_property()`.

<a id="oop-gobject-binding-properties"></a>

```c
static GtkWidget *
create_check_button (MyWindow *window)
{
  GtkWidget *check_button;

  check_button = gtk_check_button_new_with_label ("Show side panel");

  /* When the GtkToggleButton:active property of check_button changes,
   * the GtkWidget:visible property of window->side_panel is updated to
   * have the same boolean value.
   *
   * It would be useful to add G_BINDING_SYNC_CREATE to the flags, but
   * in that case the code would not be equivalent to the previous
   * code Listing.
   */
  g_object_bind_property (check_button, "active",
                          window->side_panel, "visible",
                          G_BINDING_DEFAULT);

  return check_button;
}
```

<div class="caption">

<p><span class="oop-gobject-binding-properties">Listado</span>: Vinculando dos propiedades.</p>

</div>

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-ch"></div>

<div class="oop-gobj-refs"></div>