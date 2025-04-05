import React from 'react';

// Définition du type pour les propriétés
type GreetingProps = {
  name: string; // La prop 'name' est une chaîne de caractères
};

// Composant fonctionnel typé avec React.FC et les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
