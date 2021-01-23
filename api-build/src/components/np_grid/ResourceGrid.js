import React from "react"
import ResourceItem from "./ResourceItem"


const ResourceGrid = ({ isLoading, resources }) => {
    return(
        isLoading ? (<h1>Loading...</h1>) : <section className="cards">
            {resources.map((resource) => (
                <ResourceItem key={resource.char_id} resource={resource}></ResourceItem>
            ))}
        </section>

    )
}

export default ResourceGrid
