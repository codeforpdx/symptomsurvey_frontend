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
    <input
      type="text"
      name="searchTerms"
      placeholder="seperate search terms with a comma (,)"
      value={values.searchTerms}
      onChange={handleChange}
    />
    <input
      type="text"
      name="location"
      placeholder="97015"
      value={values.location}
      onChange={handleChange}
    />
    <input
      type="text"
      name="radius"
      placeholder="25"
      value={values.radius}
      onChange={handleChange}
    />
    <input
      type="text"
      name="timeFrame"
      placeholder="1 month"
      value={values.timeFrame}
      onChange={handleChange}
    />
    <button>Submit</button>
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
      searchTerms: ''
    }
  },
  handleSubmit(values) {
    {/* this is where we would run dispatch or make an AJAX call */}
    console.log(values)
  }
})(SearchForm)

