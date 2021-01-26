import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import * as components from "./components/index.js";
import firebase from "firebase/app";
import "firebase/database";
import { DB_FIREBASE } from "./config/config.js";
import {UserContextProvider} from "./components/index.js";

//instalo firebase con "npm i firebase"

const { CardList, Form, LoginForm, Home } = components;

//---inicio la base de datos y guardo la referencia en database
firebase.initializeApp(DB_FIREBASE);
//esta referencia es a la base de datos en tiempo real
const notesDatabase = firebase.database().ref("/notes/");

function App() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  const loadNotes = async () => {
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
    });
	await promise1.then(res=>setNotes(res))
	setLoading(false);
  };


  useEffect(() => {
    loadNotes();
    console.log("Effect completed!");
  }, [numberOfRenders]);

  // //---agrego una nota ---DEPRECATED
  // const addNote2 = (content) => {
  //   notesDatabase.push().set({ content });
  //   notesDatabase.on("child_added", (el) => {
  //   // console.log(el.val());
	//   // console.log(el.key);
	//   // console.log(content);
	//   if(el.val().content===content){
	// 	  setNotes([...notes,{id:el.key,content}],console.log("Note added!"))
	//   }
  //   });
  //   // setNotes([...notes, { id: notes.length, content: content }]);
  // };

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
    if(window.confirm("¿Eliminar la nota?")){

      notesDatabase.child(id).remove();
      //Hago q se ejecute devuelta el loadNotes()
      setNumberOfRenders(numberOfRenders + 1)
    }
  };

  //---EDITAR NOTA
  const editNote = (newContent)=>{
    notesDatabase.update(newContent)
    setNumberOfRenders(numberOfRenders + 1)
  }



  if (loading) {
    return <div style={{textAlign: 'center'}}>Cargando</div>;
  } else {
    return (
      <UserContextProvider>
        <div className="appContainer">
          <div className="headerContainer">
            <h1 className="header-text primary-text-color">Notando</h1>
            <h4 className="subheader-text primary-text-color">
              Crea notas y mantené al día tus listas
            </h4>
          </div>

          <LoginForm />
          <Home />
        </div>
      </UserContextProvider>

    );
  }
}

export default App;
