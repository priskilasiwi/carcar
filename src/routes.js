import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CariMobil from './components/Pages/CariMobil';
import App from "./App"
import DetailCar from "./components/Pages/DetailCar";

const RouteApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element ={<App />} />
                    <Route path="/carimobil" element = {<CariMobil />} />
                    <Route path="/detailcar/:id" element = {<DetailCar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteApp;