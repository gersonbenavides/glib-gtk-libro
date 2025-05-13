# Señales y propiedades

Una clase GObject puede emitir señales. Con el bucle de eventos principal GLib (explicado anteriormente en la sección <span class="ch-glib-main-loop">El bucle del evento principal</span>, esta es la base para la programación dirigida por eventos. Un ejemplo de señal es cuando el usuario hace clic en un botón. La aplicación conecta una función de devolución de llamada a la señal para realizar la acción deseada cuando ocurre el evento.

Otro concepto de GObject son las *propiedades*, que está relacionado con las señales. Una propiedad es básicamente una variable de instancia coronada con una señal de `"notify"` que se emite cuando cambia su valor. Un buen ejemplo de una propiedad es el estado de un botón de verificación, es decir, un valor booleano que describe si el botón está actualmente marcado o no. Cuando el estado cambia, se envía la señal `"notify"`.

Para crear sus propias señales o propiedades, se debe crear una subclase GObject. Como se explicó en la introducción de este capítulo, esto está más allá del alcance de este libro, pero debe tener en cuenta que, por supuesto, es posible y recomendable crear sus propias señales o propiedades. De hecho, crear una señal o propiedad de GObject es una buena manera de implementar el patrón de diseño Observer <span class="design-patterns-book"></span>; es decir, uno o varios objetos *observando* cambios de estado de otro objeto, conectando devoluciones de llamada de función. El objeto que *emite* la señal no sabe qué objetos *reciben* la señal. GObject solo realiza un seguimiento de la lista de devoluciones de llamada para llamar. Entonces, agregar una señal permite desacoplar clases.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-ch"></div>
<div class="biblio-refs"></div>