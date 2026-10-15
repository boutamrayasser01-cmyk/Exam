import React from 'react';

function Evenements({ evenements }) {
  const totalGeneral = evenements.reduce(
    (somme, ev) => somme + ev.cout_journalier * ev.durée, 0
  );

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Description</th>
          <th>Coût journalier</th>
          <th>Durée (jours)</th>
          <th>Coût Total Événement</th>
        </tr>
      </thead>
      <tbody>
        {evenements.map((ev, index) => (
          <tr key={index}>
            <td>{ev.thème}</td>
            <td>{ev.date_debut}</td>
            <td>{ev.date_fin}</td>
            <td>{ev.description}</td>
            <td>{ev.cout_journalier} DH</td>
            <td>{ev.durée}</td>
            <td>{ev.cout_journalier * ev.durée} DH</td>
          </tr>
        ))}
        <tr>
          <td colSpan="7">
            Total des coûts des événements assurés est : {totalGeneral} DH
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Evenements;