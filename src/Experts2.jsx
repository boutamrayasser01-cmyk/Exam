import React, { useState, useEffect } from 'react';
import Expert from './Expert';

function Experts2() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/experts2')
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {experts.map((expert) => (
        <Expert key={expert.id} expert={expert} />
      ))}
    </ul>
  );
}

export default Experts2;