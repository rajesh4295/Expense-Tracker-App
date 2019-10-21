import React from 'react';
import StickyHeadTable from './table';
import {connect} from 'react-redux';
import {ADD_EXPENSE_ACTION} from '../store/actions/expense-action';
import uuidv4 from 'uuid';

const mapDispatchToProps = (dispatch) => {
    return{
        onAddClick: (payload) => {dispatch(ADD_EXPENSE_ACTION(payload))}
    }
}

class AddExpense extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:null,
            name:'',
            category:'',
            date:'',
            amount:'',
            notes:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    componentDidMount(){
        
    }

    handleSubmit (e){
        e.preventDefault();
        const exp_id = uuidv4.v4();
        let tableData = {...this.state};
        tableData.id = exp_id;
        this.setState(tableData,()=>{
            this.props.onAddClick(this.state);
            this.setState({id:null,name:'',category:'',date:'',amount:'',notes:''});
        })
        
    }

    render(){
       
        return(
            <div>
            {/* <button className="btn btn-primary mb-3"  data-toggle="collapse" data-target="#collapseExample">Add new expense</button>
            <div id="collapseExample" className="collapse">
            <form  className="form-inline mb-5" >
                    <div className="form-group ml-3">
                        <input type="text" name="name" className="form-control" onChange={this.onChange} id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    <div className="form-group ml-3 ">
                    <select className="custom-select" name="category" onChange={this.onChange}>
                        <option defaultValue>Select Category</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Cook">Cook</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Shoppings">Shoppings</option>
                        </select>
                    </div>
                    <div className="form-group ml-3">
                        <input placeholder="Selected date" name="date" onChange={this.onChange} type="date" id="date-picker-example" className="form-control datepicker"/>
                    </div>
                    <div className="form-group ml-3">
                        <input type="text" name="amount" className="form-control" onChange={this.onChange} id="formGroupExampleInput" placeholder="Amount" />
                    </div>
                    <div className="form-group ml-3 mu-3">
                        <input placeholder="Add Notes" name="notes" onChange={this.onChange} type="textarea" id="date-picker-example" className="form-control datepicker"/>
                    </div>
                    <div className="form-group ml-3 mu-3">
                        <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Add</button>
                    </div>
            </form>
            </div> */}
                <StickyHeadTable />
            </div>
        )
    }
}


export default connect(null,mapDispatchToProps)(AddExpense);