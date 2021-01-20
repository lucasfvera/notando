import React from 'react'
import './emptyCard.css'

const EmptyCard = () => {
    const focusInput = ()=>{
        document.getElementsByClassName("add-note-field")[0].focus()
    }
    return (
        <div onClick={()=>focusInput()} className='emptyCardContainer'>
            Crea tu primer tarea
        </div>
    )
}

export {EmptyCard}
