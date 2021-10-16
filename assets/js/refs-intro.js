/* BEGIN REFERENCES INTRO */

const ch_intro = 1;
let lst_intro = 0;
let i_intro = 0;

lst_intro += 1;
let k_r_book = document.getElementsByClassName("k-r-book");
for( i_intro = 0; i_intro < k_r_book.length; i_intro++ ) {
    k_r_book[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#k-r-book\">[" + lst_intro + "]</a>";
}

lst_intro += 1;
let oop_book = document.getElementsByClassName("oop-book");
for( i_intro = 0; i_intro < oop_book.length; i_intro++ ) {
    oop_book[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#oop-book\">[" + lst_intro + "]</a>";
}

lst_intro += 1;
let design_patterns_book = document.getElementsByClassName("design-patterns-book");
for( i_intro = 0; i_intro < design_patterns_book.length; i_intro++ ) {
    design_patterns_book[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#design-patterns-book\">[" + lst_intro + "]</a>";
}

lst_intro += 1;
let algo_book = document.getElementsByClassName("algo-book");
for( i_intro = 0; i_intro < algo_book.length; i_intro++ ) {
    algo_book[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#algo-book\">[" + lst_intro + "]</a>";
}

lst_intro += 1;
let unix_impatient = document.getElementsByClassName("unix-impatient");
for( i_intro = 0; i_intro < unix_impatient.length; i_intro++ ) {
    unix_impatient[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#unix-impatient\">[" + lst_intro + "]</a>";
}

lst_intro += 1;
let pro_git = document.getElementsByClassName("pro-git");
for( i_intro = 0; i_intro < pro_git.length; i_intro++ ) {
    pro_git[i_intro].innerHTML = "<a href=\"../00-intro/bibliography.html#pro-git\">[" + lst_intro + "]</a>";
}

/* END REFERENCES INTRO */