import Header from './components/Header';
import DataVisualization from './components/DataVisualization';
import Footer from './components/Footer';
function Dashboard (){

    return(
        <div>
            <Header />
            <h1 className="heading" id="about">
        <span>T</span>
        <span>I</span>
        <span>K</span>
        <span>O</span>
        <span>M</span>
        <span>D</span>
        <span>I</span>
        <span>K</span>
      </h1>
            <DataVisualization/>
            <Footer />
        </div>
    )
}

export default Dashboard