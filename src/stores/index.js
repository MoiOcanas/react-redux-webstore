import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, itemReducer, mapReducer, accountReducer } from '../reducers'

var store
export default {

	configure: (initialState) => {
		const reducers = combineReducers({
			user: userReducer,
			item: itemReducer,
			map: mapReducer,
			account: accountReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
