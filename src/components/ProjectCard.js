import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, img, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className="h-100"
    >
      <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        <div style={{ height: '220px', overflow: 'hidden' }}>
          <Card.Img 
            variant="top" 
            src={img} 
            style={{ objectFit: 'cover', height: '100%' }} 
            alt={title} 
          />
        </div>
        <Card.Body className="p-4 d-flex flex-column">
          <small className="text-primary fw-bold text-uppercase mb-2">{category}</small>
          <Card.Title className="fw-bold mb-3">{title}</Card.Title>
          <Card.Text className="text-muted small flex-grow-1">
            A review site for events.
          </Card.Text>
          {/* 'as={Link}' to use React Router for smooth internal navigation */}
          <Button 
            as={Link} 
            to={link} 
            variant="dark" 
            className="rounded-pill px-4 mt-3"
          >
            View Case Study
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
