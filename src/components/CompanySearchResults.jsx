import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Badge, Spinner, Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Job from "./Job";

// Componente per il pulsante dei preferiti con stile migliorato
const FavouritesButton = () => {
  const favouriteCompanies = useSelector(state => state.favourites.companies)
  
  return (
    <Link to="/favourites" className="text-decoration-none">
      <Button variant="warning" className="shadow-sm">
        <i className="bi bi-star-fill me-2"></i>
        Preferiti 
        <Badge bg="light" text="dark" className="ms-2">
          {favouriteCompanies.length}
        </Badge>
      </Button>
    </Link>
  )
}

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const favouriteCompanies = useSelector(state => state.favourites.companies);
  const isCompanyFavourite = favouriteCompanies.includes(params.company);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company]);

  const getJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        setError("Errore nel caricamento delle offerte di lavoro");
      }
    } catch (error) {
      console.log(error);
      setError("Errore di connessione");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <Spinner animation="border" variant="primary" className="loading-spinner pulse" />
          <p className="mt-3 text-muted">Caricamento offerte di lavoro...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="bg-light min-vh-100">
      <Container>
        <Row>
          {/* Header */}
          <Col xs={12} className="py-5 gradient-header">
            <div className="text-white">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                      <i className="bi bi-building"></i>
                    </div>
                    <div>
                      <h1 className="display-5 fw-bold mb-1">
                        {params.company}
                        {isCompanyFavourite && <i className="bi bi-star-fill text-warning ms-3"></i>}
                      </h1>
                      <p className="lead mb-0">Offerte di lavoro disponibili</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <Link to="/" className="btn btn-light">
                    <i className="bi bi-arrow-left me-2"></i>
                    Home
                  </Link>
                  <FavouritesButton />
                </div>
              </div>
            </div>
          </Col>
          
          {/* Contenuto */}
          <Col xs={12} className="py-5">
            {error ? (
              <Alert variant="danger" className="shadow-sm border-0">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
              </Alert>
            ) : jobs.length === 0 ? (
              <Card className="shadow-lg border-0 text-center">
                <Card.Body className="py-5">
                  <div className="mb-4">
                    <i className="bi bi-briefcase text-muted" style={{fontSize: '4rem'}}></i>
                  </div>
                  <h3 className="text-muted mb-3">Nessuna offerta trovata</h3>
                  <p className="text-muted mb-4">Non ci sono offerte di lavoro disponibili per <strong>{params.company}</strong> al momento.</p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    <i className="bi bi-search me-2"></i>
                    Cerca altre aziende
                  </Link>
                </Card.Body>
              </Card>
            ) : (
              <>
                <div className="mb-4">
                  <Alert variant="success" className="border-0 shadow-sm">
                    <i className="bi bi-check-circle me-2"></i>
                    Trovate <strong>{jobs.length}</strong> offert{jobs.length === 1 ? 'a' : 'e'} di lavoro per <strong>{params.company}</strong>
                  </Alert>
                </div>
                
                <div className="row g-3">
                  {jobs.map(jobData => (
                    <div key={jobData._id} className="col-12">
                      <Job data={jobData} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CompanySearchResults;
