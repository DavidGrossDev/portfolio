const overlay = document.getElementById('overlay');
const navToLandingSectionRef = document.getElementById('nav_to_Landing_section');
const navLinks = document.querySelectorAll('.main-nav-menu-links-highlight-div a');
const overlayNavLinks = document.querySelectorAll('.overlay-nav-menu-links-highlight-div');
const openOverlayBtnRef = document.getElementById('open_overlay');
const closeOverlayBtnRef = document.getElementById('close_overlay');
const commentsAreaRef = document.getElementById('comments_area');
const contactCalloutRef = document.getElementById('contact_section_callout');
const commentMarks = document.querySelectorAll('.comment-mark');
const commentsLeftArrowBtnRef = document.getElementById('comments_left_arrow');
const commentsRightArrowBtnRef = document.getElementById('comments_right_arrow');
let commentCounter = 0;

const skillsListRef = document.getElementById('skills_list');
const skillsListSmallRef = document.getElementById('skills_list_small');
const continuallyLearningRef = document.getElementById('continually_learning');
const continuallyLearningSmallRef = document.getElementById('continually_learning_small');

const portfolioProjectsSectionRef = document.getElementById('portfolio_projects_section');

const contactFormRef = document.getElementById('contact_form');

navToLandingSectionRef?.addEventListener('click', () => {
    navLinks.forEach(() => {
        document.querySelectorAll('.main-nav-menu-links-highlight').forEach(div => div.classList.remove('main-nav-link-svg-active'));
        navLinks.forEach(l => l.classList.remove('clr-grn'));
    });
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll('.main-nav-menu-links-highlight').forEach(div => div.classList.remove('main-nav-link-svg-active'));
        let highlightDiv = link.nextElementSibling;
        navLinks.forEach(l => l.classList.remove('clr-grn'));
        highlightDiv.classList.add('main-nav-link-svg-active');
        link.classList.add('clr-grn');
    });
});

overlayNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeOverlay();
    })
})

commentsLeftArrowBtnRef?.addEventListener('click', () => {
    commentCounter--;
    if (commentCounter < 0) {
        commentCounter = 2;
    }
    removeCommentMarkHighlight();
    let lang = setCurrentLanguage();
    init(lang);
});

commentsRightArrowBtnRef?.addEventListener('click', () => {
    commentCounter++;
    if (commentCounter >= 3) {
        commentCounter = 0;
    }
    removeCommentMarkHighlight();
    let lang = setCurrentLanguage();
    init(lang);
});

function init(lang = 'en') {
    lang = checkLocalStorage(lang);
    setRightLanguageBtnIndexActive(lang);
    setLangContentIn(lang);
    addCommentMarkHighlight();
    renderSkillsList();
    renderContinuallyLearning();
    renderSpecInterestToLearn();
    renderPortfolioProjects();
    setLanguage(lang); 
}

function checkLocalStorage(lang) {
    let langLocal = JSON.parse(localStorage.getItem('lang'));
    if(langLocal != null ) {
        lang = langLocal;  
    } 
    else {
        lang = lang;
    }
    return lang;
}

function setRightLanguageBtnIndexActive(lang) {
    removeLanguageBtnMark();
    langButtonsIndex[lang].forEach(btn => {
        btn?.classList.add('active');
    }); 
}

function setLangContentIn(lang) {
    commentsAreaRef.innerHTML = commentTemplate(lang);
    skillSectionCallOutRef.innerHTML = translationSkillsCallOut[lang];
    contactCalloutRef.innerHTML = translationTemplateContact[lang];
    checkboxProPolContainerRef.innerHTML = translationTemplatePriPol[lang];
}

function removeCommentMarkHighlight() {
    commentMarks.forEach(m => m.classList.remove('comment-mark-highlight'));
}

function addCommentMarkHighlight() {
    commentMarks[commentCounter].classList.add('comment-mark-highlight');
}


function renderSkillsList() {
    skillsListRef.innerHTML = "";
    skillsListSmallRef.innerHTML = "";
    for (let i = 0; i < skillsList.length; i++) {
        skillsListRef.innerHTML += skillCardTemplate(i);
        skillsListSmallRef.innerHTML += skillCardTemplate(i);
    }
}

function renderSpecInterestToLearn() {
    let specInterestToLearnRef = document.getElementById('interestToLearn');
    let specInterestToLearnSmallRef = document.getElementById('interestToLearnSmall');
    specInterestToLearnRef.innerHTML = "";
    specInterestToLearnSmallRef.innerHTML = "";
    for (let i = 0; i < specInterest.length; i++) {
        specInterestToLearnRef.innerHTML += specLearnCardTemplate(i);
        specInterestToLearnSmallRef.innerHTML += specLearnCardTemplate(i);
    }
}

function renderPortfolioProjects() {
    portfolioProjectsSectionRef.innerHTML = "";
    for (let i = 0; i < portfolioProjects.length; i++) {
        portfolioProjectsSectionRef.innerHTML += portfolioProjectTemplate(i);

    }
    portfolioProjectsSectionRef.innerHTML += `<section></section>`
}

function renderContinuallyLearning() {
    continuallyLearningRef.innerHTML = continuallyLearningTemplate("interestToLearn", "#1CDAE6");
    continuallyLearningSmallRef.innerHTML = continuallyLearningTemplate('interestToLearnSmall', '#9747FF');
}

openOverlayBtnRef?.addEventListener('click', () => {
    openOverlay();
});

function openOverlay() {
    overlay.classList.remove('fade-out');
    overlay.classList.remove('d_none');
    setTimeout(()=> {
        overlay.classList.add('fade-in');
    },150);
}

closeOverlayBtnRef?.addEventListener('click', () => {
    closeOverlay();  
});

function closeOverlay() {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    setTimeout(()=> {
        overlay.classList.add('d_none');
    },150);
}
