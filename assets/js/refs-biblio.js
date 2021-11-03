/* BEGIN REFERENCES BIBLIO */

let biblio_refs = document.getElementsByClassName("biblio-refs");

if( biblio_refs.length > 0 ) {

    let i_biblio = 0;
    let ref_biblio = undefined;

    /* BEGIN REFERENCES */

    let bib_biblio = 0;    

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("k-r-book");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#k-r-book\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    let oop_book = document.getElementsByClassName("oop-book");
    for( i_biblio = 0; i_biblio < oop_book.length; i_biblio++ ) {
        oop_book[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#oop-book\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    let design_patterns_book = document.getElementsByClassName("design-patterns-book");
    for( i_biblio = 0; i_biblio < design_patterns_book.length; i_biblio++ ) {
        design_patterns_book[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#design-patterns-book\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    let algo_book = document.getElementsByClassName("algo-book");
    for( i_biblio = 0; i_biblio < algo_book.length; i_biblio++ ) {
        algo_book[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#algo-book\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    let unix_impatient = document.getElementsByClassName("unix-impatient");
    for( i_biblio = 0; i_biblio < unix_impatient.length; i_biblio++ ) {
        unix_impatient[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#unix-impatient\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    let pro_git = document.getElementsByClassName("pro-git");
    for( i_biblio = 0; i_biblio < pro_git.length; i_biblio++ ) {
        pro_git[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#pro-git\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("autotools");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#autotools\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("code-complete");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#code-complete\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("gtk-doc");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#gtk-doc\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("gobject-introspection");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#gobject-introspection\">[" + bib_biblio + "]</a>";
    }

    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("gobject-introspection");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#gobject-introspection\">[" + bib_biblio + "]</a>";
    }
    
    bib_biblio += 1;
    ref_biblio = document.getElementsByClassName("gnome-programming-guidelines");
    for( i_biblio = 0; i_biblio < ref_biblio.length; i_biblio++ ) {
        ref_biblio[i_biblio].innerHTML = "<a href=\"../../book/struct/biblio.html#gnome-programming-guidelines\">[" + bib_biblio + "]</a>";
    }

    /* END REFERENCES */
}

/* END REFERENCES INTRO */
