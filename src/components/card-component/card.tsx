import React, { InputHTMLAttributes } from 'react';
import '../../App.css';
import './card.css';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { CardProps } from '@mytypes/Card'
import { Note } from '@mytypes/Note'

//UI imports
import FormTextFieldPopUp from '../CommonUI'


const Card = ({ note, removeNote, editNote }: CardProps) => {
	// console.log(note);
	const [open, setOpen] = React.useState<boolean>(false);
	const [editedContent, setEditedContent] = React.useState(note.content);

  
	const handleClose = () => {
	  setEditedContent(note.content)
	  setOpen(false);
	};

	const handleFieldChange = (e: any)=>{
		setEditedContent(e.target.value)
	}

	const handleSubmit = async ()=>{
		let newNote: Partial<Note> = {};
		newNote.id = editedContent
		// const obj = await new Promise((res,err)=>{
		// 	({noteId: editedContent})
		// 	res("Async")
		// })
		editNote(newNote);
		setOpen(false);
	}

	return (
		<div className='cardContainer'>
			<p className='regular-text'>{note.content} </p>
			<button className='action-btn' onClick={() => {setOpen(true)}}>
				<EditIcon fontSize='small' />
			</button>
			<FormTextFieldPopUp
				open={open}
				handleClose={handleClose}
				handleAccept={handleSubmit}
				handleFieldChange={handleFieldChange}
				title={"Editá tu nota"}
				textCancelBtn={"Editar"}
				textAcceptBtn={"Cancelar"}
				value={editedContent}
			/>
			<button className='action-btn' onClick={() => removeNote(note.id)}>
				<CloseIcon fontSize='small' />
			</button>
		</div>
	);
};

export { Card };
