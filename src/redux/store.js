import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import jobsReducer from './jobsReducer'

// Configurazione dello store Redux con entrambi i reducer
const store = configureStore({
  reducer: {
    favourites: favouritesReducer, // Gestisce le aziende preferite
    jobs: jobsReducer, // Gestisce i risultati della ricerca lavori
  },
  // Il middleware per le azioni asincrone è già incluso di default
})

export default store