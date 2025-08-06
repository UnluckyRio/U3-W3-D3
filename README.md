# 🔍 Remote Jobs Search

**Trova il lavoro dei tuoi sogni da remoto**

Un'applicazione web moderna e intuitiva per la ricerca di opportunità lavorative remote, sviluppata con React e Redux.

## ✨ Funzionalità Principali

### 🔎 **Ricerca Avanzata**
- Ricerca per posizione lavorativa (developer, designer, manager, etc.)
- Risultati in tempo reale tramite API esterna
- Interfaccia di ricerca moderna e user-friendly

### ⭐ **Sistema Preferiti**
- Aggiungi/rimuovi aziende dalla lista dei preferiti
- Gestione stato tramite Redux per persistenza dei dati
- Indicatori visivi per aziende già salvate nei preferiti
- Pagina dedicata per visualizzare e gestire i preferiti

### 🏢 **Esplorazione Aziende**
- Visualizzazione dettagliata delle offerte per singola azienda
- Navigazione intuitiva tra le diverse sezioni
- Informazioni complete su ogni posizione lavorativa

### 🎨 **Design Moderno**
- Interfaccia responsive con React Bootstrap
- Gradienti personalizzati e animazioni fluide
- Icone Bootstrap per un'esperienza visiva accattivante
- Design mobile-first per tutti i dispositivi

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React 18 con Vite
- **State Management**: Redux Toolkit
- **UI Framework**: React Bootstrap
- **Routing**: React Router DOM
- **Styling**: CSS personalizzato con Bootstrap Icons
- **Build Tool**: Vite per sviluppo e build ottimizzati

## 🚀 Come Iniziare

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd U3-W3-D3
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   - Naviga su `http://localhost:5173`

## 📱 Utilizzo

1. **Ricerca Lavori**: Inserisci una posizione lavorativa nella barra di ricerca
2. **Esplora Risultati**: Visualizza le offerte trovate con dettagli completi
3. **Salva Preferiti**: Clicca sull'icona stella per aggiungere aziende ai preferiti
4. **Gestisci Preferiti**: Accedi alla pagina dedicata per visualizzare e rimuovere preferiti
5. **Esplora Aziende**: Clicca sul nome di un'azienda per vedere tutte le sue offerte

## 🏗️ Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── MainSearch.jsx   # Pagina principale di ricerca
│   ├── Job.jsx          # Componente singola offerta
│   ├── Favourites.jsx   # Pagina gestione preferiti
│   └── CompanySearchResults.jsx # Risultati per azienda
├── redux/               # Gestione stato Redux
│   ├── store.js         # Configurazione store
│   └── favouritesSlice.js # Slice per preferiti
├── App.jsx              # Componente principale
└── main.jsx             # Entry point
```

## 🎯 Funzionalità Redux

- **Store centralizzato** per la gestione dei preferiti
- **Actions**: `addToFavourites`, `removeFromFavourites`
- **Selectors** per accedere allo stato dei preferiti
- **Persistenza** dei dati durante la sessione

## 🌟 Caratteristiche UI/UX

- **Design responsive** per desktop, tablet e mobile
- **Animazioni fluide** per hover e transizioni
- **Feedback visivo** per tutte le interazioni utente
- **Accessibilità** migliorata con focus states
- **Gradiente personalizzato** per un look moderno

## 📄 Licenza

Progetto sviluppato per scopi educativi - EPICODE Full Stack Developer Course

---

**Sviluppato con ❤️ utilizzando React + Vite + Redux**
