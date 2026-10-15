import React, { useState } from 'react';

function Formulaire() {
  const [form, setForm] = useState({
    theme: '', dateDebut: '', dateFin: '', cout: '', expert: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const d1 = new Date(form.dateDebut);
    const d2 = new Date(form.dateFin);
    const duree = Math.round((d2 - d1) / (1000 * 60 * 60 * 24)) + 1;
    const total = duree * Number(form.cout);

    setMessage(
      `L'expert : ${form.expert} assurera le thème : ${form.theme}, avec un coût journalier : ${form.cout} DH, pour une durée de : ${duree} jours, soit un coût total de : ${total}DH`
    );
  };

  return (
    <div>
      <fieldset>
        <legend>Formulaire de l'événement</legend>
        Thème : 
        <input type="text" name="theme" value={form.theme} onChange={handleChange} /><br />
        Date de début : 
        <input type="date" name="dateDebut" value={form.dateDebut} onChange={handleChange} /><br />
        Date de fin : 
        <input type="date" name="dateFin" value={form.dateFin} onChange={handleChange} /><br />
        Coût : 
        <input type="number" name="cout" value={form.cout} onChange={handleChange} /><br />
        Expert : 
        <input type="text" name="expert" value={form.expert} onChange={handleChange} /><br />
        <button onClick={handleConfirm}>Confirmer</button>
      </fieldset>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Formulaire;