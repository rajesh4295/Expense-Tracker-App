import React from 'react';
import {connect} from 'react-redux';
import {Line,Bar} from 'react-chartjs-2';
import moment from 'moment';

const mapStateToProps = (state) => {
    return {
        expenses: state.expenseReducer.expenses
    }
}



 class Dashboard extends React.Component{
     constructor(props){
         super(props);
         this.state= {
             labels:[],
             datasets:[]
         }
     }

     componentDidMount(){
         
        let labels = this.props.expenses.map(e=>moment(e.date.split('/').reverse().join('-')).format('LL')).sort(function(a, b){
            var aa = a.split('/').reverse().join(),
                bb = b.split('/').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });

        let labelSet = new Set(labels);
        let labelSetArr = Array.from(labelSet);
        let data = [];
        let colors = ['rgba(252, 194, 3, 0.5)','rgba(9, 237, 237, 0.5)','rgba(237, 5, 82, 0.5)'];

        this.props.expenses.map((e,i)=>{
            let user={label:'',data:[],fill:false}
            user['label']=e.name;
            if(data.map(l=>l.label).indexOf(e.name)===-1){
                user["backgroundColor"] = colors[i];
                data.push(user)
            }
        })
        this.props.expenses.map((e,i)=>{
            if(data.map(e=>e.label).indexOf(e.name)>-1){
                let pos =data.map(e=>e.label).indexOf(e.name);
                data[pos].data.push({t:moment(e.date.split('/').reverse().join('-')).format('LL'),y:e.amount})
            }
        });
        
        this.setState({datasets:data,labels:labelSetArr},()=>{
            this.forceUpdate();
        });
        
     }
    

     render(){
      var data = {
        labels: this.state.labels,
          datasets:this.state.datasets,
          options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'linear'
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        
      };
         return(
             <div className="row">
                <div className="col-6">
                    <Line data={data} />
                 </div>
                 <div className="col-6">
                    <Bar data={data} />
                 </div>
             </div>
         )
     }
 }

export default connect(mapStateToProps, null)(Dashboard);