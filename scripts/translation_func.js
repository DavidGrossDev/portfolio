/**
 * @fileoverview Translation and language handling functions for the portfolio website.
 * Manages language switching, local storage, and text translation across different pages.
 */

/**
 * Reference to the skill section call-out element.
 * @type {HTMLElement}
 */
const skillSectionCallOutRef = document.getElementById('skill_section_callOut');

/**
 * Flag indicating if German language is selected.
 * @type {boolean}
 */
let langDe = false;

/**
 * Current language code.
 * @type {string}
 */
let currentLang = "";

/**
 * Language button references for the index page.
 * @type {Object<string, HTMLElement[]>}
 */
const langButtonsIndex = {
    de: [
        document.getElementById('language_de'),
        document.getElementById('language_de_mobile')
    ],
    en: [
        document.getElementById('language_en'),
        document.getElementById('language_en_mobile')
    ]
};

/**
 * Language button references for the legal notice page.
 * @type {Object<string, HTMLElement[]>}
 */
const langButtonsLegal = {
    de: [
        document.getElementById('language_ln_de'),
        document.getElementById('language_ln_de_mobile')
    ],
    en: [
        document.getElementById('language_ln_en'),
        document.getElementById('language_ln_en_mobile')
    ]
};

/**
 * Language button references for the privacy policy page.
 * @type {Object<string, HTMLElement[]>}
 */
const langButtonsPrivacy = {
    de: [
        document.getElementById('language_pp_de'),
        document.getElementById('language_pp_de_mobile')
    ],
    en: [
        document.getElementById('language_pp_en'),
        document.getElementById('language_pp_en_mobile')
    ]
}

/**
 * Handles language switch for the index page.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function handleLangSwitchIndex(lang) {
    removeLanguageBtnMark();
    if (lang === 'de') {
        langDe = true;
    } else {
        langDe = false;
    }
    setLangToLocalStorage(lang);
    langButtonsIndex[lang].forEach(btn => {
        btn?.classList.add('active');
    });
    init(lang);
}

/**
 * Handles language switch for the legal notice page.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function handleLangSwitchLegal(lang) {
    removeLanguageLnBtnMark();
    if (lang === 'de') {
        langDe = true;
    } else {
        langDe = false;
    }
    setLangToLocalStorage(lang);
    langButtonsLegal[lang].forEach(btn => {
        btn?.classList.add('active');
    });
    legalNoticeInit(lang);
}

/**
 * Handles language switch for the privacy policy page.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function handleLangSwitchPrivacy(lang) {
    removeLanguagePpBtnMark();
    if (lang === 'de') {
        langDe = true;
    } else {
        langDe = false;
    }
    setLangToLocalStorage(lang);
    langButtonsPrivacy[lang].forEach(btn => {
        btn?.classList.add('active');
    });
    privacyPolicyInit(lang);
}

Object.entries(langButtonsIndex).forEach(([lang, buttons]) => {
    buttons.forEach(btn => {
        btn?.addEventListener('click', () => {
            handleLangSwitchIndex(lang);
        });
    })
});

Object.entries(langButtonsLegal).forEach(([lang, buttons]) => {
    buttons.forEach(btn => {
        btn?.addEventListener('click', () => {
            handleLangSwitchLegal(lang);
        });
    })
});

Object.entries(langButtonsPrivacy).forEach(([lang, buttons]) => {
    buttons.forEach(btn => {
        btn?.addEventListener('click', () => {
            handleLangSwitchPrivacy(lang);
        });
    })
});

/**
 * Saves the selected language to local storage.
 * @param {string} lang - Language code to store.
 * @returns {void}
 */
function setLangToLocalStorage(lang) {
    localStorage.setItem("lang", JSON.stringify(lang));
}

/**
 * Returns the current language code based on the langDe flag.
 * @returns {string} 'de' if German is selected, otherwise 'en'.
 */
function setCurrentLanguage() {
    if (langDe) {
        return 'de';
    } else {
        return 'en';
    }
}

/**
 * Removes active class from all index page language buttons.
 * @returns {void}
 */
function removeLanguageBtnMark() {
    Object.values(langButtonsIndex).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });

}

/**
 * Removes active class from all legal notice language buttons.
 * @returns {void}
 */
function removeLanguageLnBtnMark() {
    Object.values(langButtonsLegal).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });
}

/**
 * Removes active class from all privacy policy language buttons.
 * @returns {void}
 */
function removeLanguagePpBtnMark() {
    Object.values(langButtonsPrivacy).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });
}

/**
 * Applies translations to elements with data-i18n attributes.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]')?.forEach(el => {
        let key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(lang, key);
    });

    document.querySelectorAll('[data-i18n-placeholder]')?.forEach(el => {
        let key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', getTranslation(lang, key));
    });
}

/**
 * Retrieves the translation for a given key from the translations object.
 * @param {string} lang - Language code ('en' or 'de').
 * @param {string} key - Dot-separated key path (e.g., 'skills.learning').
 * @returns {string} The translated text.
 */
function getTranslation(lang, key) {
    return key.split('.').reduce((obj, i) => obj[i], translations[lang]);
}