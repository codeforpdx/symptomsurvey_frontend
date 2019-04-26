import React from 'react';
import moment from 'moment';

const DataRows = (props) => {
  const rows = []
    props.data.forEach((tweet) => {
      let location = tweet.geo ? tweet.geo.coordinates : tweet.user.location
      let hashtagArray = []
      tweet.entities.hashtags.length && tweet.entities.hashtags.forEach((hashtag) => {
        hashtagArray.push(hashtag.text)
      })
      let timestamp = moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a')
      rows.push(
        <tr>
          <td>{tweet.text}</td>
          <td>{location}</td>
          <td>{timestamp}</td>
          <td style={{whiteSpace: 'pre-line'}}>{hashtagArray.join('\n')}</td>
        </tr>
      )
    })
  return(rows)
}

export default DataRows;