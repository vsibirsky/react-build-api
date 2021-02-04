import React, { useState, useEffect } from "react"
import firebase from '../../firebase'
import axios from "axios"
import ProgramGrid from "./ProgramGrid"
import ProgramSearchBox from "../ui/ProgramSearchBox"


const FindProgram = () => {
    const [programs, setPrograms] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchPrograms = async () =>{
            setisLoading(true)
            const db = firebase.firestore()
            
            const result = await db.collection("programs").orderBy("name").startAt(query).endAt(query + "\uf8ff").get()         
          
            setPrograms(result.docs.map(doc => doc.data()))
                        
            setisLoading(false)
        
            for(const prog of programs){
                console.log('program name is: ' + prog.name);
              }
        }
      
       fetchPrograms()

    }, [query])
 

    return (
        <div className="container">
            <ProgramSearchBox getQuery={(q) => setQuery(q)} />
            <ProgramGrid isLoading={isLoading} programs={programs} />
        </div>
    )
}

export default FindProgram