/**
 * @fileoverview Main script for the portfolio website.
 * Handles DOM interactions, navigation, overlay management, comments carousel, and content rendering.
 */

/**
 * Reference to the overlay element.
 * @type {HTMLElement}
 */
const overlay = document.getElementById('overlay');

/**
 * Reference to the navigation link to landing section.
 * @type {HTMLElement}
 */
const navToLandingSectionRef = document.getElementById('nav_to_Landing_section');

/**
 * NodeList of main navigation links.
 * @type {NodeList}
 */
const navLinks = document.querySelectorAll('.main-nav-menu-links-highlight-div a');

/**
 * NodeList of overlay navigation links.
 * @type {NodeList}
 */
const overlayNavLinks = document.querySelectorAll('.overlay-nav-menu-links-highlight-div');

/**
 * Reference to the open overlay button.
 * @type {HTMLElement}
 */
const openOverlayBtnRef = document.getElementById('open_overlay');

/**
 * Reference to the close overlay button.
 * @type {HTMLElement}
 */
const closeOverlayBtnRef = document.getElementById('close_overlay');

/**
 * Reference to the comments area.
 * @type {HTMLElement}
 */
const commentsAreaRef = document.getElementById('comments_area');

/**
 * Reference to the contact section callout.
 * @type {HTMLElement}
 */
const contactCalloutRef = document.getElementById('contact_section_callout');

/**
 * NodeList of comment marks.
 * @type {NodeList}
 */
const commentMarks = document.querySelectorAll('.comment-mark');

/**
 * Reference to the comments left arrow button.
 * @type {HTMLElement}
 */
const commentsLeftArrowBtnRef = document.getElementById('comments_left_arrow');

/**
 * Reference to the comments right arrow button.
 * @type {HTMLElement}
 */
const commentsRightArrowBtnRef = document.getElementById('comments_right_arrow');

/**
 * Counter for the current comment index.
 * @type {number}
 */
let commentCounter = 0;

/**
 * Reference to the skills list container.
 * @type {HTMLElement}
 */
const skillsListRef = document.getElementById('skills_list');

/**
 * Reference to the small skills list container.
 * @type {HTMLElement}
 */
const skillsListSmallRef = document.getElementById('skills_list_small');

/**
 * Reference to the continually learning container.
 * @type {HTMLElement}
 */
const continuallyLearningRef = document.getElementById('continually_learning');

/**
 * Reference to the small continually learning container.
 * @type {HTMLElement}
 */
const continuallyLearningSmallRef = document.getElementById('continually_learning_small');

/**
 * Reference to the portfolio projects section.
 * @type {HTMLElement}
 */
const portfolioProjectsSectionRef = document.getElementById('portfolio_projects_section');

/**
 * Reference to the contact form.
 * @type {HTMLElement}
 */
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

/**
 * Initializes the page with the specified language.
 * @param {string} [lang='en'] - Language code ('en' or 'de').
 * @returns {void}
 */
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

/**
 * Checks local storage for saved language preference.
 * @param {string} lang - Default language code.
 * @returns {string} Language code from local storage or default.
 */
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

/**
 * Sets the active class on the correct language button for the index page.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function setRightLanguageBtnIndexActive(lang) {
    removeLanguageBtnMark();
    langButtonsIndex[lang].forEach(btn => {
        btn?.classList.add('active');
    }); 
}

/**
 * Sets language-specific content in the page.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function setLangContentIn(lang) {
    commentsAreaRef.innerHTML = commentTemplate(lang);
    skillSectionCallOutRef.innerHTML = translationSkillsCallOut[lang];
    contactCalloutRef.innerHTML = translationTemplateContact[lang];
    checkboxProPolContainerRef.innerHTML = translationTemplatePriPol[lang];
}

/**
 * Removes highlight from all comment marks.
 * @returns {void}
 */
function removeCommentMarkHighlight() {
    commentMarks.forEach(m => m.classList.remove('comment-mark-highlight'));
}

/**
 * Adds highlight to the current comment mark.
 * @returns {void}
 */
function addCommentMarkHighlight() {
    commentMarks[commentCounter].classList.add('comment-mark-highlight');
}

/**
 * Renders the skills list in both normal and small containers.
 * @returns {void}
 */
function renderSkillsList() {
    skillsListRef.innerHTML = "";
    skillsListSmallRef.innerHTML = "";
    for (let i = 0; i < skillsList.length; i++) {
        skillsListRef.innerHTML += skillCardTemplate(i);
        skillsListSmallRef.innerHTML += skillCardTemplate(i);
    }
}

/**
 * Renders the special interests to learn in both normal and small containers.
 * @returns {void}
 */
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

/**
 * Renders the portfolio projects section.
 * @returns {void}
 */
function renderPortfolioProjects() {
    portfolioProjectsSectionRef.innerHTML = "";
    for (let i = 0; i < portfolioProjects.length; i++) {
        portfolioProjectsSectionRef.innerHTML += portfolioProjectTemplate(i);

    }
    portfolioProjectsSectionRef.innerHTML += `<section></section>`
}

/**
 * Renders the continually learning section in both normal and small containers.
 * @returns {void}
 */
function renderContinuallyLearning() {
    continuallyLearningRef.innerHTML = continuallyLearningTemplate("interestToLearn", "#1CDAE6");
    continuallyLearningSmallRef.innerHTML = continuallyLearningTemplate('interestToLearnSmall', '#9747FF');
}

openOverlayBtnRef?.addEventListener('click', () => {
    openOverlay();
});

/**
 * Opens the overlay with fade-in animation.
 * @returns {void}
 */
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

/**
 * Closes the overlay with fade-out animation.
 * @returns {void}
 */
function closeOverlay() {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    setTimeout(()=> {
        overlay.classList.add('d_none');
    },150);
}
