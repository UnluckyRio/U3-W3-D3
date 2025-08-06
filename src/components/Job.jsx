import { Card, Button, Badge, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../redux/favouritesSlice'

const Job = ({ data }) => {
  // Ottiene la lista delle aziende preferite dallo store
  const favouriteCompanies = useSelector(state => state.favourites.companies)
  const dispatch = useDispatch()
  
  // Controlla se l'azienda è già nei preferiti
  const isFavourite = favouriteCompanies.includes(data.company_name)
  
  // Funzione per gestire l'aggiunta/rimozione dai preferiti
  const handleFavouriteToggle = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(data.company_name))
    } else {
      dispatch(addToFavourites(data.company_name))
    }
  }
  
  return (
    <Card className={`shadow-sm border-0 h-100 hover-card fade-in ${isFavourite ? 'border-warning' : ''}`} style={{transition: 'all 0.3s ease'}}>
      <Card.Body className="p-4">
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                   style={{width: '50px', height: '50px', fontSize: '1.2rem'}}>
                <i className="bi bi-building"></i>
              </div>
              <div>
                <Link 
                  to={`/${data.company_name}`} 
                  className="text-decoration-none"
                >
                  <h5 className="mb-1 text-primary fw-bold">
                    {data.company_name}
                    {isFavourite && <i className="bi bi-star-fill text-warning ms-2"></i>}
                  </h5>
                </Link>
                <Badge bg="secondary" className="small">
                  {data.job_type || 'Full-time'}
                </Badge>
              </div>
            </div>
          </Col>
          
          <Col md={6} className="mb-3 mb-md-0">
            <a 
              href={data.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-decoration-none"
            >
              <h6 className="mb-2 text-dark fw-semibold">
                <i className="bi bi-briefcase me-2 text-primary"></i>
                {data.title}
              </h6>
            </a>
            {data.category && (
              <Badge bg="info" className="me-2">
                <i className="bi bi-tag me-1"></i>
                {data.category}
              </Badge>
            )}
            {data.candidate_required_location && (
              <Badge bg="success">
                <i className="bi bi-geo-alt me-1"></i>
                {data.candidate_required_location}
              </Badge>
            )}
          </Col>
          
          <Col md={2} className="text-end">
            <Button
              variant={isFavourite ? "warning" : "outline-warning"}
              size="sm"
              onClick={handleFavouriteToggle}
              className="shadow-sm"
              style={{minWidth: '100px'}}
            >
              <i className={`bi ${isFavourite ? 'bi-star-fill' : 'bi-star'} me-1`}></i>
              {isFavourite ? "Preferito" : "Aggiungi"}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Job
