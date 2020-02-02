import React, { useState } from 'react';

// import { Container } from './styles';

import Attribute from '../Attribute';
import Points from '../Points';

export default function Characteristics({
  strength,
  setStrength,
  skill,
  setSkill,
  constitution,
  setConstitution,
  protection,
  setProtection,
  firePower,
  setFirePower,
  experience,
  setExperience,
}) {
  const [lifePoints, setLifePoints] = useState(1);
  const [magicPoints, setMagicPoints] = useState(1);
  const [lostLifePoints, setLostLifePoints] = useState(0);
  const [lostMagicPoints, setLostMagicPoints] = useState(0);

  function updateConstitution(value) {
    setConstitution(value);
    setLifePoints(value ? value * 5 : 1);
    setMagicPoints(value ? value * 5 : 1);
  }

  return (
    <div className="caracteristicas col-xs-12 col-sm-6">
      <h2>Características</h2>

      <Attribute
        name="strength"
        label="Força"
        value={strength}
        setAttribute={setStrength}
        experience={experience}
      />

      <Attribute
        name="skill"
        label="Habilidade"
        value={skill}
        setAttribute={setSkill}
        experience={experience}
      />

      <Attribute
        name="constitution"
        label="Resistência"
        value={constitution}
        setAttribute={updateConstitution}
        experience={experience}
      />

      <Attribute
        name="protection"
        label="Armadura"
        value={protection}
        setAttribute={setProtection}
        experience={experience}
      />

      <Attribute
        name="firePower"
        label="Poder De Fogo"
        value={firePower}
        setAttribute={setFirePower}
        experience={experience}
      />

      <div className="pontos">
        <Points
          points={lifePoints}
          lost={lostLifePoints}
          setLostPoints={setLostLifePoints}
          name="lifePoints"
        >
          Pontos de <span>v</span>ida
        </Points>

        <Points
          points={magicPoints}
          lost={lostMagicPoints}
          setLostPoints={setLostMagicPoints}
          name="magicPoints"
        >
          Pontos de <span>m</span>agia
        </Points>

        <Points points={experience} setPoints={setExperience} name="experience">
          Pontos de <span>e</span>xperiência
        </Points>
      </div>
    </div>
  );
}
