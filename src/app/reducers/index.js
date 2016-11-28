import { combineReducers } from 'redux'

import erratas from './erratas'
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  erratas,
  form: reduxFormReducer
})

export default rootReducer
