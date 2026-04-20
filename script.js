const navToLandingSectionRef = document.getElementById('nav_to_Landing_section');
const navLinks = document.querySelectorAll('.main-nav-menu-links-highlight-div a');
const commentsAreaRef = document.getElementById('comments_area');
const contactCalloutRef = document.getElementById('contact_section_callout');
const commentMarks = document.querySelectorAll('.comment-mark');
const commentsLeftArrowBtnRef = document.getElementById('comments_left_arrow');
const commentsRightArrowBtnRef = document.getElementById('comments_right_arrow');
let commentCounter = 0;

navToLandingSectionRef?.addEventListener('click', () => {
    navLinks.forEach(() => {
    document.querySelectorAll('.main-nav-menu-links-highlight').forEach(svg => svg.classList.remove('main-nav-link-svg-active'));
        navLinks.forEach(l => l.classList.remove('clr-grn'));
    });
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll('.main-nav-menu-links-highlight').forEach(svg => svg.classList.remove('main-nav-link-svg-active'));
        let svg = link.nextElementSibling;
        navLinks.forEach(l => l.classList.remove('clr-grn'));
        svg.classList.add('main-nav-link-svg-active');
        link.classList.add('clr-grn');
    });
});

commentsLeftArrowBtnRef?.addEventListener('click', () => {
    commentCounter--;
    if (commentCounter < 0) {
        commentCounter = 2;
    }
    removeCommentMarkHighlight();
    init();
});

commentsRightArrowBtnRef?.addEventListener('click', () => {
    commentCounter++;
    if (commentCounter >= 3) {
        commentCounter = 0;
    }
    removeCommentMarkHighlight();
    init();
});

function init() {
    let currentSkillsCallOutTxt = "";
    let currentComment = "";
    let currentContactCallOut = "";
    let currentCheckboxTxt = "";
    let lang = setCurrentLanguage();
    setLanguage(lang);
    currentSkillsCallOutTxt = translationSkillsCallOut[lang];
    currentComment = teamComments[commentCounter][`comment_${lang}`];
    commentsAreaRef.innerHTML = renderComment(currentComment);
    currentContactCallOut = translationTemplateContact[lang];
    currentCheckboxTxt = translationTemplatePriPol[lang];
    addCommentMarkHighlight();
    skillSectionCallOutRef.innerHTML = currentSkillsCallOutTxt;
    contactCalloutRef.innerHTML = currentContactCallOut;
    checkboxProPolContainerRef.innerHTML = currentCheckboxTxt;
}

function removeCommentMarkHighlight() {
    commentMarks.forEach(m => m.classList.remove('comment-mark-highlight'));
}

function addCommentMarkHighlight() {
    commentMarks[commentCounter].classList.add('comment-mark-highlight');
}

