// Action creators per Redux
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  CLEAR_JOBS,
  FETCH_COMPANY_JOBS_REQUEST,
  FETCH_COMPANY_JOBS_SUCCESS,
  FETCH_COMPANY_JOBS_FAILURE
} from './actionTypes'

// Action creators per i preferiti
export const addToFavourites = (companyName) => ({
  type: ADD_TO_FAVOURITES,
  payload: companyName
})

export const removeFromFavourites = (companyName) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: companyName
})

// Action creators per la ricerca lavori
export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
})

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
})

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
})

export const clearJobs = () => ({
  type: CLEAR_JOBS
})

// Action creators per la ricerca aziende
export const fetchCompanyJobsRequest = () => ({
  type: FETCH_COMPANY_JOBS_REQUEST
})

export const fetchCompanyJobsSuccess = (jobs) => ({
  type: FETCH_COMPANY_JOBS_SUCCESS,
  payload: jobs
})

export const fetchCompanyJobsFailure = (error) => ({
  type: FETCH_COMPANY_JOBS_FAILURE,
  payload: error
})

// Action creator asincrono per la ricerca lavori
export const fetchJobs = (query) => {
  return async (dispatch) => {
    // Inizia il caricamento
    dispatch(fetchJobsRequest())
    
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
      
      if (response.ok) {
        const { data } = await response.json()
        // Dispatch dell'azione di successo con i dati
        dispatch(fetchJobsSuccess(data))
      } else {
        throw new Error('Errore nel caricamento delle offerte di lavoro')
      }
    } catch (error) {
      // Dispatch dell'azione di errore
      dispatch(fetchJobsFailure(error.message))
    }
  }
}

// Action creator asincrono per la ricerca lavori per azienda
export const fetchCompanyJobs = (companyName) => {
  return async (dispatch) => {
    // Inizia il caricamento
    dispatch(fetchCompanyJobsRequest())
    
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`)
      
      if (response.ok) {
        const { data } = await response.json()
        // Dispatch dell'azione di successo con i dati
        dispatch(fetchCompanyJobsSuccess(data))
      } else {
        throw new Error('Errore nel caricamento delle offerte di lavoro per l\'azienda')
      }
    } catch (error) {
      // Dispatch dell'azione di errore
      dispatch(fetchCompanyJobsFailure(error.message))
    }
  }
}