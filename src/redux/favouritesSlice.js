import { createSlice } from '@reduxjs/toolkit'

// Slice per gestire le aziende preferite
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    companies: [], // Array delle aziende preferite
  },
  reducers: {
    // Azione per aggiungere un'azienda ai preferiti
    addToFavourites: (state, action) => {
      const companyName = action.payload
      // Controlla se l'azienda non è già nei preferiti
      if (!state.companies.includes(companyName)) {
        state.companies.push(companyName)
      }
    },
    // Azione per rimuovere un'azienda dai preferiti
    removeFromFavourites: (state, action) => {
      const companyName = action.payload
      state.companies = state.companies.filter(company => company !== companyName)
    },
  },
})

// Esporta le azioni
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions

// Esporta il reducer
export default favouritesSlice.reducer