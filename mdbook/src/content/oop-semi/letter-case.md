# ¿Minúsculas, Mayúsculas o CamelCase?

El correcto nombramiento de un símbolo (ya sea una variable, objeto, etc) es importante en el desarrollo del software, pues permite entender el contexto del código de una manera mucho más simple en su lectura.

Dependiendo del tipo de símbolo, su nombre puede poseer un estilo diferente, como estar en mayúsculas, minúsculas o CamelCase. Es importante denotar que además del estilo de escritura, un buen nombre debe poseer sentido semántico y ser expresivo, de manera que otro programador entienda lo que es y lo que hace fácilmente. La convención en el mundo GLib es:

* Las **funciones**, **variables** y **campos struct** deben usar el estilo *Snake case*, también conocido como  `lower_case_with_underscores`, el cual consiste en la escritura solo con minúsculas y con guiones bajos en vez de espacios, por ejemplo: `set_user`, `get_user`. Las funciones deben representar acciones, por lo tanto como buena practica construya el nombre con un verbo que represente la acción seguido de un sustantivo.

* Las **estructuras**, **tipos** y **objetos** deben usar el tipo *CamelCase*, es decir `CamelCaseWithoutUnderscores`, donde la escritura no posee espacios y el inicio de cada palabra se capitaliza con mayúsculas, por ejemplo: `UserProfile`.

* Las **macros** y las **constantes** deben usar `UPPER_CASE_WITH_UNDERSCORES`, ya sea para un valor `#define` o `enum`.
    
* Todos los símbolos deben tener como prefijo una versión corta (de 2 a 4 caracteres) del espacio de nombres. Esto se acorta simplemente para facilitar la escritura, pero aún debe ser único.
    
* Todos los métodos de una clase también deben tener el prefijo del nombre de la clase.
    
* Evite usar abreviaciones innecesarias y nombres no pronunciables, de manera que se priorice el fácil entendimiento del código.
    
* Escriba su código en el idioma inglés si busca que su proyecto tenga un desarrollo comunitario.