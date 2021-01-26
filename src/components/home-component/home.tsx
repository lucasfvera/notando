import React from 'react'


export const Home: React.FunctionComponent = ()=>{

    
    return (
    <div>
        <div className="bodyContainer">
            <h3 className="subheader-text">Tus notas</h3>
            <CardList notes={notes} removeNote={removeNote} editNote={editNote}/>
        </div>
        <div className="footerContainer">
            <Form addNote={addNote} />
        </div>
    </div>
            )
}



