import React from 'react';
import axios from 'axios';
const qs = require('querystring');
import './app.css';
import {connect} from 'react-redux';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
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