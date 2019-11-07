var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Solucao
var ideacao = new Schema({

    ideiaAusenteCampo1: String,
    ideiaAusenteCampo2: String,
    ideiaConexaoCampo1: String,
    ideiaConexaoCampo2: String,
    ideiaOpenCampo1: String,
    ideiaOpenCampo2: String,
    ideiaFazerCampo1: String,
    ideiaFazerCampo2: String,
	clienteId: String

});

module.exports = mongoose.model('ideacao', ideacao);