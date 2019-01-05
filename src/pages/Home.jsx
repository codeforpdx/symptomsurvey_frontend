import React from 'react';

export default class HomeLayout extends React.Component {

  handleSubmit() {
    //TODO submit form data
    console.log('submit was clicked')
  }

  render() {
    return (
      <div>
        <h3>Hello world</h3>
        <form>
          <label>Include these words or phrases</label>
          <input type="text" />
          <br/>
          <label>location (optional)</label>
          <input type="text" />
          <br/>
          <label>radius</label>
          <input type="text"></input>
          <br/>
          <label>Timeframe (optional)</label>
          <input type="text" />
          <br/>
          <button type="button">Clear</button>
          <br/>
          <button
            type="button"
            onClick={() => this.handleSubmit()}>Search</button>
          <br/>
          <button type="button">Save Search</button>
          <br/>
        </form>
      </div>
      )
  }
  }
