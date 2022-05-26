import React, { Component } from 'react'
import axios from 'axios';
export class First extends Component {


    state = {
        Request: '',
     
        Load:false,
        progress:'',
        res_data:''
     

      }
   

      Requestinput = event => {
        this.setState({ Request: event.target.value});

      }
   
      handleSubmit = event => {
        
        event.preventDefault();
    
        const user = {
          Request: this.state.Request,
       
        };
    
   
          try{
            //alert(jsonauthdata);
              axios.post(`http://localhost:5000/admin/Insert`,  user, {
                headers:{'Content-Type': 'application/json','Accept': 'application/json',"Access-Control-Allow-Origin" :"*"}
            
                
              })
              
    
        .then(res => {
         
          // console.log(res.status);
          // console.log(res.data);
          this.setState({
            res_data:res.data
          });
         
           //this.setState({Request: ''});
    
      })
    }  catch(error) {
     
            console.log(error)
            this.setState({
              Load :false,
              });

            console.log("internal server error");
          }
    
    
      }
  render() {
    return (
   <div>
       <center>
     
       <form onSubmit={this.handleSubmit} >
         <center>
     <div class="alert alert-success" role="alert">
<h1> Chat Bot </h1>
</div>
</center>
  <div className="container">
    <label htmlFor="uname"><b> Request</b></label>
    <input type="text" placeholder=" Enter Input" onChange={this.Requestinput} name="Request" required />
    <button type="submit"> Send</button>
    <label htmlFor="uname"><b> Response</b></label>
    <input type="text"  value={this.state.res_data} readOnly />
   

  </div>
 
</form>

</center>
</div>

    )
  }
}

export default First