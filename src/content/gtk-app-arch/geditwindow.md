# GeditWindow

`GeditWindow` es una subclase de `GtkApplicationWindow`. Y no lo vemos en el esquema, pero `GtkApplicationWindow` es una subclase de `GtkWindow`, que es un widget de nivel superior. Un widget de nivel superior no puede incluirse en otro widget. Una `GtkApplicationWindow` está contenida en una `GtkApplication`, pero `GtkApplication` no es una subclase de `GtkWidget`.

En el esquema, la notación "<span class="text-monospace">1</span>" y "<span class="text-monospace">1..*</span>" significa que un objeto `GeditApp` *contiene* uno o varios `GeditWindow` objetos, y que una `GeditWindow` está contenida exactamente en una `GeditApp` (una `GeditWindow` no puede estar contenida en varios objetos `GeditApp`, de todos modos solo hay una instancia de `GeditApp` por proceso).

`GeditWindow` es responsable de crear la interfaz de usuario principal, creando otros widgets y ensamblándolos en un contenedor `GtkGrid`, por ejemplo. Otra cosa que hace `GeditWindow` es implementar las `GActions` que tienen un efecto solo en la ventana actual, por ejemplo, una acción para cerrar la ventana o guardar el documento actual. Al implementar una `GAction`, `GeditWindow` puede, por supuesto, delegar la mayor parte de su trabajo a otras clases contenidas en `GeditWindow`.

En la parte superior de la ventana principal de una aplicación, generalmente hay una `GtkHeaderBar`, que muestra el título de la ventana, algunos botones y un menú de "hamburguesa". Alternativamente, una aplicación puede tener una barra de menú y una barra de herramientas tradicionales.

Además de la barra de encabezado, `GeditWindow` crea un widget `GeditStatusbar` y lo agrega al final de la ventana. También crea dos `GeditPanels`, uno en el lado izquierdo de la ventana y el otro en la parte inferior, encima de la `GeditStatusbar`. Cada panel puede contener varios elementos. Por ejemplo, el panel lateral contiene un explorador de archivos integrado y el panel inferior puede contener una terminal, entre otras cosas.

> **📌 Nota:** El código gedit actual en realidad ya no contiene una clase `GeditPanel`, pero fue el caso en una versión anterior. Se agregó `GeditPanel` al diagrama para mostrar una posible implementación de paneles en una aplicación. Si su aplicación contiene solo un elemento en un panel, no es necesario tener una clase `Panel`, puede agregar directamente el elemento a la ventana.

`GeditWindow` también crea un `GeditNotebook`, la parte principal de la ventana.
