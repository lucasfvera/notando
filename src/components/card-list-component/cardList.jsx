import React from 'react';
import { Card, EmptyCard } from '../index';
import * as Sentry from '@sentry/react';
import './cardList.css';

const CardList = ({ notes, removeNote, editNote }) => {
	return (
		<ul className="cardListContainer">
			<button
				onClick={() => {
					try {
						console.log(import.meta.env);
						unexistentfn();
					} catch (e) {
						console.error(
							`onClick fn in CardList component failed with error: ${e}`
						);
						Sentry.captureException(e);
					}
				}}
			>
				Break the world
			</button>
			{notes.length > 0 ? (
				notes.map((e) => (
					<Card
						key={e.id}
						note={e}
						removeNote={removeNote}
						editNote={editNote}
					/>
				))
			) : (
				<EmptyCard />
			)}
		</ul>
	);
};

export { CardList };
