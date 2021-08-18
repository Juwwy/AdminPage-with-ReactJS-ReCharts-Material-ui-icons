import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home"
import "./app.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from "./components/pages/userlist/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newuser/NewUser";
import ProductList from "./components/pages/products/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";


function App() {
  return (
    <Router >
      {/* Hello World in React Js */}
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          <Route path="/user/:id">
          <User/>
          </Route>
          <Route path="/addUser">
          <NewUser/>
          </Route>
          <Route path="/products">
          <ProductList/>
          </Route>
          <Route path="/product/:id">
          <Product />
          </Route>
          <Route path="/addProduct">
          <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
