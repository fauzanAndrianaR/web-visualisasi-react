import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Sections from '../components/Sections';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <div>
      <Sections
        title="TIKOMDIK"
        imageSrc="p0.jpg"
        imageAlt="Tikomdik"
        heading="Apa itu Balai TIKOMDIK?"
        description="Balai Teknologi Informasi dan Komunikasi Pendidikan mempunyai tugas pokok menyelenggarakan kegiatan teknis operasional dan/atau kegiatan teknis penunjang tertentu bidang teknologi informasi dan komunikasi pendidikan, meliputi pengembangan dan produksi serta pelayanan dan promosi."
        linkHref="/about"
        linkText="Read more"
      />
      <Sections
        title="VISUALISASI DATA"
        imageSrc="vizdat.jpg"
        imageAlt="Visualisasi Data"
        heading="Apa itu Visualisasi Data?"
        description="Visualisasi data dilihat oleh banyak bidang ilmu sebagai komunikasi visual modern. Visualisasi data tidak berada di bawah bidang manapun, melainkan interpretasi di antara banyak bidang misalnya, terkadang dilihat sebagai cabang modern dari statistik deskriptif oleh beberapa orang, tetapi juga sebagai dasar alat pengembangan oleh yang lain."
        linkHref="/about"
        linkText="Read more"
      />
    </div>
      <Footer />
    </>
  );
}

export default App;
