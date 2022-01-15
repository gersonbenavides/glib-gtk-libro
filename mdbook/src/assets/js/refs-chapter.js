const SRC_REFS_DATA_CHAPTER = "../../../assets/json/refs-chpt.json";


/**
 * @function                   addReferenceChapter
 * @description                Sets the text of the references
 *                             within the website.
 * @param {string} className - Reference class name.
 * @param {string} source    - Reference website address.
 * @param {string} title     - Chapter or section title.
 * @param {string} chapter   - Chapter number.
 */
const addReferenceChapter = (className, source, title, chapter) => {
	const ref = document.getElementsByClassName(className);

	for (let i = 0; i < ref.length; i++) {
		ref[i].innerHTML = ("<a href=\"" + source + "\">" + title
            + " en el capítulo " + chapter + "</a>");
	}
}


/**
 * @function                setDataReferenceChapter
 * @description             Gets the referrers data file and sets
 *                          them on the website.
 * @param {string} source - json file source.
 * @returns
 */
const setDataReferenceChapter = (source) => {
    fetch(source)
        .then(response => response.json())
        .then(data => {
            let chapter = 0;
            data.forEach(element => {
                addReferenceChapter(
                    element.reference,
                    element.source,
                    element.title,
                    ((element.chapter == "new") ? ++chapter : chapter)
                );         
            });            
        });
}


setDataReferenceChapter(SRC_REFS_DATA_CHAPTER);