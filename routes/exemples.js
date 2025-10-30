const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
 res.send('<h1>Hello World!!</h1>')
});

router.get('/nom', (req, res) => {
 res.json({ nom: 'Patata' })
});

router.get('/hola/:nom/:cognoms', (req, res) => {
 const nom = req.params.nom
 const cognoms = req.params.cognoms


 var edat = req.query.edat
 if(!edat) {
   edat = "Desconeguda"
 }
 res.send(`<h1>Hola ${nom} ${cognoms} amb edat ${edat}!</h1>`)
});

router.post('/', (req, res) => {
 res.send('Got a POST request')
})


router.put('/user', (req, res) => {
 res.send('Got a PUT request at /user')
})


router.delete('/user', (req, res) => {
 res.send('Got a DELETE request at /user')
})

module.exports = router;