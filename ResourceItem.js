import React from 'react'

const ResourceItem = ({ resource }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={resource.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{resource.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {resource.portrayed}
                        </li>
                        <li>
                        <strong>Nickname:</strong> {resource.nickname}
                        </li>
                        <li>
                        <strong>Birthday:</strong> {resource.birthday}
                        </li>
                        <li>
                        <strong>Status:</strong> {resource.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResourceItem
© 2021 GitHub, Inc.
