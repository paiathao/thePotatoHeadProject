import React, { Component } from 'react';
import './Request.css';

import Button from '../Button/Button';

const RequestDetail = ({ title, data }) => (
  <div className="RequestDetail">
    <p>{title}</p>
    <p>{data}</p>
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
      toggleMarkedSent
    } = this.props;
    return (
      <div className={`request-details ${this.props.opened ? 'open' : null}`}>
        <div>
          <div>
            <div>
              { baby.map((b, i) => (
                <div key={i}>
                  <RequestDetail title="DOB" data={b.birthDate} />      
                  <RequestDetail title="Gender" data={b.gender} />      
                  <RequestDetail title="Gestation" data={`${b.gestationWeeks} weeks`} />
                  { b.gestationDays > 0 && <RequestDetail data={`${b.gestationDays} days`} /> }
                  <RequestDetail title="Weight" data={`${b.weightPounds} pounds`} />
                  { b.weightOunces > 0 && <RequestDetail data={`${b.weightOunces} ounces`} /> }
                </div>
              )) }
            </div>     
          </div> 
          <div>
            <RequestDetail title="Email" data={nominatorEmail} />
            { subscription && <RequestDetail title="Subscribed" data={String(subscription)} /> }
          </div> 
          <div>
            <RequestDetail title="Email" data={parentEmail} />
          </div>
          <div>
            <RequestDetail title="Address" data={address} />
            { address2 && <RequestDetail data={address2} />}
            <RequestDetail data={`${city}, ${state} ${zip}`} />
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