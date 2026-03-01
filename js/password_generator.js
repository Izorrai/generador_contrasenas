
export const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
export const numbers = "0123456789";
export const specialCharacters = "!@#$%^&*()_-+=<>?/{}[]~";

export function evaluarFuerza(password) {
    let fuerza = 0;
    
    
    if (password.length >= 10) fuerza++; 
    if (/[A-Z]/.test(password)) fuerza++;
    if (/[a-z]/.test(password)) fuerza++;
    if (/\d/.test(password)) fuerza++;
    if (/\W|_/.test(password)) fuerza++;

   
    if (fuerza <= 1) return { texto: "Débil", clase: "fuerza-debil" };
    if (fuerza <= 3) return { texto: "Media", clase: "fuerza-media" };
    return { texto: "Fuerte", clase: "fuerza-fuerte" };
}


if (typeof document !== 'undefined') {
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
        
        const copyBtn = document.getElementById("copyBtn");
        const strengthText = document.getElementById("strengthText");
        const strengthBar = document.getElementById("strengthBar");

        const uppercaseCheckbox = document.getElementById("uppercase");
        const lowercaseCheckbox = document.getElementById("lowercase");
        const numbersCheckbox = document.getElementById("numbers");
        const specialCheckbox = document.getElementById("special");

       
        generateBtn.addEventListener("click", (e) => { e.preventDefault(); generarContraseña(); });
        generateAnotherBtn.addEventListener("click", (e) => { e.preventDefault(); generarContraseña(); });
        closeModalBtn.addEventListener("click", cerrarModal);
        acceptErrorBtn.addEventListener("click", cerrarModal);

       
        copyBtn.addEventListener("click", async () => {
            const password = passwordOutput.textContent;
            if (!password) return;

            try {
                
                await globalThis.navigator.clipboard.writeText(password);
                
                const originalText = copyBtn.textContent;
                copyBtn.textContent = "¡Copiado!";
                copyBtn.style.backgroundColor = "#d4edda"; 
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = "";
                }, 2000);
            } catch (err) {
                console.error("Error al copiar al portapapeles:", err);
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
            if (useUppercase) characters += uppercaseLetters;
            if (useLowercase) characters += lowercaseLetters;
            if (useNumbers) characters += numbers;
            if (useSpecial) characters += specialCharacters;

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }

            
            passwordOutput.textContent = password;
            
          
            const fuerza = evaluarFuerza(password);
            strengthText.textContent = fuerza.texto;
            strengthBar.className = `strength-bar ${fuerza.clase}`;

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
}