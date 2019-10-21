import React from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import {ADD_EXPENSE_ACTION, EDIT_EXPENSE_ACTION, DELETE_EXEPENSE_ACTION} from '../store/actions/expense-action';

const mapStateToProps = (state) => {
  return{
    expenses: state.expenseReducer.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onAdd: (payload) => {dispatch(ADD_EXPENSE_ACTION(payload))},
    onEdit: (payload) => {dispatch(EDIT_EXPENSE_ACTION(payload))},
    onDelete: (payload) => {dispatch(DELETE_EXEPENSE_ACTION(payload))}
  }
}

 class StickyHeadTable extends React.Component {

  constructor(props){
    super(props);
    

    this.state ={
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Category', field: 'category'},
        { title: 'Date', field: 'date', type:'date'},
        {title: 'Amount (Rs)', field: 'amount'},
        { title: 'Notes', field: 'notes'},
      ],
      data: this.props.expenses,
      
    }
  }

  componentDidMount(){
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("child state updated")
    console.log("nextPorps",nextProps)
    console.log( "prevstate",prevState)
    if(nextProps.expenses !== prevState.data){
      return {data: nextProps.expenses}
    }
    return prevState;
  }

  render(){
    return (
        <MaterialTable
        title="Expenses"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              this.props.onAdd(newData);
              resolve();
            }),
          onRowUpdate:(newData,oldData)=>
            new Promise(resolve => {
              setTimeout(()=>{
                this.props.onEdit(newData);
                resolve();
              },500)
              
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(()=>{
              this.props.onDelete(oldData);
              resolve();
              },500);
            }),
        }}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyHeadTable);
