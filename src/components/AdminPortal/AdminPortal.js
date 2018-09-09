import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../Main/Main';
import Header from '../Header/Header';
import RequestList from '../RequestList/RequestList';
import Request from '../Request/Request';
import EmailFormModal from '../EmailFormModal/EmailFormModal';
<<<<<<< HEAD
import NotesModal from '../NotesModal/NotesModal';
import { handleGetAllRequests, handleToggle } from '../../redux/actions/requestActions';
=======
import { handleGetAllRequests } from '../../redux/actions/requestActions';
import { handleSendEmail } from '../../redux/actions/emailActions';
>>>>>>> master


class AdminPortal extends Component {

  state = { 
    emailForm: {
      show: false,
      nominator: {}
    },
    notes: {
      show: false,
      notes: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(handleGetAllRequests());
  }

  sendEmail = ({ note, tracking }) => {
    this.props.dispatch(handleSendEmail({
        note,
        tracking,
        nominatorEmail: this.state.emailForm.nominator.nominatorEmail,
        nominatorName: this.state.emailForm.nominator.nominatorName
      }));
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

  showNotes = notes => {
    this.setState({
      ...this.state,
      notes: {
        show: true,
        notes
      }
    });
  }

  handleToggleRequest = request => {
    this.props.dispatch(handleToggle(request));
  }

  renderRequest = request => (
    <Request 
      key={request._id} 
      {...request}
      toggleMarkedSent={this.handleToggleRequest.bind(this, request)}
      showNotes={this.showNotes.bind(this, request.note)} 
      showEmailForm={this.showEmailForm.bind(this, {
        nominatorEmail: request.nominatorEmail,
        nominatorName: request.nominatorName
      })}
    />
  );

  closeModal(name) {
    this.setState({ 
      ...this.state, 
      [name]: {
        ...this.state[name],
        show: false
      } 
    });
  }

  render() {
    return (
      <Main>
        <Header />

        <RequestList
          columns={['Baby', 'Nominator', 'Parents', 'Hospital']}
          data={this.props.requests}
          renderRow={this.renderRequest}
        />

        <EmailFormModal 
          onSend={this.sendEmail}
          visible={this.state.emailForm.show}
          nominator={this.state.emailForm.nominator}
          closeModal={this.closeModal.bind(this, 'emailForm')}
        />

        <NotesModal
          visible={this.state.notes.show} 
          closeModal={this.closeModal.bind(this, 'notes')}
          note={this.state.notes.notes}
        />

      </Main>
    )
  }
}

const mapStateToProps = ({ requests }) => ({
  requests: requests.all
});

export default connect(mapStateToProps)(AdminPortal);