const SRC_CONTENTS_REFS_DATA = "../../../assets/json/refs-contents.json";

const CHPTS_REFS_DATA = [
    {
        reference: "ch-intro",
        source: "../../../assets/json/refs-intro.json"
    },
    {
        reference: "ch-glib",
        source: "../../../assets/json/refs-glib.json"
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
 * @function                   addReferenceContent
 * @description                Sets the text of the references
 *                             within the website.
 * @param {string} className - Reference class name.
 * @param {string} source    - Reference website address.
 * @param {string} title     - Chapter or section title.
 * @param {string} chapter   - Chapter number.
 */
 const addReferenceChapter = (className, source, title, chapter) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
    refs[i].innerHTML = ("<a href=\"" + source + "\">" +
        title + " en el capítulo " + chapter + "</a>");
    }
}


/**
 * @function                     addReferenceGeneral
 * @description                  Sets the text of the references
 *                               within the website.
 * @param {string} className   - Reference class name.
 * @param {string} source      - Reference website address.
 * @param {string} chapter     - Chapter number.
 * @param {string} enumeration - item numbering.
 */
 const addReferenceListing = (className, source, chapter, enumeration) => {
	const refs = document.getElementsByClassName(className);

    for (let i = 0; i < refs.length; i++) {
        refs[i].innerHTML = ("<a href=\"" + source + "\">Listado "
            + chapter + "." + enumeration + "</a>");
    }
}


const getChapterNumber = (className) => {

    let chapterNumber = 0;

    for (let i = 0; i < CHPTS_REFS_DATA.length; i++) {
        if (CHPTS_REFS_DATA[i].reference == className) {
            chapterNumber = ++i;
            break;
        }
    }

    return chapterNumber;
}

/**
 * @function                setDataReferenceChapter
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
 * @function                 setDataReferenceGeneral
 * @description              Gets the referrers data file and sets
 *                           them on the website.
 * @param {string} source  - json file source.
 * @param {string} chapterReference - Chapter reference.
 * @returns
 */
const setDataReferenceGeneral = (chapterReference) => {
    let listingNumber = 0;
    
    const chapterNumber = getChapterNumber(chapterReference);

    fetch(CHPTS_REFS_DATA[chapterNumber-1].source)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.type == "listing") {
                    addReferenceListing(
                        element.reference,
                        element.source,
                        chapterNumber,
                        (++listingNumber)
                    ); 
                }        
            });            
        });
}



/* --- --- --- --- --- --- --- --- */

setDataReferenceContents(SRC_CONTENTS_REFS_DATA);

// let glib_refs = document.getElementsByClassName("glib-refs");

setDataReferenceGeneral("ch-glib");