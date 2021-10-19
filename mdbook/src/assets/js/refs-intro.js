/* BEGIN REFERENCES INTRO */

let refs_intro = document.getElementsByClassName("refs-intro");

if( refs_intro.length > 0 ) {

    const ch_intro = 1;
    let i_intro = 0;

    /* BEGIN REFS */

    refs_intro += 1
    let intro_learning_path = document.getElementsByClassName("intro-learning-path");
    for( i_intro = 0; i_intro < intro_learning_path.length; i_intro++ ) {
        intro_learning_path[i_intro].innerHTML = "<a href=\"../intro/learning-path.html\">Ruta de aprendizaje</a>";
    }

    /* END REFS */
}

/* END REFERENCES INTRO */
