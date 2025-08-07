// Reducer per gestire le aziende preferite
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from './actionTypes'

// Stato iniziale per i preferiti
const initialState = {
  companies: [] // Array delle aziende preferite
}

// Reducer per i preferiti
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const companyName = action.payload
      // Controlla se l'azienda non è già nei preferiti
      if (!state.companies.includes(companyName)) {
        return {
          ...state,
          companies: [...state.companies, companyName]
        }
      }
      return state
    
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        companies: state.companies.filter(company => company !== action.payload)
      }
    
    default:
      return state
  }
}

export default favouritesReducer