/* BEGIN REFERENCES INTRO */

let intro_refs = document.getElementsByClassName("intro-refs");

if( intro_refs.length > 0 ) {

	const chpt_intro = 1;
	let ref_intro = undefined;
	let i_intro = 0;
	let enum_intro = 0;

	/* BEGIN REFS */
	enum_intro = 0;

	enum_intro += 1
	ref_intro = document.getElementsByClassName("fig-glib-struct-001");
	for( i_intro = 0; i_intro < ref_intro.length; i_intro++ ) {
		ref_intro[i_intro].innerHTML = "<a href=\"../../intro/sect/glib-gtk.html#fig-glib-struct-001\">Figura " + chpt_intro + "." + enum_intro + "</a>";
	}
	/* END REFS */
}

/* END REFERENCES INTRO */
