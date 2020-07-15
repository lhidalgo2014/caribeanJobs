const express = require('express');
const router = express.Router();
//modelo de ofertas
const Oferta = require('../models/Oferta');


//@routes GET /post
//@desc get a post
router.get('/search/:id',async (req, res) =>{
    
    try{
        const post = await Oferta.findById(req.params.id);
        if(!post) throw Error('no item');
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({msg:"algo anda mal"})
    }
});


router.get('/search',async (req, res) =>{
    try{
        const posts = await Oferta.find(req.body.nombre);
        if(!posts) throw Error('no items');
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json({msg:"algo anda mal"})
    }
});


//@routes POST oferta
//registrar una oferta
router.post('/register', async (req, res) => {
    const nuevaOferta = new Oferta({
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        fechaNacimiento: req.body.fechaNacimiento,
        primerTelefono: req.body.primerTelefono,
        segundoTelefono: req.body.segundoTelefono,
        correo: req.body.correo,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        nombreProfesion: req.body.nombreProfesion,
        anosProfesion: req.body.anosProfesion,
        descripcionProfesion: req.body.descripcionProfesion,
        costoHora: req.body.costoHora,
        horarioDisponible: req.body.horarioDisponible,
        zonaTrabajo: req.body.zonaTrabajo,
        nombreReferencia: req.body.nombreReferencia,
        telefonoReferencia: req.body.telefonoReferencia
    });
    try{
        const post = await nuevaOferta.save();
        console.log(post);
        if(!post){
            res.json({success:false,msg:"Fallo al registrar"});
        }
        else{
            res.json({success:true,msg:"Registrado con exito"});
        }
    }catch(err){
        res.status(400).json({ msg:err })
    }
});

module.exports = router;