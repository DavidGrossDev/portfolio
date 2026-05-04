const skillSectionCallOutRef = document.getElementById('skill_section_callOut');
let langDe = false;
let currentLang = "";

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

function setLangToLocalStorage(lang) {
    localStorage.setItem("lang", JSON.stringify(lang));
}

function setCurrentLanguage() {
    if (langDe) {
        return 'de';
    } else {
        return 'en';
    }
}

function removeLanguageBtnMark() {
    Object.values(langButtonsIndex).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });

}

function removeLanguageLnBtnMark() {
    Object.values(langButtonsLegal).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });
}

function removeLanguagePpBtnMark() {
    Object.values(langButtonsPrivacy).forEach((buttons) => {
        buttons.forEach(btn => {
            btn?.classList.remove('active');
        });
    });
}

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

function getTranslation(lang, key) {
    return key.split('.').reduce((obj, i) => obj[i], translations[lang]);
}