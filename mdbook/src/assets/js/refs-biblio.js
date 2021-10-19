/* BEGIN REFERENCES BIBLIO */

let refs_biblio = document.getElementsByClassName("refs-biblio");

if( refs_biblio.length > 0 ) {

    let i_biblio = 0;

    /* BEGIN REFERENCES */

    let ref_biblio = 0;    

    ref_biblio += 1;
    let k_r_book = document.getElementsByClassName("k-r-book");
    for( i_biblio = 0; i_biblio < k_r_book.length; i_biblio++ ) {
        k_r_book[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#k-r-book\">[" + ref_biblio + "]</a>";
    }

    ref_biblio += 1;
    let oop_book = document.getElementsByClassName("oop-book");
    for( i_biblio = 0; i_biblio < oop_book.length; i_biblio++ ) {
        oop_book[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#oop-book\">[" + ref_biblio + "]</a>";
    }

    ref_biblio += 1;
    let design_patterns_book = document.getElementsByClassName("design-patterns-book");
    for( i_biblio = 0; i_biblio < design_patterns_book.length; i_biblio++ ) {
        design_patterns_book[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#design-patterns-book\">[" + ref_biblio + "]</a>";
    }

    ref_biblio += 1;
    let algo_book = document.getElementsByClassName("algo-book");
    for( i_biblio = 0; i_biblio < algo_book.length; i_biblio++ ) {
        algo_book[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#algo-book\">[" + ref_biblio + "]</a>";
    }

    ref_biblio += 1;
    let unix_impatient = document.getElementsByClassName("unix-impatient");
    for( i_biblio = 0; i_biblio < unix_impatient.length; i_biblio++ ) {
        unix_impatient[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#unix-impatient\">[" + ref_biblio + "]</a>";
    }

    ref_biblio += 1;
    let pro_git = document.getElementsByClassName("pro-git");
    for( i_biblio = 0; i_biblio < pro_git.length; i_biblio++ ) {
        pro_git[i_biblio].innerHTML = "<a href=\"../intro/biblio.html#pro-git\">[" + ref_biblio + "]</a>";
    }

    /* END REFERENCES */
}

/* END REFERENCES INTRO */
