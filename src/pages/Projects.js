import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/project1.jpg';
// import project2Img from '../assets/project2.jpg';
// import project3Img from '../assets/project3.jpg';

const projectData = [
  { 
    id: 1, 
    title: "IN-THE-MIX", 
    category: "Web Development, Product Design", 
    img: project1,
    link: "in-the-mix"
},
/*
  { 
    id: 2, 
    title: "TIX", 
    category: "Product Design, Prototyping", 
    img: "project2Img" //place image
},
  { 
    id: 3, 
    title: "NaoNow Internship", 
    category: "Presentation Design, Educational", 
    img: "project3Img" //place image
},*/
];

export default function Projects() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {projectData.map((project) => (
          <div className="col-12 col-md-6 col-lg-4" key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}