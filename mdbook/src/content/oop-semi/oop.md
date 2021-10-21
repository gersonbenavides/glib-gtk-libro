# Programación orientada a objetos en C

Ahora que está familiarizado con la biblioteca principal de GLib, ¿cuál es el siguiente paso? Como se explicó en la sección <span class="ch-intro-learning-path">Ruta de aprendizaje</span>, el seguimiento lógico es la programación orientada a objetos (OOP) en C y los conceptos básicos de GObject.

Cada widget GTK es una subclase de la clase base GObject. Entonces, conocer los conceptos básicos de GObject es importante para *usar* un widget GTK u otra utilidad basada en GObject, pero también para *crear* tus propias clases de GObject.

Es importante notar que aunque el lenguaje C no está orientado a objetos, es posible escribir código C "semi-orientado a objetos" fácilmente, sin GObject. Para fines de aprendizaje, con eso comienza esta parte. GObject es entonces más fácil de aprender. Lo que GObject agrega son más características como recuento de referencias, herencia, funciones virtuales, interfaces, señales y más.

Pero, ¿por qué seguir un estilo orientado a objetos en primer lugar? Un código orientado a objetos permite evitar variables globales. Y si ha leído algún tipo de guía de mejores prácticas de programación, sabe que *debería*, si es posible, evitar las variables globales.

> **📌 Nota:** Una variable global en C puede ser una variable `static` declarada en el parte superior de un archivo *.c, al que se puede acceder desde cualquier función en ese archivo *.c. Esto a veces es útil, pero debe evitarse si es posible. Hay otro tipo de variable global en C: una variable `extern` a la que se puede acceder desde cualquier archivo *.c. Este último es mucho peor que el primero.

Porque el uso de datos globales hace que el código sea más difícil de administrar y comprender, especialmente cuando un programa se vuelve más grande. También hace que el código sea más difícil de reutilizar. En cambio, es mejor dividir un programa en partes más pequeñas e independientes, de modo que pueda concentrarse solo en una parte del código a la vez.

Esta parte del libro consta de dos capítulos:

* <span class="ch-oop-semi">Programación semi-orientada a objetos en C</span>, que explica cómo escribir sus propias clases semi-OOP;

* <span class="ch-oop-gobject">Una suave introducción a GObject</span>, que explica los conceptos básicos de GObject.


<!-- Habilitacion del enumeramiento de referencias -->

<div class="refs-ch"></div>