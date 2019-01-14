import React from 'react';
import { FormikSearch } from '../components/SearchForm.jsx';

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
        <FormikSearch />
      </div>
      )
  }
  }
