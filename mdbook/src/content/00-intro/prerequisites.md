# Prerrequisitos

Este libro asume que ya tiene algo de práctica en programación. A continuación, se muestra una lista de requisitos previos recomendados, con referencias de libros.

* Este texto supone que ya conoces el lenguaje C. El libro de referencia es ***The C Programming Language***, de Brian Kernighan y Dennis Ritchie <span class="k-r-book"></span>.

* La programación orientada a objetos (OOP) también es necesaria para aprender GObject. Debe estar familiarizado con conceptos como herencia, una interfaz, un método virtual o polimorfismo. Un buen libro, con más de sesenta pautas, es ***Object-Oriented Design Heuristics***, de Arthur Riel <span class="oop-book"></span>.

* Es útil haber leído un libro sobre estructuras de datos y algoritmos, pero puede aprenderlo en paralelo. Un libro recomendado es ***The Algorithm Design Manual***, de Steven Skiena <span class="algo-book"></span>.

* Si desea desarrollar su software en un sistema similar a Unix, otro requisito previo es saber cómo funciona Unix y estar familiarizado con la línea de comandos, un poco de scripts de shell y cómo escribir un Makefile. Un posible libro es ***UNIX for the Impatient***, de Paul Abrahams <span class="unix-impatient"></span>.

* No es estrictamente necesario, pero se recomienda encarecidamente utilizar un sistema de control de versiones como Git. Un buen libro es ***Pro Git***, de Scott Chacon <span class="pro-git"></span>.

<script>
/* Asignacion de referencias en todo la pagina */

let i = 0;

let ref01 = document.getElementsByClassName("k-r-book");
for( i = 0; i < ref01.length; i++ ) {
    ref01[i].innerHTML = "<a href=\"./bibliography.html#k-r-book\">[1]</a>";
}

let ref02 = document.getElementsByClassName("oop-book");
for( i = 0; i < ref02.length; i++ ) {
    ref02[i].innerHTML = "<a href=\"./bibliography.html#oop-book\">[2]</a>";
}

let ref03 = document.getElementsByClassName("algo-book");
for( i = 0; i < ref03.length; i++ ) {
    ref03[i].innerHTML = "<a href=\"./bibliography.html#algo-book\">[4]</a>";
}

let ref04 = document.getElementsByClassName("unix-impatient");
for( i = 0; i < ref04.length; i++ ) {
    ref04[i].innerHTML = "<a href=\"./bibliography.html#unix-impatient\">[5]</a>";
}

let ref05 = document.getElementsByClassName("pro-git");
for( i = 0; i < ref05.length; i++ ) {
    ref05[i].innerHTML = "<a href=\"./bibliography.html#pro-git\">[6]</a>";
}

</script>