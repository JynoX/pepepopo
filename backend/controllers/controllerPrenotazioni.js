// controllers/controllerPrenotazioni.js
const Prenotazione = require('../models/prenotazione');

exports.creaPrenotazione = async (req, res) => {
  try {
    // Estrarre i dettagli della prenotazione dal corpo della richiesta    
    const { nome, data, orario } = req.body;

    if(nome === "" || data === "" || orario === ""){
      return res.status(400).json({status: "Bad Request", messaggio: "Bad Request"})
    }
    
    // Creare una nuova prenotazione utilizzando il modello Prenotazione
    const prenotazione = new Prenotazione({
      nome,
      data,
      orario,
    });

    // Salvare la prenotazione nel database
    await prenotazione.save();

    // Restituire una risposta di successo
    res.status(201).json({ messaggio: 'Prenotazione creata con successo' });
  } catch (errore) {
    // Gestire eventuali errori
    console.error(errore);
    res.status(500).json({ errore: 'Si è verificato un errore' });
  }
};