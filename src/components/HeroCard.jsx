


const HeroCard = ({ image, name, role, bio, socials }) => {

//   const mydata = {
//   name: "Akoto Michael",
//   image: "src/assets/Images/myprofilepic.jpg",
//   role: [
//     "Web developer",
//     "Web designer UI/UX",
//     "Freelancer"
//   ],
//   bio: "I create functional, beautiful websites with great user experience. I can build anything from portfolios to e-commerce sites. Let's create something great together.",
//   socials: {
//     github: "https://github.com/",
//     linkedin: "https://linkedin.com/",
//     twitter: "https://twitter.com/",
//     email: "mailto:example@email.com"
//   }
// };


  return (
    <>
        <div className="card">
    <img src={image} />
    <div>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <div className="socials">
        {/* {socials.map((social) => (
          <button>
            <i
              className={`fa-brands fa-${social}`}
            ></i>
          </button>
        ))} */}
      </div>
    </div>
  </div>
    </>
  )
}

export default HeroCard