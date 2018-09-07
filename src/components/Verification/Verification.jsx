import React, { Component } from 'react';
import { connect } from 'react-redux';

//action
import { CHECK_VERIFICATION_ACTION } from '../../redux/actions/verificationActions';

//
const mapStateToProps = (state) => ({
    user: state.user,
  }
  );

class Verification extends Component{
    constructor(props){
        super(props);
            this.state={
                input:'',
            }
    }

    handleFormInfo=()=>{
        const data ={
            input:this.state.input
        }
        console.log('did we get the right data?', data)
        this.props.dispatch({ type: CHECK_VERIFICATION_ACTION.CHECK, payload: data   });
    }
    
    /// This will need to be remove, for now it's for testing purpose
    /// this will take info from requestor form
    /// a button will be build and use their address info and check it if its
    handleInput = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleFormInfo}>
                <input 
                onChange={this.handleInput('input')}
                placeholder='this.data'>
                
                </input>
                </form>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Verification)