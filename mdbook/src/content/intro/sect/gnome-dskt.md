# El escritorio GNOME

Un proyecto importante para GLib y GTK es GNOME. GNOME, que también forma parte de GNU, es un entorno de escritorio libre iniciado en 1997 por Miguel de Icaza y Federico Mena-Quintero. GNOME hace un uso extensivo de GTK, y este último ahora es desarrollado principalmente por desarrolladores de GNOME.

"GNOME" es en realidad un acrónimo: GNU Network Object Model Environment.

> **📌 Nota:** Como con GTK, el nombre completo de GNOME rara vez se usa y no refleja la realidad actual.

Originalmente, el proyecto tenía la intención de crear un marco para objetos de aplicación, similar a las tecnologías OLE y COM de Microsoft. Sin embargo, el alcance del proyecto se expandió rápidamente; quedó claro se requería un trabajo preliminar sustancial antes de que la parte del nombre de "network object" pudiera convertirse en realidad. Las versiones antiguas de GNOME incluían una arquitectura de incrustación de objetos llamada Bonobo, y GNOME 1.0 incluía un ORB CORBA rápido y ligero llamado ORBit. Bonobo ha sido reemplazado por D-Bus un sistema de comunicación entre procesos.

GNOME tiene dos caras importantes. Desde la perspectiva del usuario, es un entorno de escritorio integrado y una suite de aplicaciones. Desde la perspectiva del programador, es un marco de desarrollo de aplicaciones (compuesto por numerosas bibliotecas útiles que se basan en GLib y GTK). Las aplicaciones
escritas con las bibliotecas de GNOME funcionan bien incluso si el usuario no está ejecutando el entorno de escritorio, pero se integran bien con el escritorio de GNOME si está disponible.

El entorno de escritorio incluye un "shell" para cambiar de tareas y ejecutar programas, un "centro de control" para la configuración, muchas aplicaciones como un administrador de archivos, un navegador web, un reproductor de películas, etc. Estos programas ocultan la línea de comandos tradicional de Unix detrás de una interfaz gráfica fácil de usar.

El marco de desarrollo de GNOME permite escribir aplicaciones interoperables, coherentes y fáciles de usar. Los diseñadores de sistemas de ventanas como X11 o Wayland tomaron la decisión deliberada de no imponer ninguna política de interfaz de usuario a los desarrolladores; GNOME agrega una "capa de política", creando una apariencia coherente. Las aplicaciones GNOME terminadas funcionan bien con el escritorio GNOME, pero también se pueden usar de forma "independiente" -- los usuarios solo necesitan instalar las bibliotecas compartidas de GNOME. Una aplicación GNOME no está vinculada a un sistema de ventanas específico, GTK proporciona backends para X Window System, Wayland, Mac OS X, Windows e incluso para un navegador web.

Los componentes de GNOME deben instalarse con las mismas versiones, junto con la versión de GTK y GLib lanzada al mismo tiempo; por ejemplo, es una mala idea ejecutar un demonio GNOME en la versión 41 con el centro de control en la versión 40. En el momento de escribir este artículo, las últimas versiones estables son: GLib 2.70, GTK 4.4 y GNOME 41, todas lanzadas en el segundo semestre de 2021.

Más información sobre GNOME: <https://www.gnome.org/>