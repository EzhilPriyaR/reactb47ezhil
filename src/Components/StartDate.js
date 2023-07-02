import  { React, useState } from 'react'

function StartDate() {
    let defaultDate = new Date()

    const [date, setDate] = useState(defaultDate)

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
  return (
    <input type="date" value={date.toLocaleDateString('en-CA')} onChange={onSetDate} />
  )
}

export default StartDate