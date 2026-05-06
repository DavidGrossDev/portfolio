/**
 * @fileoverview Form validation and submission logic for the contact form.
 * Handles UI validation state, checkbox toggling, and posting the form data.
 */

/**
 * Data object sent by the contact form.
 * @typedef {Object} ContactFormData
 * @property {string} name - Trimmed name value.
 * @property {string} email - Trimmed email value.
 * @property {string} message - Trimmed message text.
 */

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
const checkboxProPolContainerRef = document.getElementById('checkbox_p_container');
const sendMessageBtnRef = document.getElementById('send_msg_btn');
const succesSendMsgRef = document.getElementById('succes_send_msg');

let inputNameIsChecked = false;
let inputEmailIsChecked = false;
let textareaIsChecked = false;
let checkCounter = 0;
let readyToSendMsg = false;



inputNameRef?.addEventListener('input', () => {
    let value = inputNameRef.value.trim();
    const onlyLetters = /^[A-Za-zÄÖÜäöüß ]+$/;

    resetNameInputfield();
    if ((value.length < 3 && value.length >= 0) || !onlyLetters.test(value)) {
        markNameInputfieldRed();
        inputNameIsChecked = false;
    } else {
        resetNameInputfield();
        markNameInputfieldGreen();
        inputNameIsChecked = true;
    }
    checkFormStatus();
});

/**
 * Mark the name input field as invalid and show the error UI.
 * @returns {void}
 */
function markNameInputfieldRed() {
    inputNameRef.classList.add('brd-rd');
    inputNameFailSvgRef.classList.remove('d_none');
    inputNameAlertMessageRef.classList.remove('d_none');
}

/**
 * Reset the name input validation UI to its default state.
 * @returns {void}
 */
function resetNameInputfield() {
    inputNameRef.classList.remove('brd-rd');
    inputNameRef.classList.remove('brd-gr');
    inputNameFailSvgRef.classList.add('d_none');
    inputNameSuccessSvgRef.classList.add('d_none');
    inputNameAlertMessageRef.classList.add('d_none');
}

/**
 * Mark the name input field as valid and show the success icon.
 * @returns {void}
 */
function markNameInputfieldGreen() {
    inputNameRef.classList.add('brd-gr');
    inputNameSuccessSvgRef.classList.remove('d_none');
}

inputEmailRef?.addEventListener('input', () => {
    let value = inputEmailRef.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    resetEmailInputfield();
    if (!emailRegex.test(value)) {
        markEmailInputfieldRed();
        inputEmailIsChecked = false;
    } else {
        resetEmailInputfield();
        markEmailInputfieldGreen();
        inputEmailIsChecked = true;
    }
    checkFormStatus();
});

/**
 * Mark the email input field as invalid and show the error UI.
 * @returns {void}
 */
function markEmailInputfieldRed() {
    inputEmailRef.classList.add('brd-rd');
    inputEmailFailSvgRef.classList.remove('d_none');
    inputEmailAlertMessageRef.classList.remove('d_none');
}

/**
 * Reset the email input validation UI to its default state.
 * @returns {void}
 */
function resetEmailInputfield() {
    inputEmailRef.classList.remove('brd-rd');
    inputEmailRef.classList.remove('brd-gr');
    inputEmailFailSvgRef.classList.add('d_none');
    inputEmailSuccessSvgRef.classList.add('d_none');
    inputEmailAlertMessageRef.classList.add('d_none');
}

/**
 * Mark the email input field as valid and show the success icon.
 * @returns {void}
 */
function markEmailInputfieldGreen() {
    inputEmailRef.classList.add('brd-gr');
    inputEmailSuccessSvgRef.classList.remove('d_none');
}

textareaMessageRef?.addEventListener('input', () => {
    resetMessageTextarea();
    if (textareaMessageRef.value.length < 1) {
        markMessageTextareaRed();
        textareaIsChecked = false;
    } else {
        markMessageTextareaGreen();
        textareaIsChecked = true;
    }
    checkFormStatus();
});

/**
 * Mark the message textarea as invalid and show the error UI.
 * @returns {void}
 */
function markMessageTextareaRed() {
    textareaMessageRef.classList.add('brd-rd');
    textareaMessageFailSvgRef.classList.remove('d_none');
    textareaMessageAlertMessageRef.classList.remove('d_none');
}

/**
 * Reset the message textarea validation UI to its default state.
 * @returns {void}
 */
function resetMessageTextarea() {
    textareaMessageRef.classList.remove('brd-rd');
    textareaMessageRef.classList.remove('brd-gr');
    textareaMessageFailSvgRef.classList.add('d_none');
    textareaMessageSuccessSvgRef.classList.add('d_none');
    textareaMessageAlertMessageRef.classList.add('d_none');
}

/**
 * Mark the message textarea as valid and show the success icon.
 * @returns {void}
 */
function markMessageTextareaGreen() {
    textareaMessageRef.classList.add('brd-gr');
    textareaMessageSuccessSvgRef.classList.remove('d_none');
}

privacyPolicyCheckboxRef?.addEventListener('click', () => {
    checkCounter++;
    if (checkCounter == 1) {
        markCheckboxAsChecked();
    } else {
        markCheckboxRed();
        checkCounter = 0;
    }
    checkFormStatus();
});

/**
 * Toggle the privacy checkbox UI to the checked state.
 * @returns {void}
 */
function markCheckboxAsChecked() {
    privacyPolicyAlertMsgRef.classList.add('d_none');
    privacyPolicyEmptyBoxSvgRef.classList.add('d_none');
    privacyPolicyCheckedBoxSvgRef.classList.remove('d_none');
}

/**
 * Toggle the privacy checkbox UI to the unchecked/invalid state.
 * @returns {void}
 */
function markCheckboxRed() {
    privacyPolicyAlertMsgRef.classList.remove('d_none');
    privacyPolicyEmptyBoxSvgRef.classList.remove('d_none');
    privacyPolicyCheckedBoxSvgRef.classList.add('d_none');
}

/**
 * Update the form send button state based on current validation flags.
 * @returns {void}
 */
function checkFormStatus() {
    if (!inputNameIsChecked || !inputEmailIsChecked || !textareaIsChecked || checkCounter == 0) {
        sendMessageBtnRef.classList.remove('send-message-btn-active');
        readyToSendMsg = false;
        return;
    }

    if (inputNameIsChecked && inputEmailIsChecked && textareaIsChecked && checkCounter == 1) {
        sendMessageBtnRef.classList.add('send-message-btn-active');
        readyToSendMsg = true;
    }
}

sendMessageBtnRef?.addEventListener('click', async (event) => {
    event.preventDefault();
    userFeedbackForm();
    if(!readyToSendMsg) return;
    const formData = {
        name: inputNameRef.value.trim(),
        email: inputEmailRef.value.trim(),
        message: textareaMessageRef.value.trim()
    };
    await tryPostMessage(formData);
});

/**
 * Show feedback for invalid form fields before submit.
 * @returns {void}
 */
function userFeedbackForm() {
    if (!inputNameIsChecked) {
        markNameInputfieldRed();
    }
    if (!inputEmailIsChecked) {
        markEmailInputfieldRed();
    }
    if (!textareaIsChecked) {
        markMessageTextareaRed();
    }
    if (checkCounter == 0) {
        markCheckboxRed();
    }
}

/**
 * Send the contact form data to the backend endpoint.
 * @param {ContactFormData} formData - The data payload to send.
 * @returns {Promise<void>}
 */
async function tryPostMessage(formData) {
    try {
        const response = await fetch("https://gross-david.de/contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        checkData(data);
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again later.");
    }
}

/**
 * Handle the backend response after submitting the form.
 * @param {{ success: boolean, error?: string }} data - Response payload.
 * @returns {void}
 */
function checkData(data) {
    if (data.success) {
        succesSendMsgRef.classList.remove('d_none');
        resetInputValues();
        resetCheckbox();
        resetNameInputfield();
        resetEmailInputfield();
        resetMessageTextarea();
        checkFormStatus();
    } else {
        alert("Error: " + data.error);
    }
    setTimeout(() => {
        succesSendMsgRef.classList.add('d_none');
    }, 2000)
}

/**
 * Reset the form input values and validation flags.
 * @returns {void}
 */
function resetInputValues() {
    inputNameRef.value = "";
    inputEmailRef.value = "";
    textareaMessageRef.value = "";
    inputNameIsChecked = false;
    inputEmailIsChecked = false;
    textareaIsChecked = false;
}

/**
 * Reset the privacy checkbox UI to the default unchecked state.
 * @returns {void}
 */
function resetCheckbox() {
    privacyPolicyEmptyBoxSvgRef.classList.remove('d_none');
    privacyPolicyCheckedBoxSvgRef.classList.add('d_none');
    checkCounter = 0;
}