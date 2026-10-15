import React from 'react';
import Evenements from './Evenements';

function Expert({ expert }) {
  return (
    <li>
      <b>{expert.nom_complet}</b>
      <Evenements evenements={expert.événements} />
    </li>
  );
}

export default Expert;