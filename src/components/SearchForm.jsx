import React from 'react';
import { Field, Form, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTweets } from '../redux/reducers/search/actionCreators';
import styled from 'styled-components';

const StylishForm = styled.div({
  '& Form': {
    backgroundImage: 'radial-gradient(#D8D8D8, #cccccc, #377a6a)',  
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'start',
    alignContent: 'stretch',
    justifyItems: 'center',
    justifyContent: 'center',
    border: '2px #377a6a solid',
    borderRadius: '1rem',
    margin: '1rem',
  },

  '& .form-subsection': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 1rem 0rem 1rem',
    flexFlow: 'row wrap',
    padding: '1.5rem',
    backgroundImage: 'radial-gradient(snow, #D8D8D8)',  
    margin: '1rem',
    border: '2px #337ab7 solid',
    borderRadius: '1rem',
    width: '40vw',
  },

  '& button': {
    fontSize: 20,
    padding: '1.2rem',
    margin: '1.2rem',
    padding: '5px 10px',
    borderRadius: 5,
  },
  '& .submit-button': {background: '#377a6a', color: 'white'},


  '& .form-field': {
    border: '2px #337ab7 solid',
    borderRadius: '0.2rem',
    fontSize: 20,
  },

  '& .form-label': {
    fontSize: 20,
  },

  '& .form-field-spacing': {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '100%',
    paddingBottom: 6, 
  },

});

const SearchForm = ({ values }) => (
  <StylishForm>
    <Form onSubmit={(values, actions) => {alert('Submitted! However, nothing is currently sent via submission. See Formik\'s documention to handle submission: jaredpalmer.com/formik/docs/tutorial')}}>
      
      <div className="form-subsection">
        <div className="form-field-spacing">
          <label className="form-label">
          Include these words or phrases
          </label>
            <Field
              type="text"
              name="searchTerms"
              placeholder="separate search terms with a comma (,)"
              className="form-field"
            />
          <ErrorMessage name="searchTerms" />
        </div>
        <div className="form-field-spacing">
          <label className="form-label">
          Timeframe (optional)
          </label>
            <Field
              component="select"
              name="timeFrame"
               className="form-field"
            >
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
          <ErrorMessage name="timeFrame" />
        </div>
      </div>

      <div className="form-subsection">
        <div className="form-field-spacing">
          <label className="form-label">
          Zipcode
          </label>
            <Field
              type="text"
              name="location"
              placeholder="97015"
              className="form-field"
            />
          <ErrorMessage name="location" />
        </div>
        <div className="form-field-spacing">
          <label className="form-label">
          Radius (miles)
          </label>
            <Field
              type="number"
              name="radius"
              placeholder="25"
              className="form-field"
            />
          <ErrorMessage name="radius" />
        </div>
      </div>

      <div className="form-subsection">
        <label className="form-label">
          <Field
            type="checkbox"
            name="savedSearch"
            checked={values.savedSearch}
            className="form-field"
            />
          Save this search?
        </label>
        <br/>
        <button
          className="submit-button"
          type="submit"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => console.log('clicked clear')}
        >
          Clear
        </button>
      </div>

    </Form>
  </StylishForm>
)

const FormikSearch = withFormik({
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
  handleSubmit(values, FormikBag) {
    FormikBag.props.submit(values)
  }
})(SearchForm)

export default connect(
  () => ({}),
  dispatch => ({
    submit: bindActionCreators(searchTweets, dispatch),
  })
)(FormikSearch)
