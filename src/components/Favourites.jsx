import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromFavourites } from '../redux/favouritesSlice'

const Favourites = () => {
  // Ottiene la lista delle aziende preferite dallo store Redux
  const favouriteCompanies = useSelector(state => state.favourites.companies)
  const dispatch = useDispatch()

  // Funzione per rimuovere un'azienda dai preferiti
  const handleRemoveFromFavourites = (companyName) => {
    dispatch(removeFromFavourites(companyName))
  }

  return (
    <>
      {/* Header con gradiente - full width */}
      <Container fluid className="gradient-favourites">
        <Container>
          <Row>
            <Col xs={12} className="py-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bold mb-3">
                  <i className="bi bi-heart-fill me-3"></i>
                  Le tue aziende preferite
                </h1>
                <p className="lead mb-4">Gestisci la tua lista di aziende preferite</p>
                <Link to="/" className="btn btn-light btn-lg shadow-sm">
                  <i className="bi bi-arrow-left me-2"></i>
                  Torna alla ricerca
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Contenuto principale */}
      <Container fluid className="bg-light min-vh-100">
        <Container>
          <Row>
            {/* Contenuto */}
          <Col xs={12} className="py-5">
            {favouriteCompanies.length === 0 ? (
              <Card className="shadow-lg border-0 text-center">
                <Card.Body className="py-5">
                  <div className="mb-4">
                    <i className="bi bi-heart text-muted" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h3 className="text-muted mb-3">Nessuna azienda nei preferiti</h3>
                  <p className="text-muted mb-4">Inizia ad aggiungere le aziende che ti interessano di più!</p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    <i className="bi bi-search me-2"></i>
                    Inizia a cercare
                  </Link>
                </Card.Body>
              </Card>
            ) : (
              <>
                <div className="mb-4">
                  <Alert variant="info" className="border-0 shadow-sm">
                    <i className="bi bi-info-circle me-2"></i>
                    Hai <strong>{favouriteCompanies.length}</strong> aziend{favouriteCompanies.length === 1 ? 'a' : 'e'} nei preferiti
                  </Alert>
                </div>
                
                <Row className="g-4">
                  {favouriteCompanies.map((companyName, index) => (
                    <Col key={index} lg={6} xl={4}>
                      <Card className="shadow-sm border-0 h-100 hover-card fade-in" style={{transition: 'all 0.3s ease'}}>
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                                 style={{width: '50px', height: '50px', fontSize: '1.2rem'}}>
                              <i className="bi bi-building"></i>
                            </div>
                            <div className="flex-grow-1">
                              <Link 
                                to={`/${companyName}`} 
                                className="text-decoration-none"
                              >
                                <h5 className="mb-1 text-primary fw-bold">
                                  {companyName}
                                </h5>
                              </Link>
                              <Badge bg="warning" className="small">
                                <i className="bi bi-star-fill me-1"></i>
                                Preferito
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="d-grid gap-2">
                            <Link 
                              to={`/${companyName}`} 
                              className="btn btn-outline-primary"
                            >
                              <i className="bi bi-eye me-2"></i>
                              Vedi offerte
                            </Link>
                            <Button 
                              variant="outline-danger" 
                              onClick={() => handleRemoveFromFavourites(companyName)}
                            >
                              <i className="bi bi-trash me-2"></i>
                              Rimuovi dai preferiti
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}

export default Favourites