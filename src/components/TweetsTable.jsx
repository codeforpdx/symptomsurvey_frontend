import React, {Component} from 'react';
import glamorous from 'glamorous';

const TableDiv = glamorous.div({
  '& .tweets-table': {
    borderCollapse: 'collapse',
    '& > tbody > tr > th, td': {
      padding: '5px',
      border: '1px solid black',
    }
  },
});

class TweetsTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <TableDiv>
        <table className="tweets-table">
          <caption>Tweets Returned From Search</caption>
          <tbody>
            <tr className="column-headers">
              <th scope="col">Tweet</th>
              <th scope="col">Location</th>
              <th scope="col">Date</th>
              <th scope="col">Popularity</th>
            </tr>
            <tr>
              <td scope="row">First tweet</td>
              <td>Tweet Location</td> 
              <td>Tweet Date</td>
              <td>Tweet Popularity</td>
            </tr>
          </tbody>
        </table>
      </TableDiv>
    )
  }
}

export default TweetsTable;