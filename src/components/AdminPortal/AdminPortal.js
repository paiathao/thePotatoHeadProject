import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../Main/Main';
import Header from '../Header/Header';
import RequestList from '../RequestList/RequestList';
import Request from '../Request/Request';
import EmailFormModal from '../EmailFormModal/EmailFormModal';


class AdminPortal extends Component {

  state = { 
    emailForm: {
      show: false,
      nominator: {}
    }
  }

  sendEmail = ({ note, tracking }) => {
    this.props.dispatch({
      type: 'SEND_EMAIL_WITH_TRACKING',
      payload: {
        note,
        tracking,
        nominatorEmail: this.state.emailForm.nominator.nominatorEmail,
        nominatorName: this.state.emailForm.nominator.nominatorName
      }
    });
  }

  showEmailForm = nominator => {
    this.setState({
      ...this.state,
      emailForm: {
        show: true,
        nominator
      }
    });
  }

  renderRequest = request => (
    <Request 
      key={request.id} 
      {...request} 
      showEmailForm={this.showEmailForm.bind(this, {
        nominatorEmail: request.nominatorEmail,
        nominatorName: request.nominatorName
      })}
    />
  );

  render() {
    return (
      <Main>
        <Header />

        <RequestList
          columns={['Baby', 'Nominator', 'Parents', 'Hospital']}
          data={this.props.data}
          renderRow={this.renderRequest}
        />

        <EmailFormModal 
          onSend={this.sendEmail}
          visible={this.state.emailForm.show}
          nominator={this.state.emailForm.nominator}
          closeModal={() => {
            this.setState({ 
              ...this.state, emailForm: {
                ...this.state.emailForm,
                show: false
              } 
            });
          }}
        />

      </Main>
    )
  }
}

AdminPortal.defaultProps = {
  data: [
    {
      id: 1,
      baby: [{ first: 'Jerry', last: 'Smite', dob: '11/22/17', gender: 'boy', weeks: 22, days: 0, pounds: 4, ounces: 8 }],
      nominatorName: 'Jimmy',
      nominatorEmail: 'jimmy@jimmy.com',
      parentName: 'Jean And Gary',
      parentEmail: 'jean@jean.com',
      hospitalName: 'MSP NCIU',
      address: '123 Fake Hosptial St.',
      address2: null,
      city: 'Minneapolis',
      state: 'MN',
      zip: '55405',
      country: 'USA',  
      personalNote: 'I hope everything goes well for everyone!!!!',
      subscription: true,
    },
    {
      id: 2,
      baby: [
        { first: 'Jerry', last: 'Smite', dob: '11/22/17', gender: 'boy', weeks: 22, days: 0, pounds: 4, ounces: 8 },
        { first: 'Jerry', last: 'Smite', dob: '11/22/17', gender: 'boy', weeks: 22, days: 0, pounds: 4, ounces: 8 }
      ],
      nominatorName: 'Jimmy',
      nominatorEmail: 'jimmy@jimmy.com',
      parentName: 'Jean And Gary',
      parentEmail: 'jean@jean.com',
      hospitalName: 'MSP NCIU',
      address: '123 Fake Hosptial St.',
      address2: null,
      city: 'Minneapolis',
      state: 'MN',
      zip: '55405',
      country: 'USA',  
      personalNote: 'I hope everything goes well for everyone!!!!',
      subscription: true,
    }
  ]
}

export default connect()(AdminPortal);