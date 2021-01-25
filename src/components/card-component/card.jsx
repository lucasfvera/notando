import React from 'react';
import '../../App.css';
import './card.css';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Card = ({ note, removeNote, editNote }) => {
	// console.log(note);
	const [open, setOpen] = React.useState(false);
	const [editedContent, setEditedContent] = React.useState(note.content);
	let newNote = {}	
  
	const handleClose = () => {
	  setEditedContent(note.content)
	  setOpen(false);
	};

	const handleFieldChange = (e)=>{
		setEditedContent(e.target.value)
	}

	const handleSubmit = async ()=>{
		newNote[note.id] = editedContent
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
			<Dialog open={open} onClose={()=>handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Editing note</DialogTitle>
				<DialogContent>
					{/* <DialogContentText>
					To subscribe to this website, please enter your email address here. We will send updates
					occasionally.
					</DialogContentText> */}
					<TextField
					autoFocus
					margin="dense"
					id="note"
					label="Note content"
					type="text"
					value={editedContent}
					onChange={handleFieldChange}
					fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
					Cancel
					</Button>
					<Button onClick={handleSubmit} variant='contained' disableElevation color="primary">
					Edit
					</Button>
				</DialogActions>
			</Dialog>
			<button className='action-btn' onClick={() => removeNote(note.id)}>
				<CloseIcon fontSize='small' />
			</button>
		</div>
	);
};

export { Card };
