

/**
 * @fileoverview Privacy policy page initialization and language handling.
 * Manages the display and language selection for the privacy policy page.
 */

/**
 * Initialize the privacy policy page with the specified language.
 * @param {string} [lang='en'] - The language code to use (e.g., 'en', 'de').
 * @returns {void}
 */
function privacyPolicyInit(lang = 'en') {
    lang = checkLocalStorage(lang);
    setRightLanguageBtnPrivacyActive(lang);
    setLanguage(lang);
}

/**
 * Set the active state for language buttons in the privacy policy section.
 * @param {string} lang - The language code (e.g., 'en', 'de').
 * @returns {void}
 */
function setRightLanguageBtnPrivacyActive(lang) {
    removeLanguagePpBtnMark();
    langButtonsPrivacy[lang].forEach(btn => {
        btn?.classList.add('active');
    });
}