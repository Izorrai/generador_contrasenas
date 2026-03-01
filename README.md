# generador_contrasenas# 

Este proyecto es un Generador de Contraseñas robusto y altamente personalizable desarrollado en JavaScript puro (Vanilla JS). El objetivo principal es ofrecer una herramienta que combine facilidad de uso con estándares de seguridad modernos.

**🔗 Repositorio GitHub:** (https://github.com/Izorrai/generador_contrasenas.git)

## 🚀 Características Principales
- **Criterios de Seguridad:** Permite definir la longitud (8-20 caracteres) y combinar mayúsculas, minúsculas, números y caracteres especiales.
- **Evaluador de Fuerza en Tiempo Real:** Implementa una lógica de puntuación que clasifica la contraseña como "Débil", "Media" o "Fuerte", proporcionando feedback visual instantáneo (colores y barra de progreso).
- **Copiado al Portapapeles:** Integración con la API `globalThis.navigator.clipboard` para una experiencia de usuario fluida.
- **Mantenibilidad:** Código refactorizado para cumplir con la regla **S6353** de SonarQube mediante el uso de expresiones regulares (Regex) concisas y optimizadas.

## 🛠️ Tecnologías Utilizadas
- **HTML5/CSS3:** Diseño con estética "Brutalista" centrado en la legibilidad.
- **JavaScript (ES6+):** Lógica modular exportable para tests unitarios.
- **Jest:** Framework de testing para asegurar la fiabilidad del algoritmo de fuerza.

## 🧪 Testing y Calidad
Para verificar la lógica de puntuación y generación, ejecuta:
```bash
npm test tests/password.test.js