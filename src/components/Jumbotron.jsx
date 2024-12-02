
function Jumbotron() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Balai Teknologi Informasi dan Komunikasi Pendidikan Disdik Jabar</h3>
        <p>Visualisasi Data</p>
        <a href="dashboard.html" className="btn">Dashboard</a>
      </div>

      <div className="video-container">
        <video src="video.mp4" id="video-slider" loop autoPlay muted></video>
      </div>
    </section>
  );
}

export default Jumbotron;
