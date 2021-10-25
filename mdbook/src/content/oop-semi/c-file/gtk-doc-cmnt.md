# Comentarios de GTK-Doc

La API pública está documentada con comentarios GTK-Doc. Un comentario de GTK-Doc comienza con `/**`, con el nombre del símbolo a documentar en la siguiente línea. Cuando nos referimos a un símbolo, existe una sintaxis especial a utilizar dependiendo del tipo de símbolo:

* Un parámetro de función tiene el prefijo `@`.
* El *nombre* de una `estructura` o `enum` tiene el prefijo `#`.
* Una constante (por ejemplo, una `enum` *valor*) tiene el prefijo `%`.
* Una función tiene el sufijo `()`.

GTK-Doc puede analizar esos comentarios especiales y generar páginas HTML que luego pueden ser navegadas fácilmente por un navegador API como Devhelp. Pero los comentarios especialmente formateados en el código no son lo único que necesita GTK-Doc, también necesita integración con el sistema de compilación de su proyecto (por ejemplo, Autotools), junto con algunos otros archivos para enumerar las diferentes páginas, describe el estructura general con la lista de símbolos y, opcionalmente, proporciona contenido adicional escrito en formato DocBook XML. Estos archivos suelen estar presentes en el directorio `docs/reference/`.

Describir en detalle cómo integrar el soporte GTK-Doc en su código está más allá del alcance de este libro. Para eso, debe consultar el manual de GTK-Doc <span class="gtk-doc"></span>.

Cada biblioteca basada en GLib debe tener una documentación GTK-Doc. Pero también es útil escribir una documentación GTK-Doc para el código interno de una aplicación. Como se explica en la sección <span class="ch-intro-separate-backend"></span>, es una buena práctica separar el backend de una aplicación de su(s) frontend(s), y escribir el backend como una biblioteca interna o, más tarde, una biblioteca compartida. Como tal, se recomienda documentar la API pública del backend con GTK-Doc, incluso si sigue siendo una biblioteca interna vinculada estáticamente. Porque cuando el código base se vuelve más grande, es de gran ayuda (especialmente para los recién llegados) tener una descripción general de las clases disponibles y saber cómo usar una clase sin la necesidad de comprender su implementación.

<!-- Habilitacion del enumeramiento de referencias -->

<div class="ch-refs"></div>
<div class="biblio-refs"></div>