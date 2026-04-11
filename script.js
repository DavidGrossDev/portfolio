const headerLinks = document.querySelectorAll('.landing-section-header-links-highlight-div a');
const commentsAreaRef = document.getElementById('comments_area');
const commentMarks = document.querySelectorAll('.comment-mark');


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
    let currentComment ="";
    if(langDe) {
       currentComment = teamComments[commentCounter].commentDe;
    } else {
        currentComment = teamComments[commentCounter].comment;
    }
    commentsAreaRef.innerHTML = `<section class="comment-container">
                    <svg width="97" height="69" viewBox="0 0 97 69" fill="none">
                        <path d="M30.6 68.1H0L28.8 0H48.3L30.6 68.1ZM79.2 68.1H48.6L77.4 0H96.9L79.2 68.1Z"
                            fill="#70E61C" />
                    </svg>
                    <p>
                       ${currentComment}
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

