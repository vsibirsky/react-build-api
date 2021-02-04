import React from 'react'

const ProgramItem = ({ program }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <h1>{program.name}</h1>
                    <ul>
                        <li>
                            <strong>A program of:</strong> {program.organizationName}
                        </li>
                        <li>
                        <strong>Program Description:</strong> {program.description}
                        </li>
                    </ul>

                </div>
                <div className='card-back'>
                    <h1>{program.name}</h1>
                    <ul>
                        <li>
                        <strong>Referral Process:</strong> {program.referral.process}
                        </li>
                        <li>
                        <strong>Referral Email:</strong> {program.referral.email}
                        </li>
                        <li>
                        <strong>Phone:</strong> {program.referral.phone}
                        </li>
                        <li>
                        <strong>Contat:</strong> {program.referral.contact}
                        </li>                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProgramItem

