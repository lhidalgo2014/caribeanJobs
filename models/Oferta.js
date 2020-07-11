const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfertaSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },    
    primerApellido:{
        type: String,
        required: true
    }/*,  
    segundoApellido:{
        type: String,
        required: true
    }, 
    fechaNacimiento:{
        type: String,
        required: true
    }, 
    primerTelefono:{
        type: Number,
        required: true
    }, 
    segundoTelefono:{
        type: Number,
        required: true
    }, 
    correo:{
        type: String,
        required: true
    }, 
    provincia:{
        type: String,
        required: true
    }, 
    canton:{
        type: String,
        required: true
    }, 
    distrito:{
        type: String,
        required: true
    }, 
    usuario:{
        type: String,
        required: true
    }, 
    contrasena:{
        type: String,
        required: true
    }, 
    nombreProfesion:{
        type: String,
        required: true
    }, 
    anosProfesion:{
        type: Number,
        required: true
    }, 
    descripcionProfesion:{
        type: String,
        required: true
    },
    costoHora:{
        type: Number,
        required: true
    },    
    horarioDisponible:{
        type: String,
        required: true
    },  
    zonaTrabajo:{
        type: String,
        required: true
    }, 
    nombreReferencia:{
        type: String,
        required: true
    }, 
    telefonoReferencia:{
        type: Number,
        required: true
    }*/
});

module.exports = mongoose.model('Oferta',OfertaSchema);

module.exports.addOferta = function(nuevaOferta, callback){
    const pro = nuevaOferta.save(callback);
    console.log(pro);
}