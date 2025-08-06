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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              {jobs.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-primary mb-3">
                    <i className="bi bi-briefcase me-2"></i>
                    Risultati trovati: <Badge bg="primary">{jobs.length}</Badge>
                  </h3>
                </div>
              )}
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
