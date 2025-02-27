
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
//JS functions help for smoother input and use on mobile