import "./assets/css/App.css";
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Comments from './components/Comments'
import Banner from './components/Banner'
import Footer from './components/Footer'


function App() {
    return <main className="main-container mx-auto">
        <Header/>
        <Hero/>
        <Features/>
        <Comments/>
        <Banner/>
        <Footer/>
    </main>;
}

export default App;
