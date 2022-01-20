const SRC_CONTENTS_REFS_DATA = "../../../assets/json/refs-contents.json";
const SRC_BIBLIO_REFS_DATA = "../../../assets/json/refs-biblio.json";

const CHPTS_REFS_DATA = [
    {
        reference: "chpt-intro",
        source: "../../../assets/json/refs-intro.json"
    },
    {
        reference: "chpt-glib",
        source: "../../../assets/json/refs-glib.json"
    },
    {
        reference: "chpt-oop-semi",
        source: "../../../assets/json/refs-oop-semi.json"
    },
    {
        reference: "chpt-oop-gobj",
        source: "../../../assets/json/refs-oop-gobj.json"
    },
    {
        reference: "chpt-gtk-app-arch",
        source: "../../../assets/json/refs-gtk-app-arch.json"
    }
];

/**
 * @function                   addReferenceContent
 * @description                Sets the text of the references
 *                             within the website.
 * @param {string} className - Reference class name.
 * @param {string} source    - Reference website address.
 * @param {string} title     - Book section title.
 */
 const addReferenceBook = (className, source, title) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
    refs[i].innerHTML = ("<a href=\"" + source + "\">" +
        title + "</a>");
    }
}


/**
 * @function                   addReferenceChapter
 * @description                Sets the text of the references
 *                             within the website.
 * @param {string} className - Reference class name.
 * @param {string} source    - Reference website address.
 * @param {string} title     - Chapter or section title.
 * @param {int} chapter      - Chapter number.
 */
 const addReferenceChapter = (className, source, title, chapter) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
    refs[i].innerHTML = ("<a href=\"" + source + "\">" +
        title + " en el capítulo " + chapter + "</a>");
    }
}

/**
 * @function                     addReferenceBiblio
 * @description                  Sets the text of the references
 *                               within the website.
 * @param {string} className   - Reference class name.
 * @param {string} source      - Reference website address.
 * @param {string} enumeration - Book section title.
 */
 const addReferenceBiblio = (className, source, enumeration) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
    refs[i].innerHTML = ("<a href=\"" + source + "\">[" +
        enumeration + "]</a>");
    }
}


/**
 * @function                     addReferenceGeneral
 * @description                  Sets the text of the references
 *                               within the website.
 * @param {string} className   - Reference class name.
 * @param {string} source      - Reference website address.
 * @param {int} chapter     - Chapter number.
 * @param {int} enumeration - item numbering.
 */
 const addReferenceListing = (className, source, chapter, enumeration) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
        refs[i].innerHTML = ("<a href=\"" + source + "\">Listado "
            + chapter + "." + enumeration + "</a>");
    }
}

/**
 * @function                   addReferenceFigure
 * @description                Sets the text of the references
 *                             within the website.
 * @param {string} className - Reference class name.
 * @param {string} source    - Reference website address.
 * @param {int} chapter      - Chapter number.
 * @param {int} enumeration  - item numbering.
 */
 const addReferenceFigure = (className, source, chapter, enumeration) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
        refs[i].innerHTML = ("<a href=\"" + source + "\">Figura "
            + chapter + "." + enumeration + "</a>");
    }
}

/**
 * @function                          getChapterNumber
 * @description                       Acquires the number of the
 *                                    entered chapter.
 * @param {string} chapterReference - Chapter reference.
 * @returns {int}
 */
const getChapterNumber = (chapterReference) => {

    let chapterNumber = 0;

    for (let i = 0; i < CHPTS_REFS_DATA.length; i++) {
        if (CHPTS_REFS_DATA[i].reference == chapterReference) {
            chapterNumber = ++i;
            break;
        }
    }

    return chapterNumber;
}

/**
 * @function                setDataReferenceContents
 * @description             Gets the referrers data file and sets
 *                          them on the website.
 * @param {string} source - JSON file source.
 * @returns
 */
const setDataReferenceContents = (source) => {
    fetch(source)
        .then(response => response.json())
        .then(data => {
            let chapter = 0;

            data.forEach(element => {
                switch (element.type) {
                    case "title":
                        addReferenceBook(
                            element.reference,
                            element.source,
                            element.title
                        );
                        break;
                    case "chapter":
                        addReferenceChapter(
                            element.reference,
                            element.source,
                            element.title,
                            (++chapter)
                        );
                        break;
                    case "section":
                        addReferenceChapter(
                            element.reference,
                            element.source,
                            element.title,
                            chapter
                        );
                        break;
                }                         
            });
        });
}

/**
 * @function                          setDataReferenceGeneral
 * @description                       Gets the referrers data file and sets
 *                                    them on the website.
 * @param {string} chapterReference - Chapter reference.
 * @returns
 */
const setDataReferenceGeneral = (chapterReference) => {
    let listingNumber = 0;
    let figureNumber = 0;
    
    const chapterNumber = getChapterNumber(chapterReference);

    fetch(CHPTS_REFS_DATA[chapterNumber-1].source)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                switch (element.type) {
                    case "listing":
                        addReferenceListing(
                            element.reference,
                            element.source,
                            chapterNumber,
                            (++listingNumber)
                        );
                        break;
                    case "figure":
                        addReferenceFigure(
                            element.reference,
                            element.source,
                            chapterNumber,
                            (++figureNumber)
                        );
                        break;
                }     
            });            
        });
}


/**
 * @function                setDataReferenceBiblio
 * @description             Gets the referrers data file and sets
 *                          them on the website.
 * @param {string} source - JSON file source.
 * @returns
 */
 const setDataReferenceBiblio = (source) => {
    fetch(source)
        .then(response => response.json())
        .then(data => {
            let biblio = 0;

            data.forEach(element => {
                addReferenceBiblio(
                    element.reference,
                    element.source,
                    (++biblio)
                );                    
            });
        });
}


/* --- --- --- --- --- --- --- --- */

setDataReferenceContents(SRC_CONTENTS_REFS_DATA);
setDataReferenceBiblio(SRC_BIBLIO_REFS_DATA);

setDataReferenceGeneral("chpt-intro");
setDataReferenceGeneral("chpt-glib");
setDataReferenceGeneral("chpt-oop-semi");
setDataReferenceGeneral("chpt-oop-gobj");
setDataReferenceGeneral("chpt-gtk-app-arch");
