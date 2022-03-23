import React from "react";

function Persons({person}) {
  return (
    <div>
      <h2>
        ID: {person.id}, Name: {person.name}, Age: {person.age}, Skill:{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Persons;
