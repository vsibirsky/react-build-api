import React from "react"
import ProgramItem from "./ProgramItem"


const ProgramGrid = ({ isLoading, programs }) => {
    return(
        isLoading ? (<h1>Loading...</h1>) : <section className="cards">
            {programs.map((program) => (
                <ProgramItem key={program.externalId} program={program}></ProgramItem>
            ))}
        </section>

    )
}

export default ProgramGrid
