import './Searchbar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Searchbar() {
    const [term, setTerm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
    }
    const history = useHistory() 

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input 
            type="text"
            id='search'
            onChange={(e) => setTerm(e.target.value)}
            required
            />
        </form>
    </div>
  )
}

export default Searchbar