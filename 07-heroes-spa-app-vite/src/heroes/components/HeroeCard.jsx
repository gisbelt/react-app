import { Link } from "react-router-dom"

export const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
    // we receive all images 
    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className="col">
            <div className="card text-start h-100">
                <div className="row g-0">
                    <div className="col-4">
                        <img 
                            className="card-img-top h-100" 
                            src={ heroImageUrl }    
                            alt={ superhero } 
                        />
                    </div>
                
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{ superhero }</h4>
                            <p className="card-text">{ alter_ego }</p>
                            { (alter_ego !== characters ) && (<p className="card-text">{ characters }</p>) }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                View more...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
