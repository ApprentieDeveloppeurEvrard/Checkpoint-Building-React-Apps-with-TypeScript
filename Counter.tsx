import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Déclaration de l'état 'count' typé en tant que nombre
  const [count, setCount] = useState<number>(0);

  // Fonction pour incrémenter le compteur
  const increment = (): void => {
    setCount(count + 1);
  };

  // Rendu du composant
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
