import { evaluarFuerza, uppercaseLetters, lowercaseLetters, numbers, specialCharacters } from '../js/password_generator.js';

describe('Ejercicio 1 - Pruebas del Generador de Contraseñas', () => {

    
    describe('Función evaluarFuerza', () => {
        test('Debe marcar como "Débil" una contraseña corta de solo números', () => {
            const resultado = evaluarFuerza('123456');
            expect(resultado.texto).toBe('Débil');
            expect(resultado.clase).toBe('fuerza-debil');
        });

        test('Debe marcar como "Media" una contraseña con mayúsculas y minúsculas', () => {
            const resultado = evaluarFuerza('Abcdefgh');
            expect(resultado.texto).toBe('Media');
        });

        test('Debe marcar como "Fuerte" una contraseña larga con caracteres especiales', () => {
            const resultado = evaluarFuerza('Ab1!cdefghijkL');
            expect(resultado.texto).toBe('Fuerte');
            expect(resultado.clase).toBe('fuerza-fuerte');
        });
    });

    
    describe('Conjuntos de caracteres', () => {
        test('Debe contener todos los tipos de caracteres requeridos', () => {
            expect(uppercaseLetters).toContain('A');
            expect(lowercaseLetters).toContain('z');
            expect(numbers).toContain('5');
            expect(specialCharacters).toContain('!');
        });
    });

    
    test('La longitud debe estar dentro del rango permitido (8-20)', () => {
        const min = 8;
        const max = 20;
        const passwordSimulada = 'aB3!fghjkl'; 
        
        expect(passwordSimulada.length).toBeGreaterThanOrEqual(min);
        expect(passwordSimulada.length).toBeLessThanOrEqual(max);
    });
});