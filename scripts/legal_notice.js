/**
 * @fileoverview Legal notice page initialization and language handling.
 * Manages the display of legal notice sections based on selected language.
 */

/**
 * Array of section IDs for the legal notice.
 * @type {string[]}
 */
const ids = ['acceptance', 'scope', 'proprietary', 'use', 'disclaimer', 'indemnity'];

/**
 * Array of DOM elements corresponding to legal notice sections.
 * @type {HTMLElement[]}
 */
const sectionLegNotArray = ids.map(id =>
    document.getElementById(`legal_notice_${id}`)
);

/**
 * Initialize the legal notice page with the specified language.
 * @param {string} [lang='en'] - The language code to use (e.g., 'en', 'de').
 * @returns {void}
 */
function legalNoticeInit(lang = 'en') {
    lang = checkLocalStorage(lang);
    setRightLanguageBtnLegalActive(lang);
    setLanguage(lang);
    let keyArray = Object.keys(translationtemplatesLegalNotice[lang]);
    for (let index = 0; index < sectionLegNotArray.length; index++) {
        sectionLegNotArray[index].innerHTML = translationtemplatesLegalNotice[lang][keyArray[index]];
    }
}

/**
 * Set the active state for language buttons in the legal notice section.
 * @param {string} lang - The language code (e.g., 'en', 'de').
 * @returns {void}
 */
function setRightLanguageBtnLegalActive(lang) {
    removeLanguageLnBtnMark();
    langButtonsLegal[lang].forEach(btn => {
        btn?.classList.add('active');
    });
}

