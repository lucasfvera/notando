import React, { useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import * as firestore from 'firebase/firestore';
import { FIREBASE_APP_CONFIG } from '../../config/config.js';

//types
import { Note } from '@mytypes/Note';

import { UserContext, LoadingContext, CardList, Form } from '../index';

// Initialize Firebase services (it's more than just the DB) and store a reference
const firebaseApp = initializeApp(FIREBASE_APP_CONFIG);

// Get a reference to the realtime database
const notesDB = firestore.getFirestore(firebaseApp);

const Home: React.FunctionComponent = () => {
	const [user, setUser] = useContext(UserContext);
	const [loading, setLoading] = useContext(LoadingContext);

	const [numberOfRenders, setNumberOfRenders] = useState<number>(0);
	const [notes, setNotes] = useState<Note[]>([]);

	useEffect(() => {
		const fetchNotes = async () => {
			const qs = firestore.query(firestore.collection(notesDB, 'notes'));
			const notes_docs = await firestore.getDocs(qs);
			const notes = [] as Note[];
			notes_docs.forEach((doc) =>
				notes.push({ id: doc.id, content: doc.data()['content'] })
			);

			setNotes(notes);
		};

		fetchNotes();
	}, []);

	const addNote = async (content: string) => {
		const note = await firestore
			.addDoc(firestore.collection(notesDB, 'notes'), {
				content: content,
			})
			.then((res) =>
				setNotes((prevNotes) => [
					...prevNotes,
					{ id: res.id, content: content },
				])
			);
		// notesDatabase.push(content);
		// cambio este estado para que vuelva a ejecutarse el useEffect y q cargue de nuevo las notas de la base de datos
		// setNumberOfRenders(numberOfRenders + 1);

		// .then(e=>
		//   {
		//     // console.log(e.path.pieces_[1]) -> acá tengo la id de la nota recien agregada
		//     setNotes(prevNotes => [...prevNotes,{id:e.path.pieces_[1],content}],console.log("Note added!"))
		//   })
	};

	//---borro una nota
	const removeNote = (id: string) => {
		if (window.confirm('¿Eliminar la nota?')) {
			// notesDatabase.child(id).remove();
			//Hago q se ejecute devuelta el loadNotes()
			setNumberOfRenders(numberOfRenders + 1);
		}
	};

	//---EDITAR NOTA
	const editNote = (newContent: string) => {
		// notesDatabase.update(newContent);
		setNumberOfRenders(numberOfRenders + 1);
	};

	return (
		<div className="bodyContainer">
			<div className="centerContainer">
				<h3 className="subheader-text">Tus notas</h3>
				<CardList
					notes={notes}
					removeNote={removeNote}
					editNote={editNote}
				/>
			</div>
			<div className="footerContainer">
				<Form addNote={addNote} />
			</div>
		</div>
	);
};

export default Home;
