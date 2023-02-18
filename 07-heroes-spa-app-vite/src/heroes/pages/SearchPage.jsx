import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

export const SearchPage = () => {

  const { onInputChange, onResetForm, searchText } = useForm({
    searchText: ''
  })

  // get navigation 
  const navigate = useNavigate()
  // get the information of the location where we are located 
  const location = useLocation()
  // parse the query arguments we get from the "search" parameter of "location". 
  const { q = '' } = queryString.parse( location.search )

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if( searchText.trim().length <= 1 ) return;
    // Force to clean the url, just in case it is written in capital letters and with spaces 
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
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
          <h4>Result</h4>

          <div className="alert alert-primary">
            {/* alert when there is result  */}
            Search a hero
          </div>
          <div className="alert alert-danger">
            {/* alert when there is no result  */}
            there is no result to <b>{ q }</b>
          </div>

        </div>
      </div>
      

    </>
  )
}
