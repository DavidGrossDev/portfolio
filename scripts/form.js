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

const privacyPolicyCheckboxRef = document.getElementById('privacy_policy_checkbox');
const privacyPolicyEmptyBoxSvgRef = document.getElementById('privacy_policy_empty_checkbox');
const privacyPolicyCheckedBoxSvgRef = document.getElementById('privacy_policy_checked_checkbox');
const privacyPolicyAlertMsgRef = document.getElementById('privacy_policy_alert_msg');

const sendMessageBtnRef = document.getElementById('send_msg_btn');

let inputNameIsChecked = false;
let inputEmailIsChecked = false;
let textareaIsChecked =false;
let checkCounter = 0;

inputNameRef.addEventListener('input', () => {
    let value = inputNameRef.value.trim();
    const onlyLetters = /^[A-Za-zÄÖÜäöüß ]+$/;

    resetNameInputfield();
    if ((value.length < 3 && value.length >= 0) || !onlyLetters.test(value)) {
        markNameInputfieldRed();
        inputNameIsChecked = false;
        checkFormStatus();
    } else {
        resetNameInputfield();
        markNameInputfieldGreen();
        inputNameIsChecked = true;
        checkFormStatus();
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
        inputEmailIsChecked = false;
        checkFormStatus();
    } else {
        resetEmailInputfield();
        markEmailInputfieldGreen();
        inputEmailIsChecked = true;
        checkFormStatus();
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

textareaMessageRef.addEventListener('input', () => {
    resetMessageTextarea();
    if (textareaMessageRef.value.length < 2) {
        console.log(textareaMessageRef.value);
        markMessageTextareaRed();
        textareaIsChecked = false;
        checkFormStatus();
    } else {
        markMessageTextareaGreen();
        textareaIsChecked = true;
        checkFormStatus();
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

privacyPolicyCheckboxRef.addEventListener('click', () => {
    checkCounter++;
    if (checkCounter == 1) {
        privacyPolicyAlertMsgRef.classList.add('d_none');
        privacyPolicyEmptyBoxSvgRef.classList.add('d_none');
        privacyPolicyCheckedBoxSvgRef.classList.remove('d_none');
        checkFormStatus();
    } else {
        privacyPolicyAlertMsgRef.classList.remove('d_none');
        privacyPolicyEmptyBoxSvgRef.classList.remove('d_none');
        privacyPolicyCheckedBoxSvgRef.classList.add('d_none');
        checkCounter=0;
        checkFormStatus();
    }
});

function checkFormStatus() {
    if(!inputNameIsChecked | !inputEmailIsChecked | !textareaIsChecked | checkCounter == 0) {
        sendMessageBtnRef.classList.remove('send-message-btn-active');
        return;
    }

    if(inputNameIsChecked && inputEmailIsChecked && textareaIsChecked && checkCounter == 1) {
        sendMessageBtnRef.classList.add('send-message-btn-active');
    }
}
