import Counter from './Components/Counter';
import CounterActions from './Components/CounterActions';
import Theme from './Components/Theme';
import './App.css';
import Footer from './Components/Footer';
import {routes} from './routes';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

function App({isAuth}) {
  return (
    <div className="App">
      <Router>
      <Theme />
       <Routes>    
        {routes.map((route, index) => {
          return (
            <Route
            
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.auth && !isAuth ? <Navigate to="/login" /> : <route.component />} 
            > </Route>
          );
        })}
       </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
