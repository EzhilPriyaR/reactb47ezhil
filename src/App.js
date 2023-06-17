import React from 'react'

function Note({note}){
  return (<li>{note.content}</li>);
}

function App(props) {
  const { notes } = props;
  console.log(notes);
  return (
    <div>
      <h1>NOTES...</h1>
      <ul>
        {notes.map(note => <Note key = {note.id} note = {note}/>)}
      </ul>
    </div>
  )
}

export default App