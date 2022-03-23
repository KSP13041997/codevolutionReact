import React from "react";
import Persons from "./Persons";

function NameList() {
  const persons = [
    { id: 1, name: "Jack", age: 20, skill: "Test" },
    { id: 2, name: "Martha", age: "16", skill: "Run" },
    { id: 3, name: "Steve", age: "32", skill: "Kat" },
  ];
  const personList = persons.map((person) => (
    <Persons key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
