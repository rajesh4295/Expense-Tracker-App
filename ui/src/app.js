import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard';
import AddExpense from './components/add-expense';
import PageNotFound from './components/page-not-found';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faDollarSign, faChartBar, faLeaf} from '@fortawesome/free-solid-svg-icons'
import './app.css';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers/root-reducer';


const store = createStore(reducer);
class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={store}>
            <Router>
                <div className="side-bar bg-light">
                    <nav className="navbar navbar-light"  id="navbarSupportedContent">
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!"><FontAwesomeIcon icon={faLeaf} />&nbsp;&nbsp;Expensy</a>
                            </li>
                            <br /><br />
                            
                            <li className="nav-item">
                            <Link to={"/static/dashboard"} className="nav-link"><FontAwesomeIcon icon={faChartLine} /> &nbsp; Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/static/add-expense"} className="nav-link"><FontAwesomeIcon icon={faDollarSign} /> &nbsp; Add expense</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon={faChartBar} /> &nbsp; Reports</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>  
                {/* <div className="container"> */}
                    <div className="row mt-3">
                    
                        <div className="col">
                        <Switch>
                                <Route path="/static/dashboard" exact component={Dashboard} />
                                <Route path="/static/add-expense" exact component={AddExpense} />   
                                <Route path="*" component={PageNotFound} /> 
                        </Switch>
                        </div>
                    </div> 
                  
            </Router>
            </Provider>
                // </div>
            // </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);