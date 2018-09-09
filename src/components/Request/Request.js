import React, { Component } from 'react';
import './Request.css';

import Button from '../Button/Button';

const RequestDetail = ({ title, children }) => (
  <div className="RequestDetail">
    { title && <p className="request-detail-header">{title}</p> }
    { children }
  </div>
)

class Request extends Component {
  
  state = { open: false }

  renderRequestDetails() {
    const {
      baby,
      address,
      address2,
      city,
      state,
      zip,
      subscription,
      nominatorEmail,
      parentEmail,
      showEmailForm,
      showNotes,
      markedSent,
      toggleMarkedSent,
      opened
    } = this.props;

    if (!opened) return null;

    return (
      <div className="request-sub-menu">
        <div className="request-details">

          <div>
            { baby.map((b, i) => (
              <div key={i}>

                <RequestDetail title="DOB">
                  <p className="request-detail-data">{b.birthDate}</p>
                </RequestDetail>  

                <RequestDetail title="Gender">
                  <p className="request-detail-data">{b.gender}</p>
                </RequestDetail> 

                <RequestDetail title="Gestation">
                  <p className="request-detail-data">{`${b.gestationWeeks} weeks`}</p>
                  { b.gestationDays > 0 && <p className="request-detail-data">{`${b.gestationDays} days`}</p> }
                </RequestDetail>

              
                <RequestDetail title="Weight">
                  <p className="request-detail-data">{`${b.weightPounds} weeks`}</p>
                  { b.weightOunces > 0 && <p className="request-detail-data">{`${b.weightOunces} ounces`}</p> }
                </RequestDetail>

              </div>
            )) }
          </div> 


          <div>
            <RequestDetail title="Email">
              <p>{nominatorEmail}</p>
            </RequestDetail>

            <RequestDetail title="Subscribed">
              <p>{String(subscription)}</p>
            </RequestDetail>
          </div>  

          <div>
            <RequestDetail title="Email">
              <p>{parentEmail}</p>
            </RequestDetail>
          </div>
            

          <div>
            <RequestDetail title="Address">
              <p>{address}</p>
              { address2 && <p>{address2}</p> }
              <p>{`${city}, ${state} ${zip}`}</p>
            </RequestDetail>
          </div> 

        </div>


        <div className="request-toolbar">
            <Button title="Show Notes" onClick={showNotes}/>
            <Button title="Send Email" onClick={showEmailForm}/>
            <Button title="Print Shipping Label" onClick={() => {
              window.open('https://www.paypal.com/shiplabel/create/', '_blank');
            }}/>
            <Button title={markedSent ? 'Unsent' : 'Sent'} onClick={toggleMarkedSent} />

        </div>  

        
        
      </div> 
    )
  }

  render() {
    const {
      baby,
      nominatorName,
      parentName,
      hospitalName
    } = this.props;
    return (
        <div
          className="Request"
          onClick={this.props.openRequest}
        >
          <div className="request-header">

              <div>
                <p>{baby[0].firstName}</p>
              </div>

              <div>
                <p>{nominatorName}</p>
              </div>

              <div>
                <p>{parentName}</p>
              </div>

              <div>
                <p>{hospitalName}</p>
              </div>
  
          </div>

          { this.renderRequestDetails() }

        </div>
    )
  }
}

export default Request;