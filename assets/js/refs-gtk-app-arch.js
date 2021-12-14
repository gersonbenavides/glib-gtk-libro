/* BEGIN REFERENCES GLIB */

let gtk_app_arch_refs = document.getElementsByClassName("gtk-app-arch-refs");

if( gtk_app_arch_refs.length > 0 ) {

	const chpt_gtk_app_arch = 5;
	let ref_gtk_app_arch = undefined;
	let i_gtk_app_arch = 0;
	let enum_gtk_app_arch = 0;

	/* BEGIN LISTING */

	enum_gtk_app_arch = 0;
	
	enum_gtk_app_arch += 1
	ref_gtk_app_arch = document.getElementsByClassName("oop-gobject-mem-management-normal");
	for( i_gtk_app_arch = 0; i_gtk_app_arch < ref_gtk_app_arch.length; i_gtk_app_arch++ ) {
		ref_gtk_app_arch[i_gtk_app_arch].innerHTML = "<a href=\"../../gtk-app-arch/ref-cnt/float-ref.html#oop-gobject-mem-management-normal\">Listado " + chpt_gtk_app_arch + "." + enum_gtk_app_arch + "</a>";
	}

	/* END LISTING */
	

	/* BEGIN FIGURES */

	enum_gtk_app_arch = 0;

	enum_gtk_app_arch += 1
	ref_gtk_app_arch = document.getElementsByClassName("fig-gedit-architecture");
	for( i_gtk_app_arch = 0; i_gtk_app_arch < ref_gtk_app_arch.length; i_gtk_app_arch++ ) {
		ref_gtk_app_arch[i_gtk_app_arch].innerHTML = "<a href=\"../../gtk-app-arch/chpt/gtk-app-arch.html#fig-gedit-architecture\">Figura " + chpt_gtk_app_arch + "." + enum_gtk_app_arch + "</a>";
	}

	/* END FIGURES */
	
}

/* END REFERENCES GLIB */