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
console.log(notesDatabase);

function App() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  const loadNotes = async () => {
    // console.log("Adentro de loadNotes");
	const nuevasNotas = [];
	const promise1 = new Promise((resolve,reject)=>{
		notesDatabase.on("value", (element) => {
			if(!element.numChildren()) resolve(nuevasNotas);
		})
		notesDatabase.on("child_added", (element) => {
		  	nuevasNotas.push({
				id: element.key,
				content: element.val(),
		  	});
			resolve(nuevasNotas);
		})
    //   console.log('actulizando notas: ', nuevasNotas, loading);
	  //   setNotes(nuevasNotas,setLoading(false))
    });
    // setNotes(nuevasNotas, () => setLoading(false));
	// console.log("Saliendo de loadNotes");
	await promise1.then(setNotes(nuevasNotas))
	setLoading(false);
	// return nuevasNotas;
  };


  useEffect(() => {
    // console.log('antes de load notes',notes);
    loadNotes();
    console.log("Effect completed!");
    // console.log('despues de load notes',notes);
  }, [numberOfRenders]);

  //---agrego una nota
  const addNote2 = (content) => {
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

  //---PRUEBA ADD NOTE
  const addNote = (content) => {
    notesDatabase.push(content)
    // cambio este estado para que vuelva a ejecutarse el useEffect y q cargue de nuevo las notas de la base de datos
    setNumberOfRenders(numberOfRenders + 1)

    
      // .then(e=>
      //   {
      //     // console.log(e.path.pieces_[1]) -> acá tengo la id de la nota recien agregada
      //     setNotes(prevNotes => [...prevNotes,{id:e.path.pieces_[1],content}],console.log("Note added!"))
      //   })
  }

  //---borro una nota
  const removeNote = (id) => {
    notesDatabase.child(id).remove();
    //Hago q se ejecute devuelta el loadNotes()
    setNumberOfRenders(numberOfRenders + 1)

    // const newNotes = notes.filter((nota) => nota.id !== id);
    // setNotes(newNotes);
  };

  //---EDITAR NOTA
  const editNote = (newContent)=>{
    notesDatabase.update(newContent)
    setNumberOfRenders(numberOfRenders + 1)
  }



  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="appContainer">
        <div className="headerContainer">
          <h1 className="header-text primary-text-color">Notando</h1>
          <h3 className="subheader-text primary-text-color">
            Crea notas y mantené al día tus listas
          </h3>
          <h1>Chau</h1>
        </div>

        <div className="bodyContainer">
          <h3 className="subheader-text">Tus notas</h3>
          <CardList notes={notes} removeNote={removeNote} editNote={editNote}/>
        </div>

        <div className="footerContainer">
          <Form addNote={addNote} />
        </div>
      </div>
    );
  }
}

export default App;
