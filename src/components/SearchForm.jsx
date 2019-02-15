import React from 'react';
import { Field, Form, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTweets } from '../redux/reducers/search/actionCreators';

const SearchForm = ({ values }) => (
  <Form>
    <div className="form-field">
      <label>Include these words or phrases
        <Field
          type="text"
          name="searchTerms"
          placeholder="seperate search terms with a comma (,)"
        />
      </label>
      <ErrorMessage name="searchTerms" />
    </div>
    <div className="form-field">
      <label>Location (optional, zipcode)
        <Field
          type="text"
          name="location"
        />
      </label>
      <ErrorMessage name="location" />
    </div>
    <div className="form-field">
      <label>radius (in miles)
        <Field
          type="number"
          name="radius"
          placeholder="25"
        />
      </label>
      <ErrorMessage name="radius" />
    </div>
    <div className="form-field">
      <label>Timeframe (optional)
        <Field component="select" name="timeFrame">
          <option value=""></option>
          <option value="">1 week</option>
          <option value="">2 weeks</option>
          <option value="">1 month</option>
          <option value="">2 months</option>
          <option value="">3 months</option>
          <option value="">6 months</option>
          <option value="">9 months</option>
          <option value="">1 year</option>
        </Field>
      </label>
      <ErrorMessage name="timeFrame" />
    </div>
    <label>
      <Field
        type="checkbox" name="savedSearch" checked={values.savedSearch} />
      Save this search?
    </label>
    <br/>
    <button type="submit">Submit</button>
    <button
      type="button"
      onClick={() => console.log('clicked clear')}
    >Clear</button>
  </Form>
)

export const FormikSearch = withFormik({
  mapPropsToValues: ({
    searchTerms,
    location,
    radius,
    timeFrame,
    savedSearch,
  }) => {
    {/* return an object which sets initial values of the form */}
    return {
      searchTerms: searchTerms || '',
      location: location || '97015',
      radius: radius || '',
      timeFrame: timeFrame || '',
      savedSearch: savedSearch || false,
    }
  },
  validationSchema: Yup.object().shape({
    searchTerms: Yup.string().required('must include at least one search term'),
    location: Yup.string().matches(/^[0-9]{5}$/, 'Location must be a valid 5 digit zipcode'),
    radius: Yup.number().positive('Radius must be a number'),
    timeFrame: Yup.string(),
  }),
  handleSubmit(values, props) {
    props.dispatch(submit(values))
  }
})(SearchForm)

export default connect(
  dispatch => ({ 
    submit: bindActionCreators(searchTweets, dispatch),
  }),
)(FormikSearch)