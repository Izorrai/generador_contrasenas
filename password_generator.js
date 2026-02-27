document.addEventListener("DOMContentLoaded", function() {
    const lengthInput = document.getElementById("lengthInput");
    const passwordOutput = document.getElementById("passwordOutput");
    const generateBtn = document.getElementById("generateBtn");
    const generateAnotherBtn = document.getElementById("generateAnotherBtn");
    const resultSection = document.getElementById("resultSection");
    const errorModal = document.getElementById("errorModal");
    const errorModalMessage = document.getElementById("errorModalMessage");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const acceptErrorBtn = document.getElementById("acceptErrorBtn");

    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCheckbox = document.getElementById("special");

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]~";

    generateBtn.addEventListener("click", function(e) {
        e.preventDefault();
        generarContraseña();
    });

    generateAnotherBtn.addEventListener("click", function(e) {
        e.preventDefault();
        generarContraseña();
    });

    closeModalBtn.addEventListener("click", function() {
        cerrarModal();
    });

    acceptErrorBtn.addEventListener("click", function() {
        cerrarModal();
    });

    
    errorModal.addEventListener("click", function(e) {
        if (e.target === errorModal) {
            cerrarModal();
        }
    });

    function generarContraseña() {
        const length = Number.parseInt(lengthInput.value, 10);
        const useUppercase = uppercaseCheckbox.checked;
        const useLowercase = lowercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSpecial = specialCheckbox.checked;

        if (length < 8 || length > 20) {
            mostrarError("La longitud debe estar entre 8 y 20 caracteres.");
            return;
        }

        if (!useUppercase && !useLowercase && !useNumbers && !useSpecial) {
            mostrarError("Debes seleccionar al menos una opción.");
            return;
        }

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
        resultSection.classList.remove("hidden");
        generateBtn.classList.add("hidden");
    }

    function mostrarError(mensaje) {
        errorModalMessage.textContent = mensaje;
        errorModal.classList.remove("hidden");
    }

    function cerrarModal() {
        errorModal.classList.add("hidden");
    }
});