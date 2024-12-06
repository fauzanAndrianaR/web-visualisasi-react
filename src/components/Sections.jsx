import "./Sections.css"

function Sections() {
  return (
    <section className="section whyus">
      <h1 className="heading">
        <span>T</span>
        <span>I</span>
        <span>K</span>
        <span>O</span>
        <span>M</span>
        <span>D</span>
        <span>I</span>
        <span>K</span>
      </h1>
      <div className="row">
        <div className="image">
          <img decoding="async" src="p0.jpg" alt="Tikomdik" />
        </div>
        <div className="content">
          <h3>Apa itu Balai TIKOMDIK?</h3>
          <p>
            Balai Teknologi Informasi dan Komunikasi Pendidikan mempunyai tugas pokok menyelenggarakan 
            kegiatan teknis operasional dan/atau kegiatan teknis penunjang tertentu bidang teknologi 
            informasi dan komunikasi pendidikan, meliputi pengembangan dan produksi serta pelayanan dan promosi.
          </p>
          <a href="/about" className="btn">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default Sections;
