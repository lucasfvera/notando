import React from 'react'
import {Card, EmptyCard} from '../index.js'
import './cardList.css'

const CardList = props => {
    const {notes, removeNote} = props;
    return (
        <ul className='cardListContainer'>
            {
                !notes.length?
                    <EmptyCard />
                :

                    notes.map(e => (
                        // console.log('mapeo de notes',e)
                        <Card key={e.id} note={e} removeNote={removeNote} />
                ))
            }
            
		</ul>
    )
}

export {CardList}
