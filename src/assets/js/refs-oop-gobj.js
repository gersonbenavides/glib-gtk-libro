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
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-mem-management-normal");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/ref-cnt/float-ref.html#oop-gobject-mem-management-normal\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-mem-management-floating");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/ref-cnt/float-ref.html#oop-gobject-mem-management-floating\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-gtkbutton-clicked");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/sig-prop/cnct-callb-sig.html#oop-gobject-gtkbutton-clicked\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-connect-to-signal");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/sig-prop/cnct-callb-sig.html#oop-gobject-connect-to-signal\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-disconnect-signal");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/sig-prop/disc-sig.html#oop-gobject-disconnect-signal\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-connect-to-notify");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/sig-prop/prop.html#oop-gobject-connect-to-notify\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-binding-properties");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/sig-prop/prop.html#oop-gobject-binding-properties\">Listado " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	/* END LISTING */
	

	/* BEGIN FIGURES */

	enum_oop_gobj = 0;

	enum_oop_gobj += 1
	ref_oop_gobj = document.getElementsByClassName("oop-gobject-weak-ref-schema");
	for( i_oop_gobj = 0; i_oop_gobj < ref_oop_gobj.length; i_oop_gobj++ ) {
		ref_oop_gobj[i_oop_gobj].innerHTML = "<a href=\"../../oop-gobj/ref-cnt/avoid-ref.html#oop-gobject-weak-ref-schema\">Figura " + chpt_oop_gobj + "." + enum_oop_gobj + "</a>";
	}

	/* END FIGURES */
	
}

/* END REFERENCES GLIB */