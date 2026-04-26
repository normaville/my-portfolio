export default function About() {
  const skills = ["Figma", "React.js", "HTML/CSS", "Wireframing", "User Research", "Interaction Design", "Prototyping", "Adobe Photoshop", "Adobe Illustrator"];

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4 border-bottom pb-2">hello</h2>
          <p className="text-muted lead">I’m Norma Villegas, an Orlando-based designer dedicated to de-cluttering the digital world. I focus on crafting seamless UI/UX solutions that strip away complexity, allowing users to navigate with confidence. I believe that great design should feel invisible, elegant, approachable, and never overwhelming.</p>
          <p className="text-muted">I hold an A.S. in Digital Media and am currently completing my Bachelor’s in the same field at the University of Central Florida. My transition into UI/UX was driven by a core belief that information should be universally accessible; I design to ensure that digital spaces are inclusive and easy for everyone to navigate.</p>
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4 border-bottom pb-2">Skills & Tools</h2>
          <div className="d-flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="badge bg-white text-dark border p-3 rounded-3 shadow-sm">{skill}</span>
            ))}
          </div>
          <div className="mt-5 p-4 bg-light rounded-4">
            <h5 className="fw-bold">Interests</h5>
            <p className="small text-muted mb-0">Mobile Games • Drawing • Artist Alley Vending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
