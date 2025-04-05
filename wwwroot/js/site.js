
//document.addEventListener("DOMContentLoaded", function () {
//    if (window.initializeJsFunction) {
//        window.initializeJsFunction();
//    }
//});

//window.initializeJsFunction = function () {
//    console.log("JavaScript initialized after Blazor.");
//};


//Utilized in Other.razor to test JS functions
//JS functions help for smoother input 
   
function setInputToZeroIfEmpty(inputElement) {
    if (inputElement.dataset.active === "true" && !inputElement.value.trim()) {
        inputElement.value = "0"; // Set to zero if the input is empty or whitespace
    }
}



// focusElement used for autotab - current example in Counter.razor
window.focusElement = function (elementId) {
    let nextElement = document.getElementById(elementId);
    if (nextElement) {
        nextElement.focus();
    }
};

window.selectText = (element) => {
    if (element) {
        element.select();  // Selects the text in the input element
    }
};

window.selectTextBox = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.select(); // Selects the text inside the input or textarea
    }
};

// Function to gray out a range of elements (disable and change style)
window.grayOutElements = (elements) => {
    elements.forEach(element => {
        if (element) {
            element.disabled = true;  // Disable the element
            element.style.backgroundColor = "#f0f0f0";  // Set background to light gray
            element.style.color = "#a0a0a0";  // Optional: Set text color to light gray to make it appear grayed out
        }
    });
};

// Function to enable a range of elements (remove gray out)
window.enableElements = (elements) => {
    elements.forEach(element => {
        if (element) {
            element.disabled = false;  // Enable the element
            element.style.backgroundColor = "";  // Reset background color
            element.style.color = "";  // Reset text color
        }
    });
};
   


   


// THE FOLLOWING ARE NOT CURRENTLY USED


window.removeFocus = function (elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.blur(); // Removes focus
    }
};


window.moveNext = (event, nextId) => {
    if (event.key === "Enter") {
        document.getElementById(nextId)?.focus();
        event.preventDefault(); // Prevents form submission
    }
};


window.focusInput = (id) => {
    document.getElementById(id)?.focus();
};


