import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center mr-12 textShadow">Projects</h1>
          <ul className="steps steps-vertical">
            <h1 className='mt-1'>Personal</h1>
            <li className="step step-primary">Pers Ticketing</li>
            <li className="step step-primary">Gigs Hub</li>
            <li className="step step-primary">My Portfolio</li>
            <h1>Team</h1>
            <li className="step step-secondary">Personax ESS</li>
            <li className="step step-secondary">Invoicing App</li>
            <li className="step step-secondary">Invoicing App</li>
          </ul>
        </div>
    </>
  )
}

export default Projects