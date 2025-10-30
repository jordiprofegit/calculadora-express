const express = require('express');
const router = express.Router();

// Mostro el formulari
router.get("/", (req, res) => {
    res.render('calculadora');
});

// Gestiono el formulari
router.post("/", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operacio = req.body.operacio;
    
    let resultat;
    let operacioRealitzada;
    let simbolOperacio;

    // Realitzar l'operació seleccionada
    switch(operacio) {
        case 'suma':
            resultat = num1 + num2;
            operacioRealitzada = 'Suma';
            simbolOperacio = '+';
            break;
        case 'resta':
            resultat = num1 - num2;
            operacioRealitzada = 'Resta';
            simbolOperacio = '-';
            break;
        case 'multiplicacio':
            resultat = num1 * num2;
            operacioRealitzada = 'Multiplicació';
            simbolOperacio = '×';
            break;
        case 'divisio':
            if (num2 === 0) {
                resultat = 'Error: No es pot dividir per zero';
                operacioRealitzada = 'Divisió';
                simbolOperacio = '÷';
            } else {
                resultat = num1 / num2;
                operacioRealitzada = 'Divisió';
                simbolOperacio = '÷';
            }
            break;
        default:
            resultat = 'Operació no vàlida';
            operacioRealitzada = 'Error';
            simbolOperacio = '?';
    }

    // Renderitzar la vista amb el resultat
    res.render('calculadora', {
        num1: num1,
        num2: num2,
        resultat: resultat,
        operacioRealitzada: operacioRealitzada,
        simbolOperacio: simbolOperacio
    });
});

module.exports = router;