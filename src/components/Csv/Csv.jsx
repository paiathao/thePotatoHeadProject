import React from 'react';
import { CSVLink } from 'react-csv';
import { connect } from 'react-redux';
import ArrowDown from '@material-ui/icons/GetApp'

class Csv extends React.Component {

    filterBySubscription = (request) => {
        if (request.subscription === true) {
            return request
        }
    }

    render() {

        let array = this.props.requests

        let data = array.filter(this.filterBySubscription)

        console.log(data)

        return (
            <div>
                <CSVLink style={{ textDecoration: 'none' }}
                    data={data}
                    filename={"subscribers.csv"}
                    className="btn">Export Subscribers to CSV <ArrowDown /></CSVLink>
            </div>
        );
    }
}

const mapStateToProps = ({ requests }) => ({
    requests: requests.all,
});

export default connect(mapStateToProps)(Csv);