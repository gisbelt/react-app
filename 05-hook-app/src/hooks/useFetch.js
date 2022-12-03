import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        //eventually when we change the url we have to set the status back to isLoading to true
        setState({
            ...state,
            isLoading: true
        })
        
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setState({
                data,
                isLoading: false,
                hasError: null,
            })
        } catch (error) {
            setState({
                ...state,
                hasError: error
            })
        }                
    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    }
}
