// Reducer per gestire i risultati della ricerca lavori
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  CLEAR_JOBS,
  FETCH_COMPANY_JOBS_REQUEST,
  FETCH_COMPANY_JOBS_SUCCESS,
  FETCH_COMPANY_JOBS_FAILURE
} from './actionTypes'

// Stato iniziale per i lavori
const initialState = {
  jobs: [], // Array dei lavori trovati
  loading: false, // Indicatore di caricamento
  error: null, // Messaggio di errore
  searchQuery: '', // Query di ricerca corrente
  companyJobs: [], // Array dei lavori per azienda specifica
  companyLoading: false, // Indicatore di caricamento per azienda
  companyError: null, // Errore per ricerca azienda
  currentCompany: '' // Nome dell'azienda corrente
}

// Reducer per i lavori
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Gestione ricerca generale
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        error: null
      }
    
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload
      }
    
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
        error: null,
        searchQuery: ''
      }
    
    // Gestione ricerca per azienda
    case FETCH_COMPANY_JOBS_REQUEST:
      return {
        ...state,
        companyLoading: true,
        companyError: null
      }
    
    case FETCH_COMPANY_JOBS_SUCCESS:
      return {
        ...state,
        companyLoading: false,
        companyJobs: action.payload,
        companyError: null
      }
    
    case FETCH_COMPANY_JOBS_FAILURE:
      return {
        ...state,
        companyLoading: false,
        companyJobs: [],
        companyError: action.payload
      }
    
    default:
      return state
  }
}

export default jobsReducer