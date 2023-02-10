import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {

  // It will serve to obtain the route parameters 
  const { heroId, ...rest } = useParams() 
  
  const getHero = getHeroById( heroId )

  // if we don't get a hero, redirect 
  if( !getHero ) {
    return <Navigate to={"/marvel"} />
  }
   
  return (
    <h1>HeroPage</h1>
  )
}
