import React from 'react';
import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';

const SearchForm = ({
  values,
  errors,
  touched,
}) => (
  <Form>
    <div className="form-field">
      <label>Include these words or phrases
        <Field
          type="text"
          name="searchTerms"
          placeholder="seperate search terms with a comma (,)"
        />
      </label>
      {touched.searchTerms && errors.searchTerms &&
      <p className="form-error">{errors.searchTerms}</p>}
    </div>
    <div className="form-field">
      <label>Location (optional, zipcode)
        <Field
          type="text"
          name="location"
        />
      </label>
      {touched.location && errors.location &&
      <p className="form-error">{errors.location}</p>}
    </div>
    <div className="form-field">
      <label>radius (in miles)
        <Field
          type="number"
          name="radius"
          placeholder="25"
        />
      </label>
      {touched.location && errors.radius &&
      <p className="form-error">{errors.radius}</p>}
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
      {touched.timeFrame && errors.timeFrame &&
      <p className="form-error">{errors.timeFrame}</p>}
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
  <button
    type="button"
    onClick={() => console.log('clicked "Save Search"')}
  >Save Search</button>
  </Form>
)


export const FormikSearch = withFormik({
  mapPropsToValues: ({
    searchTerms,
    location,
    radius,
    timeFrame,
    savedSearch,
    plan,
  }) => {
    {/* return an object which sets initial values of the form */}
    return {
      searchTerms: searchTerms || '',
      location: location || '97015',
      radius: radius || '',
      timeFrame: timeFrame || '',
      savedSearch: savedSearch || true,
      plan: plan || 'free',
    }
  },
  validationSchema: Yup.object().shape({
    searchTerms: Yup.string().required('must include at least one search term'),
    location: Yup.string().matches(/^[0-9]{5}$/, 'Location must be a valid 5 digit zipcode'),
    radius: Yup.number().positive('Radius must be a number'),
    timeFrame: Yup.string(),
  }),
  handleSubmit(values) {
    {/* this is where we would run dispatch or make an AJAX call */}
    console.log(values)
  }
})(SearchForm)

