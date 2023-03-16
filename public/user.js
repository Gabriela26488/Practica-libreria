const {Schema, model } = require('mongoose')


const UsuarioSchema = Schema({
   nombre:{ 
      type: String, 
      require:true, 
   },
   email:{ 
      type: String, 
      require:true, 
      unique:true
   },
   telefono:{ 
      type: String, 
      require:true},
});

//const Usuario = mongoose.model('User', UserSchema )

module.exports = model( 'Usuarios', UsuarioSchema);