# Evitar ciclos de referencia con referencias débiles

Si el objeto A hace referencia al objeto B y el objeto B hace referencia al objeto A, hay un ciclo de referencia y los dos objetos nunca se liberarán. Para evitar ese problema, existe el concepto de referencias "débiles". Al llamar a `g_object_ref()`, es una referencia "sólida". Entonces, en una dirección hay una referencia fuerte, y en la otra dirección debe haber una referencia débil (o ninguna referencia).

\begin{figure}
  \begin{center}
    \includegraphics[scale=0.75]{assets/img/weak-ref.pdf}
    \caption{Using a weak reference to break the reference cycle between A and B.}
    \label{oop-gobject-weak-ref-schema}
  \end{center}
\end{figure}

En la Figura~\ref{oop-gobject-weak-ref-schema} podemos ver que el objeto A tiene una fuerte referencia al objeto B, y el objeto B tiene una débil referencia al objeto A.

Se puede crear una referencia débil con `g_object_add_weak_pointer()` o `g_object_weak_ref()`. Al igual que con las referencias fuertes, es importante liberar la referencia cuando ya no se necesite, generalmente en el destructor de clases. Una referencia débil debe eliminarse con `g_object_remove_weak_pointer()` o `g_object_weak_unref()`. Entonces, en la Figura~\ref{oop-gobject-weak-ref-schema}, el destructor de la clase B debe eliminar la referencia débil si aún no lo ha hecho.
