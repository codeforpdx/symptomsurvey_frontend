import React from 'react';
import { Formik, Field, Form, withFormik } from 'formik';

const SearchForm = ({
  values,
  handleChange,
  handleSubmit
}) => (
  <form
    onSubmit={handleSubmit}
  >
    <label>Include these words or phrases</label>
    <input
      type="text"
      name="searchTerms"
      placeholder="seperate search terms with a comma (,)"
      value={values.searchTerms}
      onChange={handleChange}
    />
    <br/>
    <label>Location (optional, zipcode)</label>
    <input
      type="text"
      name="location"
      placeholder="97015"
      value={values.location}
      onChange={handleChange}
    />
    <br/>
    <label>radius (in miles)</label>
    <input
      type="text"
      name="radius"
      placeholder="25"
      value={values.radius}
      onChange={handleChange}
    />
    <br/>
    <label>Timeframe (optional)</label>
    <input
      type="text"
      name="timeFrame"
      placeholder="1 month"
      value={values.timeFrame}
      onChange={handleChange}
    />
    <br/>
    <button type="submit">Submit</button>
    <button
      type="button"
      onClick={() => console.log('clicked clear')}
    >Clear</button>
    <button
      type="button"
      onClick={() => console.log('clicked "Save Search"')}
    >Save Search</button>
  </form>
)


export const FormikSearch = withFormik({
  mapPropsToValues({
    searchTerms,
    location,
    radius,
    timeFrame
  }) {
    {/* return an object which sets initial values of the form */}
    return {
      searchTerms: '',
      location: '97015',
      radius: '',
      timeFrame: ''
    }
  },
  handleSubmit(values) {
    {/* this is where we would run dispatch or make an AJAX call */}
    console.log(values)
  }
})(SearchForm)

