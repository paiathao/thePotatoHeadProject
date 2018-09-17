import React from 'react';
import { CSVLink } from 'react-csv';
import { connect } from 'react-redux';

class Csv extends React.Component {

    filterBySubscription = (request) => {
        if (request.subscription === true) {
            return request.nominatorName && request.nominatorEmail;
        }
    }

    render() {

        let array = this.props.requests;

        let data = array.filter(this.filterBySubscription);

        let headers = [
            {label: 'Nominator Name', key: 'nominatorName'},
            {label: 'Nominator Email', key: 'nominatorEmail'},
          ];

        return (
            <div>
                <CSVLink 
                    data={data}
                    headers={headers}
                    filename={"subscribers.csv"}
                    className="csvBtn">Export Subscribers to CSV ⬇</CSVLink>
            </div>
        );
    }
}

const mapStateToProps = ({ requests }) => ({
    requests: requests.all,
});

export default connect(mapStateToProps)(Csv);