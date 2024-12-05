import { Link } from 'react-router-dom';
import "./Jumbotron.css"

function Jumbotron() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Balai Teknologi Informasi dan Komunikasi Pendidikan Disdik Jabar</h3>
        <p>Visualisasi Data</p>
        <Link to="/dashboard" className="btn">Dashboard</Link>
      </div>

      <div className="video-container">
        <video src="video.mp4" id="video-slider" loop autoPlay muted></video>
      </div>
    </section>
  );
}

export default Jumbotron;
