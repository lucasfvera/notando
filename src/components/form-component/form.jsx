import React, { useState } from 'react';
import './form.css';

const Form = props => {
	const { addNote } = props;
	const [noteContent, setNoteContent] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const handleChange = e => setNoteContent(e.target.value);
	
	const handleSubmit = e => {
		e.preventDefault();
		if (!noteContent) {
			setErrorMsg('La nota no puede estar vacía');
			return null;
		}
		addNote(noteContent);
		setNoteContent('');
		setErrorMsg('');
	};
	return (
		<form className='form-container' onSubmit={e => handleSubmit(e)}>
			<label className='label-container'>
				<p className='add-note-label'>Escribí tu nota</p>
				<span className='error-msg-text'>{errorMsg}</span>
				<input
					className='add-note-field'
					type='text'
					name='content'
					value={noteContent}
					onChange={e => handleChange(e)}
				></input>
			</label>
			<button type='submit' className='add-btn'>
				+
			</button>
		</form>
	);
};

export { Form };
