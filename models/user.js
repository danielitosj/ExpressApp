// Incluimos los modulos que vamos a utilizar
var mongoose = require('mongoose');

// Definimos el Schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  created: {
    type: Date,
    default: Date.now
  }
});

// Exportamos el módulo
module.exports = mongoose.model('User', userSchema);