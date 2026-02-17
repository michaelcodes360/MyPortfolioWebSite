import React from 'react'

const Card = ({ image, name, role, bio, socials }) => {
  return (
    <>
        <div className="card">
    <img src={image} />
    <div>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <div className="socials">
        {socials.map((social) => (
          <button>
            <i
              className={`fa-brands fa-${social}`}
            ></i>
          </button>
        ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default Card