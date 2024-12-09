import "./AboutDescription.css"

function AboutDescription() {
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
          Teknologi Informasi dan Komunikasi Pendidikan (TIKomDik) merupakan sebuah inisiatif strategis yang digagas oleh 
          Dinas Pendidikan Jawa Barat dalam upaya meningkatkan kualitas pendidikan melalui pemanfaatan teknologi informasi dan komunikasi (TIK). Di era digital ini, TIK menjadi fondasi penting dalam 
          pengelolaan pendidikan yang lebih efisien, inovatif, dan inklusif.
          </p>
          <p>
          Balai Teknologi Informasi dan Komunikasi Pendidikan mempunyai tugas pokok menyelenggarakan kegiatan teknis operasional 
          dan/ atau kegiatan teknis penunjang tertentu bidang teknologi informasi dan komunikasi pendidikan, meliputi pengembangan dan produksi serta pelayanan dan promosi.
          </p>
          
            <h3>Tugas dan Fungsi</h3>
            <ul>
              <li>Penyelenggaraan pengkajian bahan kebijakan teknis pengelolaan teknologi informasi dan komunikasi pendidikan;
              </li>
              <li>
              Penyelenggaraan pengelolaan teknologi informasi dan komunikasi pendidikan meliputi pengembangan dan produksi serta pelayanan dan promosi;
              </li>
              <li>
              Penyelenggaraan evaluasi dan pelaporan UPTD Teknologi Informasi dan Komunikasi Pendidikan; dan
              </li>
              <li>
              Penyelenggaraan fungsi lain sesuai dengan tugas pokok dan fungsinya
              </li>
            </ul>
      
          <a href="/about" className="btn">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default AboutDescription;
