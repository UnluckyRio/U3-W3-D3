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

## 🚀 Deploy su GitHub Pages

Il progetto è configurato per il deploy automatico su GitHub Pages tramite GitHub Actions.

### 📋 Prerequisiti per il Deploy

1. **Repository GitHub**: Il codice deve essere su un repository GitHub
2. **GitHub Pages abilitato**: Nelle impostazioni del repository, abilita GitHub Pages
3. **Branch principale**: Assicurati che il codice sia sul branch `main` o `master`

### ⚙️ Configurazione

1. **Workflow automatico**: Il file `.github/workflows/deploy.yml` gestisce il build e deploy automatico
2. **Base path**: Il file `vite.config.js` è configurato con il base path `/U3-W3-D3/`
3. **Build ottimizzato**: Vite genera i file ottimizzati nella cartella `dist/`

### 🔄 Processo di Deploy

1. **Push del codice**: Ogni push sul branch principale attiva il workflow
2. **Build automatico**: GitHub Actions installa le dipendenze e builda il progetto
3. **Deploy**: I file vengono automaticamente pubblicati su GitHub Pages
4. **URL live**: Il sito sarà disponibile su `https://[username].github.io/U3-W3-D3/`

### 🛠️ Comandi per il Deploy Manuale

```bash
# Build del progetto per produzione
npm run build

# Preview del build locale
npm run preview
```

### 📝 Note Importanti

- **Nome repository**: Modifica il `base` in `vite.config.js` se il repository ha un nome diverso
- **Permessi**: Il workflow richiede permessi di scrittura per GitHub Pages
- **Tempo deploy**: Il deploy può richiedere alcuni minuti per essere completato
- **Cache**: GitHub Pages può cacheare i contenuti, usa Ctrl+F5 per forzare il refresh

## 📄 Licenza

Progetto sviluppato per scopi educativi - EPICODE Full Stack Developer Course

---

**Sviluppato con ❤️ utilizzando React + Vite + Redux**
