/* BEGIN REFERENCES GLIB */

let oop_gobj_refs = document.getElementsByClassName("oop-gobj-refs");

if( oop_gobj_refs.length > 0 ) {

    const chpt_oop_gobj = 4;
    let ref_oop_gobj = undefined;
    let i_oop_gobj = 0;
    let enum_oop_gobj = 0;

    /* BEGIN LISTING */

    enum_oop_gobj = 0;
    
    enum_oop_gobj += 1
    ref_oop_gobj = document.getElementsByClassName("oop-gobject-connect-to-notify");
    for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
        ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobject/sig-prop/prop.html#oop-gobject-connect-to-notify\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
    }

    /* END LISTING */
    

    /* BEGIN FIGURES */

    // enum_oop_gobj = 0;

    // enum_oop_gobj += 1
    // ref_oop_gobj = document.getElementsByClassName("glib-event-loop");
    // for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
    //     ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../glib/sect/main-loop.html#glib-event-loop\">Figura " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
    // }

    /* END FIGURES */
    
}

/* END REFERENCES GLIB */