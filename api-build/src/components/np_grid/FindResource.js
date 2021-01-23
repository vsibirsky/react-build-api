import React, { useState, useEffect } from "react"
import axios from "axios"
import ResourceGrid from "./ResourceGrid"
import SearchBox from "../ui/SearchBox"


const FindResource = () => {
    const [resources, setResources] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchResources = async () =>{
            setisLoading(true)
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`
            )

            console.log(result.data)
            setResources(result.data)
            setisLoading(false)
        }
        
       fetchResources()
    }, [query])

    return (
        <div className="container">
            <SearchBox getQuery={(q) => setQuery(q)} />
            <ResourceGrid isLoading={isLoading} resources={resources} />
        </div>
    )
}

export default FindResource