import React from 'react';

export default class HomeLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
      location: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleSearchTerm(e) {
    this.setState({searchTerms: e.target.value})
  }

  handleLocation(e) {
    this.setState({location: e.target.value})
  }

  handleSubmit() {
    event.preventDefault();

    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <h3>Hello world</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Include these words or phrases</label>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTerm}
          />
          <br/>
          <label>location (optional)</label>
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleLocation}
          />
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
