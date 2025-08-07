import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Badge,
  InputGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs, clearJobs } from "../redux/actions";
import Job from "./Job";

// Componente per il pulsante dei preferiti con stile migliorato
const FavouritesButton = () => {
  const favouriteCompanies = useSelector((state) => state.favourites.companies);

  return (
    <Link to="/favourites" className="text-decoration-none">
      <Button variant="warning" size="lg" className="shadow-sm">
        <i className="bi bi-star-fill me-2"></i>
        Preferiti
        <Badge bg="light" text="dark" className="ms-2">
          {favouriteCompanies.length}
        </Badge>
      </Button>
    </Link>
  );
};

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
  // Selettori Redux per accedere allo stato
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (query.trim()) {
      // Dispatch dell'azione asincrona per il fetch
      dispatch(fetchJobs(query.trim()));
    }
  };
  
  const handleClearResults = () => {
    dispatch(clearJobs());
    setQuery("");
  };
  
  // Gestione del loading
  if (loading) {
    return (
      <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <Spinner animation="border" variant="primary" className="loading-spinner pulse" />
          <p className="mt-3 text-muted">Ricerca in corso...</p>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Header con gradiente - full width */}
      <Container fluid className="gradient-header">
        <Container>
          <Row>
            <Col xs={12} className="text-center py-5">
              <div className="d-flex justify-content-between align-items-center text-white">
                <div>
                  <h1 className="display-3 fw-bold mb-2">
                    🔍 Remote Jobs Search
                  </h1>
                  <p className="lead mb-0">
                    Trova il lavoro dei tuoi sogni da remoto
                  </p>
                </div>
                <FavouritesButton />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Contenuto principale */}
      <Container fluid className="bg-light min-vh-100">
        <Container>
          <Row>
            {/* Form di ricerca */}
            <Col xs={12} className="py-4">
              <Card className="shadow-lg border-0 mb-4 fade-in">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <InputGroup size="lg">
                      <InputGroup.Text className="bg-primary text-white border-0">
                        <i className="bi bi-search"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="search"
                        value={query}
                        onChange={handleChange}
                        placeholder="Cerca per posizione (es. developer, designer, manager...)"
                        className="border-0 shadow-none"
                        style={{ fontSize: "1.1rem" }}
                      />
                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="px-4"
                      >
                        Cerca
                      </Button>
                    </InputGroup>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Risultati */}
            <Col xs={12} className="pb-5">
              {/* Gestione errori */}
              {error && (
                <Alert variant="danger" className="shadow-sm border-0 mb-4">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </Alert>
              )}
              
              {/* Risultati trovati */}
              {jobs.length > 0 && (
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="text-primary mb-0">
                      <i className="bi bi-briefcase me-2"></i>
                      Risultati trovati: <Badge bg="primary">{jobs.length}</Badge>
                    </h3>
                    <Button 
                      variant="outline-secondary" 
                      onClick={handleClearResults}
                      className="shadow-sm"
                    >
                      <i className="bi bi-x-circle me-2"></i>
                      Pulisci risultati
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Lista dei lavori */}
              <div className="row g-3">
                {jobs.map((jobData) => (
                  <div key={jobData._id} className="col-12">
                    <Job data={jobData} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default MainSearch;
