
//document.addEventListener("DOMContentLoaded", function () {
//    if (window.initializeJsFunction) {
//        window.initializeJsFunction();
//    }
//});

//window.initializeJsFunction = function () {
//    console.log("JavaScript initialized after Blazor.");
//};

// focusElement used for autotab - current example in Counter.razor
window.focusElement = function (elementId) {
    let nextElement = document.getElementById(elementId);
    if (nextElement) {
        nextElement.focus();
    }
};



// THE FOLLOWING ARE NOT CURRENTLY USED
window.moveFocusTo = function (nextElementId) {
    let nextElement = document.getElementById(nextElementId);
    if (nextElement) {
        nextElement.focus();
    }
};

window.removeFocus = function (elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.blur(); // Removes focus
    }
};


window.selectText = (element) => {
    if (element) {
        element.select();  // Selects the text in the input element
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




//Utilized in Other.razor to test JS functions
//JS functions help for smoother input 