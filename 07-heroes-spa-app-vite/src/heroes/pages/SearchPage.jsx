import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroeCard } from "../components/HeroeCard";
import { getHeoresByName } from "../helpers/getHeoresByName";

export const SearchPage = () => {

  // get navigation 
  const navigate = useNavigate()
  // get the information of the location where we are located 
  const location = useLocation()
  // parse the query arguments we get from the "search" parameter of "location". 
  const { q = '' } = queryString.parse( location.search )

  const heroes = getHeoresByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { onInputChange, onResetForm, searchText } = useForm({
    searchText: q //get the value of q in url
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // Force to clean the url, just in case it is written in capital letters and with spaces 
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Search a hero" 
              className="form-control"
              name="searchText"
              value={ searchText }
              autoComplete="off"
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-secondary mt-3">
              Search <i className="bi bi-search mx-1"></i>
            </button>

          </form>
        </div>

        <div className="col-7">         
          {
            showSearch
            &&
            <div 
              className="alert alert-primary animate__animated animate__fadeIn" 
            >
              {/* alert when nothing has been written yet */}
              Search a hero...
            </div>
          }

          {
            showError
            &&
            <div 
              className="alert alert-danger animate__animated animate__fadeIn" 
            >
              {/* alert when there is no result  */}
              there is no result to <b>{ q }</b>
            </div>
          }
        </div>
        
        <div className={`row g-3 ${heroes.length > 1 ? 'row-cols-3' : 'row-cols-1'}`}>
          {
            heroes.map(hero => (
              <HeroeCard
               key={ hero.id }
               { ...hero }
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
