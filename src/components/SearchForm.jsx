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
          placeholder="97015"
        />
      </label>
      {touched.location && errors.location &&
      <p className="form-error">{errors.location}</p>}
    </div>
    <div className="form-field">
      <label>radius (in miles)
        <Field
          type="text"
          name="radius"
          placeholder="25"
        />
      </label>
      {touched.location && errors.radius &&
      <p className="form-error">{errors.radius}</p>}
    </div>
    <div className="form-field">
      <label>Timeframe (optional)
        <Field
          type="text"
          name="timeFrame"
          placeholder="1 month"
        />
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
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
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
  mapPropsToValues({
    searchTerms,
    location,
    radius,
    timeFrame,
    savedSearch,
    plan,
  }) {
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
    searchTerms: Yup.string().required(),
    location: Yup.string().min(5).max(5),
    radius: Yup.string(),
    timeFrame: Yup.string(),
  }),
  handleSubmit(values) {
    {/* this is where we would run dispatch or make an AJAX call */}
    console.log(values)
  }
})(SearchForm)

