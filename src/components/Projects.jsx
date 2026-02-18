import React from 'react'
import Title from './Title'

const Projects = () => {
  return (
    <>
      <div className="flex items-center justify-center">
          <Title title="Projects" className='mr-12' />
          <ul className="steps steps-vertical">
            <li className='mt-1'><h1 className='text-center'>PERSONAL/OUTSTANDING</h1></li>
            <li className="step step-primary">Pers Ticketing</li>
            <li className="step step-primary">Gigs Hub</li>
            <li className="step step-primary">My Portfolio</li>
            <li  className='mt-1'><h1 className='text-center'>TEAM</h1></li>
            <li className="step step-secondary">Personax ESS</li>
            <li className="step step-secondary">Invoicing App</li>
            <li className="step step-secondary">Invoicing App</li>
          </ul>
        </div>
    </>
  )
}

export default Projects