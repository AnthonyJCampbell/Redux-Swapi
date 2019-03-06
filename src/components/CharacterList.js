import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {[].map(character => {
        return <Character key={character.name} character={character} />;
      })}
      HEY!
    </ul>
  );
};

export default CharacterList;
