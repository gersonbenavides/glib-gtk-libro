/* BEGIN REFERENCES CH */

let refs_ch = document.getElementsByClassName("refs-ch");

if( refs_ch.length > 0 ) {

    let ch = 0;
    let i_ch = 0;

    /* BEGIN REFS */

    ch += 1
    let ch_intro = document.getElementsByClassName("ch-intro");
    for( i_ch = 0; i_ch < ch_intro.length; i_ch++ ) {
        ch_intro[i_ch].innerHTML = "<a href=\"../../intro/chpt/intro.html\">Capítulo " + ch + "</a>";
    }

        let ch_learning_path = document.getElementsByClassName("ch-intro-learning-path");
        for( i_ch = 0; i_ch < ch_learning_path.length; i_ch++ ) {
            ch_learning_path[i_ch].innerHTML = "<a href=\"../../intro/sect/learning-path.html\">Ruta de aprendizaje</a>";
        }

    ch += 1
    let ch_glib = document.getElementsByClassName("ch-glib");
    for( i_ch = 0; i_ch < ch_glib.length; i_ch++ ) {
        ch_glib[i_ch].innerHTML = "<a href=\"../../glib/chpt/glib.html\">Capítulo " + ch + "</a>";
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
        ch_oop_gobject[i_ch].innerHTML = "<a href=\"../../oop-gobject/chpt/oop-gobject.html\">Capítulo " + ch + "</a>";
    }

    /* END REFS */
}

/* END REFERENCES CH */

