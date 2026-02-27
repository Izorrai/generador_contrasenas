document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form_password");
    const lengthInput = document.getElementById("lengthInput");
    const passwordOutput = document.getElementById("passwordOutput");
    const errorBox = document.getElementById("error");

    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCheckbox = document.getElementById("special");

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]~";

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const length = Number.parseInt(lengthInput.value, 10);
        const useUppercase = uppercaseCheckbox.checked;
        const useLowercase = lowercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSpecial = specialCheckbox.checked;

        
            
        if (!useUppercase && !useLowercase && !useNumbers && !useSpecial) {
            mostrarError("Debes seleccionar al menos una opción.");
            return;
        }

        ocultarError();

        
        let characters = "";
        if (useUppercase) {
            characters = characters + uppercaseLetters;
        }
        if (useLowercase) {
            characters = characters + lowercaseLetters;
        }
        if (useNumbers) {
            characters = characters + numbers;
        }
        if (useSpecial) {
            characters = characters + specialCharacters;
        }

       
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password = password + characters[randomIndex];
        }

        
        passwordOutput.textContent = password;
        const resultSection = document.getElementById("resultSection");
        resultSection.classList.remove("hidden");
    });

    function mostrarError(mensaje) {
        errorBox.textContent = mensaje;
        errorBox.classList.remove("hidden");
    }

    function ocultarError() {
        errorBox.textContent = "";
        errorBox.classList.add("hidden");
    }
});