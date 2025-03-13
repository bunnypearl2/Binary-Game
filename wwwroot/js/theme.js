window.applyTheme = (themeClass) => {
    document.body.classList.remove("dark-mode");
    if (themeClass === "dark-mode") {
        document.body.classList.add("dark-mode");
    }
};
