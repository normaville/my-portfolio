import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) return <Container className="py-5"><h2>Project Not Found</h2></Container>;

  return (
    <div className="case-study-page">
      {/* 1. Hero Header */}
      <div className="hero-banner text-white position-relative" style={{ height: '400px', overflow: 'hidden' }}>
        <img src={project.heroImg} className="w-100 h-100 object-fit-cover" alt="Hero" />
        
      </div>

      <Container className="py-5">
        <h6 className="text-uppercase fw-bold small text-muted mb-3">{project.title}</h6>
        <h2 className="display-5 fw-bold mb-4">{project.tagline}</h2>
        
        {/* 2. Skills, Context, Tools Section */}
        <Row className="mb-5 border-bottom pb-4">
          <Col md={4}>
            <h5 className="fw-bold text-uppercase small text-muted">Skills</h5>
            <ul className="list-unstyled">
              {project.skills.map(s => <li key={s}>• {s}</li>)}
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold text-uppercase small text-muted">Context</h5>
            <p className="mb-0">{project.context.type}</p>
            <p>{project.context.timeline}</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold text-uppercase small text-muted">Tools</h5>
            <ul className="list-unstyled">
              {project.tools.map(t => <li key={t}>• {t}</li>)}
            </ul>
          </Col>
        </Row>

        {/* 3. Overview Section */}
        <Row className="mb-5">
          <Col lg={8}>
            <p className="lead fw-normal italic">{project.overview}</p>
            <p className="text-muted mb-4">{project.techStackDesc}</p>
            <h5 className="fw-bold">DEMO HERE: <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-primary">{project.demoLink}</a></h5>
          </Col>
        </Row>

        {/* 4. Problem Statement */}
        <div className="py-5 border-top">
            <h6 className="text-uppercase fw-bold small text-muted mb-3">Problem/Context</h6>
            <h2 className="fw-bold mb-4">{project.problem.title}</h2>
            <p className="text-muted col-lg-9">{project.problem.description}</p>
        </div>

        {/* 5. Solution Section */}
        <div className="py-5 border-top">
            <h6 className="text-uppercase fw-bold small text-muted mb-3">Solution</h6>
            <h2 className="fw-bold mb-4">{project.solution.title}</h2>
            <ul className="list-unstyled lead">
                {project.solution.points.map(p => <li key={p}>• {p}</li>)}
            </ul>

            <h2 className="fw-bold mb-4">{project.coordinator.title}</h2>
            <ul className="list-unstyled lead">
                {project.coordinator.points.map(p => <li key={p}>• {p}</li>)}
            </ul>
        </div>

        {/* 6. Research Section */}
        <div className="py-5 border-top">
            <h6 className="text-uppercase fw-bold small text-muted mb-3">Research</h6>

            {/* 6.1 Observation */}
            <h2 className="fw-bold mb-4">{project.observation.title}</h2>
            <p className="lead col-lg-9">{project.observation.description}</p>
            <ul className="list-unstyled lead">
                {project.observation.points.map(p => <li key={p}>• {p}</li>)}
            </ul>

            {/* 6.2 User Flow Info*/}
            <Row>
                {/* this text goes left */}
                <Col lg={4}>
                    <h2 className="fw-bold my-4">{project.userflow.title}</h2>
                    <p className="lead col-lg-9">{project.userflow.description}</p>
                    <p className="lead col-lg-9 fw-bold">{project.userflow.description2}</p>
                    <ul className="list-unstyled lead">
                        {project.userflow.points.map(p => <li key={p}>• {p}</li>)}
                    </ul>
                    
                </Col>
                {/* this text goes right */}
                <Col lg={8}>
                    <Image src={project.userflow.diagrams[0]} fluid className="my-4 rounded shadow-sm border" />
                </Col>
                <Row className="g-4">
                    <Col md={6}>
                        <Image src={project.userflow.diagrams[1]} fluid className="rounded shadow-sm border" />
                    </Col>
                    <Col md={6}>
                        <Image src={project.userflow.diagrams[2]} fluid className="rounded shadow-sm border" />
                    </Col>
                    <Col md={6}>
                        <Image src={project.userflow.diagrams[3]} fluid className="rounded shadow-sm border" />
                    </Col>
                    <Col md={6}>
                        <Image src={project.userflow.diagrams[4]} fluid className="rounded shadow-sm border" />
                    </Col>
                    <Col md={6}>
                        <Image src={project.userflow.diagrams[5]} fluid className="rounded shadow-sm border" />
                    </Col>
                </Row>
            </Row>

            
        </div>

        {/* 7. Visual Assets */}
        <div className="py-5 border-top">
            <h6 className="text-uppercase fw-bold small text-muted mb-3">Visual Assets</h6>
            <h2 className="fw-bold mb-4">{project.visual.title}</h2>
            <h5 className="fw-bold">Look at the code here: <a href={project.visual.codeLink} target="_blank" rel="noreferrer" className="text-primary">{project.visual.codeLink}</a></h5>

            {/* Gallery, make this clickable */}
            <Row className="row-cols-1 row-cols-md-3 g-4 mt-2">
                <Col md={6}>
                    <Image src={project.visual.product[0]} fluid className="rounded shadow-sm border" />
                </Col>
                <Col md={6}>
                    <Image src={project.visual.product[1]} fluid className="rounded shadow-sm border" />
                </Col>
                <Col md={6}>
                    <Image src={project.visual.product[2]} fluid className="rounded shadow-sm border" />
                </Col>
            </Row>
        </div>

        {/* 8. Reflection */}
        <div className="py-5 border-top">
            <h6 className="text-uppercase fw-bold small text-muted mb-3">Reflection</h6>
            <h2 className="fw-bold mb-4">{project.reflection.title}</h2>
            <ul className="list-unstyled lead">
                {project.reflection.points.map(p => <li key={p}>• {p}</li>)}
            </ul>

            <p className="lead col-lg-9 fw-bold">{project.reflection.subtitle}</p>
            <ul className="list-unstyled lead">
                {project.reflection.points2.map(p => <li key={p}>• {p}</li>)}
            </ul>
        </div>
      </Container>
    </div>
  );
}
