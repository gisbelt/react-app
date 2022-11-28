import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItems } from "./GifGridItems";
import PropTypes  from "prop-types";
 
export const GifGrid = ( { category } ) => {

  //Custom Hook
  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Loading...</h2>)
        }
        <div className="card-grid">
          {
            images.map( (images) => (
              <GifGridItems 
                key={images.id}
                {...images} //spread operator to get all the props from images
              />
            ))
          }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,  
}