import React from 'react';
import '../../App.css';
import './card.css';

const Card = props => {
	const { note, removeNote } = props;
	// console.log(note);

	return (
		<div className='cardContainer'>
			<p className='regular-text'>{note.content} </p>
			<button className='delete-btn' onClick={() => removeNote(note.id)}>
				X
			</button>
		</div>
	);
};

export { Card };
