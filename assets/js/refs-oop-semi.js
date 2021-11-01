/* BEGIN REFERENCES OOP */

let oop_semi_refs = document.getElementsByClassName("oop-semi-refs");

if( oop_semi_refs.length > 0 ) {

    const chpt_oop_semi = 3;
    let ref_oop_semi = undefined;
    let i_oop_semi = 0;

    /* BEGIN LISTING */

    let lst_oop_semi = 0;

    lst_oop_semi += 1
    ref_glib = document.getElementsByClassName("oop-semi-spell-checker-h");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../oop-semi/hdr-ex/hdr-ex.html#oop-semi-spell-checker-h\">Listado " + chpt_oop_semi + "." + lst_oop_semi + "</a>";
    }

    lst_oop_semi += 1
    ref_glib = document.getElementsByClassName("oop-semi-spell-checker-c");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../oop-semi/c-file/c-file.html#oop-semi-spell-checker-c\">Listado " + chpt_oop_semi + "." + lst_oop_semi + "</a>";
    }

    /* END LISTING */
}

/* END REFERENCES OOP */
