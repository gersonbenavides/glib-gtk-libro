# Linux

Por la gran cantidad de distribuciones que posee GNU/Linux, explicar el proceso de instalación en todas se sale de los alcances de este texto, aun así tenga en cuenta que el nombre de los paquetes y el método de instalación tiende a ser parecido en cada una de ellas.

## Compilador y utilidades

* **Fedora**

```console
$ sudo dnf groupinstall "Development Tools"
```

* **Ubuntu**

```console
$ sudo apt install build-essential
```

## GTK/GLib

* **Fedora**

```console
$ sudo dnf install glib2-devel gtk4 gtk4-devel
```

* **Ubuntu**

```console
$ sudo apt install libglib2.0-dev libgtk-4-1 libgtk-4-dev
```

## Flatpak

Si desarrolla en Linux, hacer uso de Flatpak es la mejor opción, ya que su flujo de trabajo se ubicara en contenedores, incluidas todas las dependencias. Esto le permitirá publicar su aplicación en múltiples distribuciones con un solo paquete. Para verificar si Flatpak esta instalado en su sistema, escriba en una terminal:

```console
$ flatpak --version
```

Si recibe como respuesta la versión de Flatpak ignore esta instalación, de lo contrario puede consultar este sitio web para ver si es necesario realizar algún paso extra en su distribución.

<https://flatpak.org/setup/>

## Editor de texto o IDE

Si no esta familiarizado con editores como Vim/Neovim o Emacs puede ser una buena idea iniciar con los siguientes editores:

### GNOME Builder

El IDE de desarrollo de GNOME, le brindara algunas ventajas gracias a su integración nativa al entorno de desarrollo de aplicaciones GTK/GLib, permitiéndole por ejemplo descargar las dependencias de compilación con solo presionar ejecutar el proyecto. La instalación la puede hacer escribiendo.

```console
$ flatpak install flathub org.gnome.Builder
```

### Visual Studio Code

Quizás el editor de texto mas popular para el momento de escribir este libro, desarrollado de la mano de Mirosoft. Posee múltiples extensiones que le permitirán trabajar con C fácilmente. La instalación la puede hacer escribiendo.

```console
$ flatpak install flathub com.visualstudio.code
```