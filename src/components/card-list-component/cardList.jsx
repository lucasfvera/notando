import React from 'react'
import {Card, EmptyCard} from '../index.js'
import './cardList.css'

const CardList = ({notes, removeNote, editNote}) => {
    return (
        <ul className='cardListContainer'>
            {
                !notes.length?
                    <EmptyCard />
                :

                    notes.map(e => (
                        // console.log('mapeo de notes',e)
                        <Card key={e.id} note={e} removeNote={removeNote} editNote={editNote}/>
                ))
            }
            
		</ul>
    )
}

export {CardList}
