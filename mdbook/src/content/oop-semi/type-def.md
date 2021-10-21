# Definición de tipo

El tipo `MyappSpellChecker` se define de la siguiente manera:

```c
typedef struct _MyappSpellChecker MyappSpellChecker;
```

La `struct _MyappSpellChecker` se declarará en el archivo `myapp-spell-checker.c`. Cuando usa `MyappSpellChecker` en otro archivo, no debería necesitar saber qué contiene `struct`, debería usar las funciones públicas de la clase en su lugar. La excepción a la mejor práctica de OOP es cuando llamar a una función sería un problema de rendimiento, por ejemplo, para estructuras de datos de bajo nivel utilizadas para gráficos por computadora (coordenadas, rectángulos,…). Pero recuerde: *la optimización prematura es la raíz de todos los males* (Donald Knuth).