import { useEffect, useState } from 'react'
import { ListaTarjetas } from './ListaTarjetas'

export const TraerPersonas = () => {

    const [personas, setPersonas] = useState([])
    
  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/personas')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPersonas(data)
      } catch (error) {
        console.error('Error fetching persons:', error)
      }
    }
    fetchPersonas()
  }, [])

    return (
        <ListaTarjetas personas={personas} />
    )
}

export default TraerPersonas;