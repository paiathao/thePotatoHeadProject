import React, { Component } from 'react';
// import { connect } from 'react-redux';

class autoResponse extends Component{

    render(){
        return(
            <div>
                {/* logo go here */}
                <h1>
                    The Potato Head Project
                </h1>
                <p>
                    Thank you, this.whatevertheirnameis,
                    for requesting a potato head project care package!
                </p>
                <p>
                    Once the package is on it's way, you will receive another email with the tracking 
                    number, to track it's progress.
                </p>
                <p>
                    Please consider donating to The Potato Head Project,
                    anything will greatly help. If you would like to donate, please click below
                </p>
                {/* button to link donation view */}
               <p>Love Kristin</p> 
               <p>Thank you for spreading hope, one potato at a time.</p>
               <p>Stay connected with us!!</p>
               {/* Icon link FB and website */}
            </div>
        )
    }

}

export default autoResponse