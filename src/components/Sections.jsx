import "./Sections.css"
import PropTypes from "prop-types";

function Sections({ title, imageSrc, imageAlt, heading, description, linkHref, linkText }) {
  // Pastikan title ada dan bukan undefined atau null
  const titleContent = title || '';

  return (
    <section className="section whyus">
      <h1 className="heading">
        {titleContent.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
      <div className="row">
        <div className="image">
          <img decoding="async" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="content">
          <h3>{heading}</h3>
          <p>{description}</p>
          <a href={linkHref} className="btn">{linkText}</a>
        </div>
      </div>
    </section>
  );
}

// Validasi props
Sections.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Sections;
