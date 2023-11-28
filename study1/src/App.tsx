import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let persons = [
    {name: 'Ann', age: 16},
    {name: 'Jane', age: 18},
    {name: 'John', age: 20}
  ];

  let td1 = React.createElement("td", null, "이름");
  let td2 = React.createElement("td", null, "나이");
  let tr = React.createElement("tr", null, td1, td2);
  let trlist = [tr];
  for (let person of persons) {
    td1 = React.createElement("td", null, person.name);
    td2 = React.createElement("td", null, person.age);
    tr = React.createElement("tr", null, td1, td2);
    trlist.push(tr);
  }
  let table = React.createElement("table", null, trlist);
  return table;
}

export default App;