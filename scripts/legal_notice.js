const ids = ['acceptance', 'scope', 'proprietary', 'use', 'disclaimer', 'indemnity'];

const sectionLegNotArray = ids.map(id =>
    document.getElementById(`legal_notice_${id}`)
);

function legalNoticeInit() {
    let lang = JSON.parse(localStorage.getItem("lang"));
    
    setLanguage(lang);
    let keyArray = Object.keys(translationtemplatesLegalNotice[lang]);
    for (let index = 0; index < sectionLegNotArray.length; index++) {
        sectionLegNotArray[index].innerHTML = translationtemplatesLegalNotice[lang][keyArray[index]];
    }
}



