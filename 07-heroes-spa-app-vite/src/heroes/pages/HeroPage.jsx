import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {

  // It will serve to obtain the route parameters 
  const { heroId, ...rest } = useParams() 
  const navigate = useNavigate()

  const getHero = useMemo( () => getHeroById( heroId ), [heroId]); 

  const onReturn = () => {
    getHero.publisher === 'Marvel Comics' 
    ? navigate('/marvel')
    : navigate('/dc') 
  }

  // if we don't get a hero, redirect 
  if( !getHero ) {
    return <Navigate to={"/marvel"} />
  }
   
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${ getHero.id }.jpg`} 
          alt={ getHero.superhero } 
          className="img img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{ getHero.superhero }</h3>

        <h5 className="mt-3">Details</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ getHero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ getHero.publisher }</li>
          <li className="list-group-item"><b>First appearance: </b>{ getHero.first_appearance }</li>
        </ul>
        
        <h5 className="mt-3">Characters</h5>
        <p>{ getHero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onReturn }
        >
          Back
        </button>
      </div>
    </div> 
  )
}
