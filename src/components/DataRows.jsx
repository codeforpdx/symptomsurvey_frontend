import React from 'react';

const DataRows = (props) => {
  const rows = []
    props.data.forEach((tweet) => {
      let location = tweet.geo ? tweet.geo.coordinates : tweet.user.location
      rows.push(
        <tr>
          <td>{tweet.text}</td>
          <td>{location}</td>
          <td>{tweet.created_at}</td>
          <td>{tweet.favorite_count}</td>
        </tr>
      )
    })
  return(rows)
}

export default DataRows;