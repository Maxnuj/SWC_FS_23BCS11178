const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");

const maxLimit = 200;

textInput.addEventListener("input", () => {

    let currentLength = textInput.value.length;

    let remaining = maxLimit - currentLength;

    charCount.textContent = `${remaining} characters remaining`;

    // Remove old classes
    charCount.classList.remove("warning", "danger");

    // 80% warning
    if(currentLength >= 160 && currentLength < 180){
        charCount.classList.add("warning");
    }

    // 90% warning
    else if(currentLength >= 180){
        charCount.classList.add("danger");
    }
});

submitBtn.addEventListener("click", () => {

    const text = textInput.value.trim();

    if(text === ""){
        alert("Please enter some text!");
        return;
    }

    alert("Submitted Successfully!");

    textInput.value = "";
    charCount.textContent = "200 characters remaining";
    charCount.classList.remove("warning", "danger");
});
