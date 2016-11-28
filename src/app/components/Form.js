import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}

  if (!values.page) {
    errors.page = 'Required'
  } else if (isNaN(Number(values.page))) {
    errors.page = 'Must be a number'
  } else if (Number(values.page) < 18) {
    errors.page = 'Sorry, you must be at least 18 years old'
  }
  if (!values.line) {
    errors.line = 'Required'
  } else if (isNaN(Number(values.line))) {
    errors.line = 'Must be a number'
  } else if (Number(values.line) < 18) {
    errors.line = 'Sorry, you must be at least 18 years old'
  }
  if (!values.text) {
    errors.text = 'Required'
  } else if (values.text.length > 15) {
    errors.text = 'Must be 15 characters or less'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.page < 0) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="page" type="number" component={renderField} label="Seite" />
      <Field name="line" type="number" component={renderField} label="Zeile" />
      <Field name="text" type="text" component={renderField} label="Fehler" />
      <div>
        <button type="submit" disabled={submitting}>Einsenden</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SyncValidationForm)
