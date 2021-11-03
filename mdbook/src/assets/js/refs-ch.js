/* BEGIN REFERENCES CH */

let refs_ch = document.getElementsByClassName("refs-ch");

if( refs_ch.length > 0 ) {

    let ch = 0;
    let i_ch = 0;

    /* BEGIN REFS */
    let ch_title = document.getElementsByClassName("ch-title");
    for( i_ch = 0; i_ch < ch_title.length; i_ch++ ) {
        ch_title[i_ch].innerHTML = "<a href=\"../../book/struct/title.html\">Capítulo " + ch + "</a>";
    }
        ch_title = document.getElementsByClassName("ch-title-lic");
        for( i_ch = 0; i_ch < ch_title.length; i_ch++ ) {
            ch_title[i_ch].innerHTML = "<a href=\"../../book/struct/title#title-lic.html\">Licencia</a>";
        }

    ch += 1
    let ch_intro = document.getElementsByClassName("ch-intro");
    for( i_ch = 0; i_ch < ch_intro.length; i_ch++ ) {
        ch_intro[i_ch].innerHTML = "<a href=\"../../intro/chpt/intro.html\">Capítulo " + ch + "</a>";
    }
        ch_intro = document.getElementsByClassName("ch-intro-why-and-when-c");
        for( i_ch = 0; i_ch < ch_intro.length; i_ch++ ) {
            ch_intro[i_ch].innerHTML = "<a href=\"../../intro/chpt/why-when-c.html\">¿Por qué y cuándo se usa el lenguaje C?</a>";
        }

            ch_intro = document.getElementsByClassName("ch-intro-separate-backend");
            for( i_ch = 0; i_ch < ch_intro.length; i_ch++ ) {
                ch_intro[i_ch].innerHTML = "<a href=\"../../intro/chpt/sep-backend.html\">Separación de backend del frontend</a>";
            }

        let ch_learning_path = document.getElementsByClassName("ch-intro-learning-path");
        for( i_ch = 0; i_ch < ch_learning_path.length; i_ch++ ) {
            ch_learning_path[i_ch].innerHTML = "<a href=\"../../intro/sect/lrn-path.html\">Ruta de aprendizaje</a>";
        }
        
        ch_intro = document.getElementsByClassName("ch-intro-dev-env");
        for( i_ch = 0; i_ch < ch_intro.length; i_ch++ ) {
            ch_intro[i_ch].innerHTML = "<a href=\"../../intro/sect/dev-env.html\">El entorno de desarrollo</a>";
        }

    ch += 1
    let ch_glib = document.getElementsByClassName("ch-glib");
    for( i_ch = 0; i_ch < ch_glib.length; i_ch++ ) {
        ch_glib[i_ch].innerHTML = "<a href=\"../../glib/chpt/glib.html\">Capítulo " + ch + "</a>";
    }
        
        ch_glib = document.getElementsByClassName("ch-glib-dbg-macros");
        for( i_ch = 0; i_ch < ch_glib.length; i_ch++ ) {
            ch_glib[i_ch].innerHTML = "<a href=\"../../glib/basics/dbg-macros.html\">Macros de depuración</a>";
        }

        ch_glib = document.getElementsByClassName("ch-glib-main-loop");
        for( i_ch = 0; i_ch < ch_glib.length; i_ch++ ) {
            ch_glib[i_ch].innerHTML = "<a href=\"../../glib/basics/ch-glib-main-loop.html\">El bucle del evento principal</a>";
        }

    
    ch += 1
    let ch_oop_semi = document.getElementsByClassName("ch-oop-semi");
    for( i_ch = 0; i_ch < ch_oop_semi.length; i_ch++ ) {
        ch_oop_semi[i_ch].innerHTML = "<a href=\"../../oop-semi/chpt/oop-semi.html\">Capítulo " + ch + "</a>";
    }
        
        ch_oop_semi = document.getElementsByClassName("ch-oop-semi-header-include");
        for( i_ch = 0; i_ch < ch_oop_semi.length; i_ch++ ) {
            ch_oop_semi[i_ch].innerHTML = "<a href=\"../../oop-semi/hdr-ex/incl.html\">\#include</a>";
        }

    ch += 1
    let ch_oop_gobject = document.getElementsByClassName("ch-oop-gobject");
    for( i_ch = 0; i_ch < ch_oop_gobject.length; i_ch++ ) {
        ch_oop_gobject[i_ch].innerHTML = "<a href=\"../../oop-gobject/chpt/oop-gobj.html\">Capítulo " + ch + "</a>";
    }

        ch_oop_gobject = document.getElementsByClassName("ch-oop-gobj-inherit");
        for( i_ch = 0; i_ch < ch_oop_gobject.length; i_ch++ ) {
            ch_oop_gobject[i_ch].innerHTML = "<a href=\"../../oop-gobj/sect/inherit.html\">Herencia</a>";
        }  

        ch_oop_gobject = document.getElementsByClassName("ch-oop-gobject-sig-prop");
        for( i_ch = 0; i_ch < ch_oop_gobject.length; i_ch++ ) {
            ch_oop_gobject[i_ch].innerHTML = "<a href=\"../../oop-gobj/sig-prop/sig-prop.html\">Señales y propiedades</a>";
        }  

    /* END REFS */
}

/* END REFERENCES CH */

