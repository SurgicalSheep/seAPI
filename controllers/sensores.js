const express = require("express");
const router = express.Router();
let ledQuarto = false;
let ledSala = false;
let ledOutside = false;
let portas = false;
let ventoinha = false;
let ledAquecer = false;
let janela = false;
let temperatura = 0;
let co2 = 0;
let humidity = 0;

router.get("/estado", async (req, res, next) => {
    res.send({data:{ledQuarto, ledSala, ledOutside, portas, ventoinha, ledAquecer, janela}})
});

router.get("/dados", async (req, res, next) => {
    res.send({data:{temperatura, co2, humidity}})
});

router.put("/dados", async (req, res, next) => {
    try {
        let {temperatura,co2,humidity} = req.body;
    temperatura = temperatura;
    co2 = co2;
    humidity = humidity;
    res.send({data:"Dados atualizados com sucesso!"})
    } catch (error) {
        next(error);
    }
    
});

router.put("/estado", async (req, res, next) => {
    try {
        let {ledQuarto, ledSala, ledOutside, portas, ventoinha, ledAquecer, janela} = req.body;
        ledQuarto = ledQuarto;
        ledSala = ledSala;
        ledOutside = ledOutside;
        portas = portas;
        ventoinha = ventoinha;
        ledAquecer = ledAquecer;
        janela = janela;
        res.send({data:"Estado atualizado com sucesso!"})
    } catch (error) {
        next(error);
    }

});
module.exports = router;