const headerLinks = document.querySelectorAll('.landing-section-header-links-highlight-div a');
const commentsAreaRef = document.getElementById('comments_area');
const commentMarks = document.querySelectorAll('.comment-mark');

const inputNameRef = document.getElementById('name');
const inputNameFailSvgRef = document.getElementById('name_fail_svg');
const inputNameSuccessSvgRef = document.getElementById('name_success_svg');
const inputNameAlertMessageRef = document.getElementById('name_alert_msg');

const inputEmailRef = document.getElementById('email');
const inputEmailFailSvgRef = document.getElementById('email_fail_svg');
const inputEmailSuccessSvgRef = document.getElementById('email_success_svg');
const inputEmailAlertMessageRef = document.getElementById('email_alert_msg');

const textareaMessageRef = document.getElementById('message');
const textareaMessageFailSvgRef = document.getElementById('message_fail_svg');
const textareaMessageSuccessSvgRef = document.getElementById('message_success_svg');
const textareaMessageAlertMessageRef = document.getElementById('message_alert_msg');


let commentCounter = 0;

headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll('.landing-section-header-link-highlight').forEach(svg => svg.classList.remove('header-link-svg-active'));
        let svg = link.nextElementSibling;
        headerLinks.forEach(l => l.classList.remove('clr-grn'));
        svg.classList.add('header-link-svg-active');
        link.classList.add('clr-grn');
    });
});

function init() {
    commentsAreaRef.innerHTML = `<section class="comment-container">
                    <svg width="97" height="69" viewBox="0 0 97 69" fill="none">
                        <path d="M30.6 68.1H0L28.8 0H48.3L30.6 68.1ZM79.2 68.1H48.6L77.4 0H96.9L79.2 68.1Z"
                            fill="#70E61C" />
                    </svg>
                    <p>
                       ${teamComments[commentCounter].comment}
                    </p>
                    <div class="comment-footer">
                        <svg width="405" height="2" viewBox="0 0 405 2" fill="none">
                            <path d="M404.5 1H0" stroke="#1CDAE6" stroke-width="2" />
                        </svg>
                        <p>${teamComments[commentCounter].name} - ${teamComments[commentCounter].role}</p>
                    </div>
                </section>
                <section class="comment-img-container">
                    <div class="img-circle">
                        <img class="${teamComments[commentCounter].class}" src="${teamComments[commentCounter].imgsrc}" alt="">
                    </div>
                    <svg width="102" height="4" viewBox="0 0 102 4" fill="none">
                        <path
                            d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4V0ZM102 4H104V0H102V4ZM2 4H102V0H2V4Z"
                            fill="#70E61C" />
                    </svg>
                </section>`;
    addCommentMarkHighlight();
}

function reduceCommentCounter() {
    commentCounter--;
    if (commentCounter < 0) {
        commentCounter = 2;
    }
    removeCommentMarkHighlight();
    init();
}

function increaseCommentCounter() {
    commentCounter++;
    if (commentCounter >= 3) {
        commentCounter = 0;
    }
    removeCommentMarkHighlight();
    init();
}

function removeCommentMarkHighlight() {
    commentMarks.forEach(m => m.classList.remove('comment-mark-highlight'));
}

function addCommentMarkHighlight() {
    commentMarks[commentCounter].classList.add('comment-mark-highlight');
}

inputNameRef.addEventListener('input', () => {
    let value = inputNameRef.value.trim();
    const onlyLetters = /^[A-Za-zÄÖÜäöüß ]+$/;

    resetNameInputfield();
    if ((value.length < 3 && value.length >= 0) || !onlyLetters.test(value)) {
        markNameInputfieldRed();
    } else {
        resetNameInputfield();
        markNameInputfieldGreen();
    }
});

function resetNameInputfield() {
    inputNameRef.classList.remove('brd-rd');
    inputNameRef.classList.remove('brd-gr');
    inputNameFailSvgRef.classList.add('d_none');
    inputNameSuccessSvgRef.classList.add('d_none');
    inputNameAlertMessageRef.classList.add('d_none');
}

function markNameInputfieldRed() {
    inputNameRef.classList.add('brd-rd');
    inputNameFailSvgRef.classList.remove('d_none');
    inputNameAlertMessageRef.classList.remove('d_none');
}

function markNameInputfieldGreen() {
    inputNameRef.classList.add('brd-gr');
    inputNameSuccessSvgRef.classList.remove('d_none');
}

inputEmailRef.addEventListener('input', () => {
    let value = inputEmailRef.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    resetEmailInputfield();
    if (!emailRegex.test(value)) {
        markEmailInputfieldRed();
    } else {
        resetEmailInputfield();
        markEmailInputfieldGreen();
    }
});

function resetEmailInputfield() {
    inputEmailRef.classList.remove('brd-rd');
    inputEmailRef.classList.remove('brd-gr');
    inputEmailFailSvgRef.classList.add('d_none');
    inputEmailSuccessSvgRef.classList.add('d_none');
    inputEmailAlertMessageRef.classList.add('d_none');
}

function markEmailInputfieldRed() {
    inputEmailRef.classList.add('brd-rd');
    inputEmailFailSvgRef.classList.remove('d_none');
    inputEmailAlertMessageRef.classList.remove('d_none');
}

function markEmailInputfieldGreen() {
    inputEmailRef.classList.add('brd-gr');
    inputEmailSuccessSvgRef.classList.remove('d_none');
}

textareaMessageRef.addEventListener('input',() => {
    resetMessageTextarea();
    if(textareaMessageRef.value.length < 2){
        console.log(textareaMessageRef.value);
        markMessageTextareaRed();
    } else {
        markMessageTextareaGreen();
    }
});

function resetMessageTextarea() {
    textareaMessageRef.classList.remove('brd-rd');
    textareaMessageRef.classList.remove('brd-gr');
    textareaMessageFailSvgRef.classList.add('d_none');
    textareaMessageSuccessSvgRef.classList.add('d_none');
    textareaMessageAlertMessageRef.classList.add('d_none');
}

function markMessageTextareaRed() {
    textareaMessageRef.classList.add('brd-rd');
    textareaMessageFailSvgRef.classList.remove('d_none');
    textareaMessageAlertMessageRef.classList.remove('d_none');
}

function markMessageTextareaGreen() {
    textareaMessageRef.classList.add('brd-gr');
    textareaMessageSuccessSvgRef.classList.remove('d_none');
}