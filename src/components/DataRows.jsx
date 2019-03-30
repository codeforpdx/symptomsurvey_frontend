import React from 'react';

const DataRows = (props) => {
  const rows = []
    props.data.forEach((tweet) => {
      let location = tweet.geo ? tweet.geo.coordinates : tweet.user.location
      let hashtagArray = []
      tweet.entities.hashtags.length && tweet.entities.hashtags.forEach((hashtag) => {
        hashtagArray.push(hashtag.text)
      })
      rows.push(
        <tr>
          <td>{tweet.text}</td>
          <td>{location}</td>
          <td>{tweet.created_at}</td>
          <td>{tweet.favorite_count}</td>
          <td style={{whiteSpace: 'pre-line'}}>{hashtagArray.join('\n')}</td>
        </tr>
      )
    })
  return(rows)
}

export default DataRows;