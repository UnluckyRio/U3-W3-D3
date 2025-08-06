import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'

// Configurazione dello store Redux
const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
})

export default store