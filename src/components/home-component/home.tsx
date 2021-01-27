import React, {useContext, useState, useEffect} from 'react'
import firebase from "firebase/app";
import "firebase/database";
import { DB_FIREBASE } from "../../config/config.js";

import { UserContext, LoadingContext, CardList, Form } from '../index'

type Note = {
    id: string;
    content: string
}


//---inicio la base de datos y guardo la referencia en database
firebase.initializeApp(DB_FIREBASE);
//esta referencia es a la base de datos en tiempo real
const notesDatabase = firebase.database().ref("/notes/");

export const Home: React.FunctionComponent = ()=>{
    const [user, setUser] = useContext(UserContext);
    const [loading, setLoading] = useContext(LoadingContext);

    const [numberOfRenders, setNumberOfRenders] = useState(0);
    const [notes, setNotes] = useState<Note[]>([]);


    const loadNotes = async () => {
        const nuevasNotas: Note[] = [];
        const promise1 = new Promise((resolve,reject)=>{
            notesDatabase.on("value", (element) => {
                if(!element.numChildren()) resolve(nuevasNotas);
            })
            notesDatabase.on("child_added", (element) => {
                if(element.key){
                    nuevasNotas.push({
                    id: element.key,
                    content: element.val(),
                    });
                resolve(nuevasNotas);
                }
            })
        });
        await promise1.then(res=>setNotes(res as Note[]))
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
    const addNote = (content: string) => {
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
    const removeNote = (id: string) => {
    if(window.confirm("¿Eliminar la nota?")){

        notesDatabase.child(id).remove();
        //Hago q se ejecute devuelta el loadNotes()
        setNumberOfRenders(numberOfRenders + 1)
    }
    };
    
    //---EDITAR NOTA
    const editNote = (newContent: string)=>{
    notesDatabase.update(newContent)
    setNumberOfRenders(numberOfRenders + 1)
    }
    
    return (
        <div className='bodyContainer' >
            <div className="centerContainer">
                <h3 className="subheader-text">Tus notas</h3>
                <CardList notes={notes} removeNote={removeNote} editNote={editNote}/>
            </div>
            <div className="footerContainer">
                <Form addNote={addNote} />
            </div>
        </div>
    )
}



