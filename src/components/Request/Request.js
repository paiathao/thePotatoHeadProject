import React, { Component } from 'react';
import './Request.css';

const RequestDetail = ({ title, data }) => (
  <div className="RequestDetail">
    <p>{title}</p>
    <p>{data}</p>
  </div>
)

class Request extends Component {
  
  state = { open: false }

  renderRequestDetails() {
    console.log(this.props)
    const {
      baby,
      address,
      address2,
      city,
      state,
      zip,
      subscription,
      nominatorEmail,
      parentEmail
    } = this.props;
    return (
      <tr className={`Request-details ${!this.state.open ? 'closed' : null}`}>
        <td></td>
        <td>
          <div style={{ display: 'flex' }}>
          { baby.map((b, i) => (
            <div key={i}>
              <RequestDetail title="DOB" data={b.dob} />      
              <RequestDetail title="Gender" data={b.gender} />      
              <RequestDetail title="Gestation" data={`${b.weeks} weeks`} />
              { b.days > 0 && <RequestDetail data={`${b.days} days`} /> }
              <RequestDetail title="Weight" data={`${b.pounds} pounds`} />
              { b.ounces > 0 && <RequestDetail data={`${b.ounces} ounces`} /> }
            </div>
          )) }
          </div>     
        </td> 
        <td>
          <RequestDetail title="Email" data={nominatorEmail} />
          { subscription && <RequestDetail title="Subscribed" data={String(subscription)} /> }
        </td> 
        <td>
          <RequestDetail title="Email" data={parentEmail} />
        </td>
        <td>
          <RequestDetail title="Address" data={address} />
          <RequestDetail data={address2} />
          <RequestDetail data={`${city}, ${state} ${zip}`} />
        </td>
      </tr> 
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
      <React.Fragment>
        <tr className="Request-headers">
            <td>
              <button onClick={() => this.setState({ open: !this.state.open })}>open</button>
            </td>
            <td>
              <p>{baby[0].first}</p>
            </td>
            <td>
              <p>{nominatorName}</p>
            </td>
            <td>
              <p>{parentName}</p>
            </td>
            <td>
              <p>{hospitalName}</p>
            </td>
        </tr>

        {  this.renderRequestDetails() }

      </React.Fragment>
    )
  }
}

export default Request;