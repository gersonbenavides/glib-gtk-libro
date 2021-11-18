# Separación de backend del frontend

Una buena práctica es separar la interfaz gráfica de usuario del resto de la aplicación. Por diversas razones, la interfaz gráfica de una aplicación tiende a ser una pieza de software excepcionalmente volátil y en constante cambio. Es el foco de la mayoría de las solicitudes de cambio de los usuarios. Es difícil planificar y ejecutar bien la primera vez; a menudo descubrirá que algún aspecto es desagradable de usar solo después de haberlo escrito. A veces es deseable tener varias interfaces de usuario diferentes, por ejemplo, una versión de línea de comandos o una interfaz basada en web.

En términos prácticos, esto significa que cualquier aplicación grande debe tener una separación radical entre sus diversos *frontends* o interfaces y el *backend*. El backend debe contener todas las "partes complejas": sus algoritmos y estructuras de datos, el trabajo real realizado por la aplicación. Piense en ello como un "modelo" abstracto que se muestra y manipula el usuario.

Cada interfaz debe ser una "vista" y un "controlador". Como una "vista", la interfaz debe anotar cualquier cambio en el backend y cambiar la pantalla en consecuencia. Como un "controlador", la interfaz debe permitir al usuario transmitir solicitudes de cambio al backend (define cómo las manipulaciones de la interfaz se traducen en cambios en el modelo).

Hay muchas formas de disciplinarse para mantener su aplicación separada. Un par de ideas útiles:

* Escriba el backend como una biblioteca. Al principio, la biblioteca puede ser interna a la aplicación y estar vinculada estáticamente, sin garantías de estabilidad API/ABI. Cuando el proyecto crezca, y si el código es útil para otros programas, puede convertir fácilmente su backend en una biblioteca compartida.
* Escriba al menos dos interfaces desde el principio; uno o ambos pueden ser prototipos feos, solo desea tener una idea de cómo estructurar el backend. Recuerde, las interfaces deben ser fáciles; el backend tiene las partes difíciles.

El lenguaje C es una buena opción para la parte de backend de una aplicación. Al utilizar GObject y GObject Introspection, su biblioteca estará disponible para otros proyectos escritos en varios lenguajes de programación. Por otro lado, una biblioteca de Python o JavaScript no se puede utilizar en otros lenguajes. Para las interfaces, un idioma de nivel superior puede ser más conveniente, dependiendo de los idiomas con los que ya domine.