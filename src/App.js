import React, { useEffect, useState } from "react";
import "./App.css";
import * as components from "./components/index.js";
import firebase from "firebase/app";
import "firebase/database";
import { DB_FIREBASE } from "./config/config.js";

//instalo firebase con "npm i firebase"

const { CardList, Form } = components;

//---inicio la base de datos y guardo la referencia en database
firebase.initializeApp(DB_FIREBASE);
//esta referencia es a la base de datos en tiempo real
const notesDatabase = firebase.database().ref("/notes/");

function App() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([
    // { id: '0', content: 'item1' },
    // { id: '1', content: 'item2' },
    // { id: '2', content: 'item3' },
    // { id: '3', content: 'item4' },
  ]);
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  const loadNotes = async () => {
    console.log("Adentro de loadNotes");
	const nuevasNotas = [];
	const promise1 = new Promise((resolve,reject)=>{
		notesDatabase.on("child_added", (element) => {
		  nuevasNotas.push({
			id: element.key,
			content: element.val().content,
		  });
		resolve(nuevasNotas);
	})
    //   console.log('actulizando notas: ', nuevasNotas, loading);
	//   setNotes(nuevasNotas,setLoading(false))
	  
    });
    // setNotes(nuevasNotas, () => setLoading(false));
	console.log("Saliendo de loadNotes");
	await promise1.then(setNotes(nuevasNotas))
	setLoading(false);
	// return nuevasNotas;
  };

  //---DEBUG FUNCTION
  const debugTest = () => {
    console.log("This is a DEBUG number: ", numberOfRenders);
    setNumberOfRenders(numberOfRenders + 1);
  };

  useEffect(() => {
    // console.log('antes de load notes',notes);
    loadNotes();
    // console.log('despues de load notes',notes);
  }, []);

  //---agrego una nota
  const addNote = (content) => {
    notesDatabase.push().set({ content });
    notesDatabase.on("child_added", (el) => {
    // console.log(el.val());
	// console.log(el.key);
	// console.log(content);
	  if(el.val().content===content){
		  setNotes([...notes,{id:el.key,content}],console.log("Note added!"))
	  }
    });
    // setNotes([...notes, { id: notes.length, content: content }]);
  };

  //---borro una nota
  const removeNote = (id) => {
    // console.log("Id de la nota", id);
    notesDatabase.child(id).remove();
    const newNotes = notes.filter((nota) => nota.id !== id);
    setNotes(newNotes);
  };

  if (loading) {
    // console.log("Entrando a loadNotes",loading);
    // console.log("Afuera de loadNotes",loading);
    return <div>Loading</div>;
  } else {
    return (
      <div className="appContainer">
        <div className="headerContainer">
          <h1 className="header-text">Notando</h1>
          <h3 className="subheader-text">
            Crea notas y mantené al día tus listas
          </h3>
        </div>

        <div className="bodyContainer">
          <h3 className="subheader-text">Tus notas</h3>
          <CardList notes={notes} removeNote={removeNote} />
        </div>

        <div className="footerContainer">
          <Form addNote={addNote} />
        </div>
      </div>
    );
  }
}

export default App;
