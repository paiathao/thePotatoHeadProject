import React from 'react';
import { CSVLink } from 'react-csv';
import { connect } from 'react-redux';

class Csv extends React.Component {

    render() {

        return (
            <div style={{float : 'right', marginRight : 25}}>
                <CSVLink
                    data={this.props.requests}
                    filename={"subscribers.csv"}
                    className="btn">Export Subscribers to CSV :arrow_down:</CSVLink>
            </div>
        );
    }
}

const mapStateToProps = ({ requests }) => ({
    requests: requests.all,
});

export default connect(mapStateToProps)(Csv);