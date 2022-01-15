const SRC_REFS_CHAPTER = "../../../assets/js/refs-chapter.js";
const CLASS_REFS_CHAPTER = "ref-chapter";

const SRC_REFS_BIBLIO = "./src/assets/js/refs-bibilio.js";


/**
 * @function                addScript
 * @description             Add a js file to the website.
 * @param {string} source - js file source.
 */
const addScript = (source) => {
    const script = document.createElement("script");
    script.src = source;
    script.type = "module";
    document.body.appendChild(script);
}


/**
 * @function                   setReferences
 * @description                Set references on the site if they were used.
 * @param {string} className - Reference class name.
 * @param {string} source    - js file source.
 */
const setReferences = (className, source) => {
    const refs = document.getElementsByClassName(className);

    if (refs.length) {
        addScript(source);
    }
}


setReferences(CLASS_REFS_CHAPTER, SRC_REFS_CHAPTER);