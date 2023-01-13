import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Products from '../Container/Products/Products';
import Header from '../Container/Header/Header';
import Details from "../Container/Details/Details";
import Cart from "../Container/Cart/Cart";

function AppRouter() {


    return (
        <div>
            <Router>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Products />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRouter;