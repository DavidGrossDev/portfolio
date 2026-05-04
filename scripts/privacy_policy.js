


function privacyPolicyInit(lang = 'en') {
    lang = checkLocalStorage(lang);
    setRightLanguageBtnPrivacyActive(lang);
    setLanguage(lang);
}

function setRightLanguageBtnPrivacyActive(lang) {
    removeLanguagePpBtnMark();
    langButtonsPrivacy[lang].forEach(btn => {
        btn?.classList.add('active');
    });
}