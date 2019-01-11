import React from 'react';

export default class HomeLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
      location: '',
      radius: '',
      timeframe: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearchTerms = this.handleSearchTerms.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleRadius = this.handleRadius.bind(this);
    this.handleTimeframe = this.handleTimeframe.bind(this)
  }

  handleSearchTerms(e) {
    this.setState({searchTerms: e.target.value})
  }

  handleLocation(e) {
    this.setState({location: e.target.value})
  }

  handleRadius(e) {
    this.setState({radius: e.target.value})
  }
  handleTimeframe(e) {
    this.setState({timeframe: e.target.value})
  }

  handleSubmit() {
    event.preventDefault();
    console.log(this.state)
    this.setState({
      searchTerms: '',
      location: '',
      radius: '',
      timeframe: '',
    })
  }

  render() {

    {/* validation for form fields is HERE!*/}
    const {searchTerms, location, radius, timeframe} = this.state;
      {/* validators for "search" button*/}
    const searchEnabled =
      searchTerms.length > 0 &&

    {/* jsx incoming...*/}
    return (
      <div>
        <h3>Hello world</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Include these words or phrases</label>
          <input
            type="text"
            value={this.state.searchTerms}
            onChange={this.handleSearchTerms}
          />
          <br/>
          <label>location (optional, zipcode)</label>
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleLocation}
          />
          <br/>
          <label>radius (in miles)</label>
          <input
            type="text"
            value={this.state.radius}
            onChange={this.handleRadius}
          ></input>
          <br/>
          <label>Timeframe (optional)</label>
          <input
            type="text"
            value={this.state.timeframe}
            onChange={this.handleTimeframe}
          />
          <br/>
          <button type="button">Clear</button>
          <br/>
          <button
            type="button"
            disabled={!searchEnabled}
            onClick={() => this.handleSubmit()}>Search</button>
          <br/>
          <button type="button">Save Search</button>
          <br/>
        </form>
      </div>
      )
  }
  }
