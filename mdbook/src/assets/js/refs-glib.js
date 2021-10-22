/* BEGIN REFERENCES GLIB */

let glib_refs = document.getElementsByClassName("glib-refs");

if( glib_refs.length > 0 ) {

    const chpt_glib = 2;
    let ref_glib = undefined;
    let i_glib = 0;

    /* BEGIN LISTING */

    let lst_glib = 0;
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-simplemacros");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/freq-macros.html#glib-simplemacros\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-pointerint");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/freq-macros.html#glib-pointerint\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-precondition");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/dbg-macros.html#glib-precondition\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-assertions");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/dbg-macros.html#glib-assertions\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-malloc-free");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/memory.html#glib-malloc-free\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-g_new");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/memory.html#glib-g_new\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strext");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strext\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strdup");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strdup\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strmanip");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strmanip\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strformats");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strformats\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strconcat");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strconcat\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-strvector");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/basics/str-handling.html#glib-strvector\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-gslist-cell");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-gslist-cell\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-listchanging");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-listchanging\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-listfree");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-listfree\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-listaccess");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-listaccess\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-listmanip");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-listmanip\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }
    
    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-listsorted");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/lists.html#glib-listsorted\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-treeconstruct");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-treeconstruct\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-treemanip");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-treemanip\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-treesize");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-treesize\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-treetraverse");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-treetraverse\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodecell");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodecell\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodeaccess");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodeaccess\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodenew");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodenew\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodebuild");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodebuild\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodeconv");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodeconv\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodedestroy");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodedestroy\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodeextrema");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodeextrema\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodeproperties");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodeproperties\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-nodeaccessors");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/trees.html#glib-nodeaccessors\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-hashnew");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/hash-tables.html#glib-hashnew\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-hashfuncs");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/hash-tables.html#glib-hashfuncs\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-hashmanip");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/data-struct/hash-tables.html#glib-hashmanip\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    lst_glib += 1
    ref_glib = document.getElementsByClassName("glib-idle-timeout");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/sect/main-loop.html#glib-idle-timeout\">Listado " + chpt_glib + "." + lst_glib + "</a>";
    }

    /* END LISTING */
    

    /* BEGIN FIGURES */

    let fig_glib = 0;

    fig_glib += 1
    ref_glib = document.getElementsByClassName("glib-event-loop");
    for( i_glib = 0; i_glib < ref_glib.length; i_glib++ ) {
        ref_glib[i_glib].innerHTML = "<a href=\"../../glib/sect/main-loop.html#glib-event-loop\">Figura " + chpt_glib + "." + fig_glib + "</a>";
    }

    /* END FIGURES */
    
}

/* END REFERENCES GLIB */
