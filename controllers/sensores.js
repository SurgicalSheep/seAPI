const express = require("express");
const router = express.Router();
var ledQuarto = false;
var ledSala = false;
var ledOutside = false;
var portas = false;
var ventoinha = false;
var ledAquecer = false;
var janela = false;
var temperatura = 0;
var co2 = 0;
var humidity = 0;

router.get("/estado", async (req, res, next) => {
    res.send({data:[{ledQuarto}, {ledSala}, {ledOutside}, {portas}, {ventoinha}, {ledAquecer}, {janela}]})
});

router.get("/dados", async (req, res, next) => {
    res.send({data:[{temperatura}, {co2}, {humidity}]})
});

router.put("/dados", async (req, res, next) => {
    try {
        let {Temperatura,Co2,Humidity} = req.body;
        if(Temperatura)
    temperatura = Temperatura;
    if(Co2)
    co2 = Co2;
    if(Humidity)
    humidity = Humidity;
    res.send({data:"Dados atualizados com sucesso!"})
    } catch (error) {
        next(error);
    }
    
});

router.put("/estado", async (req, res, next) => {
    try {
        let {LedQuarto, LedSala, LedOutside, Portas, Ventoinha, LedAquecer, Janela} = req.body;
        if(LedQuarto)
        ledQuarto = LedQuarto;
        if(LedSala)
        ledSala = LedSala;
        if(LedOutside)
        ledOutside = LedOutside;
        if(Portas)
        portas = Portas;
        if(Ventoinha)
        ventoinha = Ventoinha;
        if(LedAquecer)
        ledAquecer = LedAquecer;
        if(Janela)
        janela = Janela;
        res.send({data:"Estado atualizado com sucesso!"})
    } catch (error) {
        next(error);
    }

});
module.exports = router;