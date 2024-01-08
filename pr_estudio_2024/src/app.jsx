import {React, useState} from 'react'
import { Request } from './dogsApi.jsx'

export function App () {
    const [dogFact,setDogFact] = useState('hecho de perritos')

    const handleDogFact = () =>{
        setDogFact (<Request/>)
        console.log('funciono')
        console.log(dogFact)
    }

    return(
    <main>
        <h1>app de perritos</h1>
        <button onClick={handleDogFact}>presioname</button>
        <div>{dogFact}</div>
    </main>
    )
}
