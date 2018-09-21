import constants from '../constants'
import { HTTPAsync } from '../utils'

export default {

	addItem: (item) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/api/item', item, constants.ITEM_ADDED))
		}
	},

	fetchItems: (params) => {
		return dispatch => {
			return dispatch(HTTPAsync.get('/api/item', params, constants.ITEMS_RECEIVED))
		}
	},

	submitOrder: (order) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/api/order', order, null))
		}
	},

	sendEmail: (email) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/email/send', email, null))
		}
	},

	locationChanged: (location) => {
		return {
			type: constants.LOCATION_CHANGED,
			data: location
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(HTTPAsync.get('/auth/currentuser', null, constants.CURRENT_USER_RECEIVED))
		}
	}
	
}
