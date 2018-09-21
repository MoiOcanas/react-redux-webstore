import React, { Component } from 'react'
import Item from '../presentation/Item'
import { connect } from 'react-redux'
import actions from '../../actions'
import Dropzone from 'react-dropzone'
import turbo from 'turbo360'
import { Modal } from 'react-bootstrap'

class Results extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            item: {
                //position: { lat: 40.71224117, lng: -73.9995892 }
            },
            order: {

            }
        }
    }

    componentDidMount() {
        this.props.fetchItems()
    }

    updateItem(attr, event){
		event.preventDefault()
		let updated = Object.assign({}, this.state.item)
		updated[attr] = event.target.value
		this.setState({
			item: updated
		})
	}

    addItem(){
		if (this.props.account.currentUser == null){
			alert('Please log in or register to sell items')
			return
		}

		const currentUser = this.props.account.currentUser
		let updated = Object.assign({}, this.state.item)
		updated['position'] = this.props.map.currentLocation
		updated['seller'] = {
			id: currentUser.id,
			username: currentUser.username,
			image: currentUser.image || ''
		}

		// console.log('ADD ITEM: ' + JSON.stringify(updated))
		this.props.addItem(updated)
		.then(data => {
			console.log('ITEM ADDED:' + JSON.stringify(data))
		})
		.catch(err => {
			console.log('ERROR: ' + err.message)
		})
	}

    uploadImage(files) {
        const image = files[0]
        const api_key = 'a0119bae-2bbf-458b-b3ac-63e4118fa268'
        console.log('uploadImage: ' + image.name)
        const turboClient = turbo({ site_id: '5ba2cb573fb93a0013741b33' })

        turboClient.uploadFile(image, api_key)
            .then(data => {
                let updated = Object.assign({}, this.state.item)
                updated['image'] = data.result.url
                this.setState({
                    item: updated
                })
            })
            .catch(err => {
                console.log('Upload ERROR: ' + err.message)
            })
    }

    onPurchase(item, e) {
        e.preventDefault()
        this.setState({
            showModal: true,
            selectedItem: item
        })

        console.log('on purchase: ' + JSON.stringify(item))
    }

    updateOrder(e){
        console.log('update order: ' +  e.target.value)
        let updated = Object.assign({}, this.state.order)
        updated['message'] = e.target.value
        this.setState({
            order: updated
        })
    }

    submitOrder(){
        let updated = Object.assign({}, this.state.order)
        updated['item'] = this.state.selectedItem
        updated['buyer'] = {
            id: this.props.account.currentUser.id,
            username: this.props.account.currentUser.username,
            email: this.props.account.currentUser.email
        }

        console.log('submit order: ' + JSON.stringify(updated))

        this.props.submitOrder(updated)
        .then(data => {        
            const email = {
                fromemail: 'alejandro.ocanas35@gmail.com',
                fromname: 'Garaje sale',
                subject: 'You got a Purchase order!',
                content: updated.message,
                recipent: 'alejandro.ocanas35@gmail.com'
            }
            return this.props.sendEmail(email)
        })
        .then(data => {
             alert('Your order is ready!')
            this.setState({
                showModal: false
            })
        })
        .catch( err => {
            alert('Ops..' + err.message)
        })
    }

    render() {
        const items = this.props.item.all || []
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            items.map((item, i) => {
                                return <Item key={item.id} onPurchase={this.onPurchase.bind(this, item)} item={item} />
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                            <div className="card">
                                <div className="content">
                                    <div className="footer">
                                        <h3> Add item </h3>
                                        <input type="text" onChange={this.updateItem.bind(this, 'name')} className="form-control" style={localStyle.input} placeholder="Name..." />
                                        <input type="text" onChange={this.updateItem.bind(this, 'price')} className="form-control" style={localStyle.input} placeholder="Price..." />
                                        {
                                            (this.state.item.image == null) ? null : <img src={this.state.item.image + '=s240-c'} style={{ width: '100%' }} />
                                        }
                                        <hr />
                                        <div className="stats">
                                            <Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{ marginRight: 16 }} >Add Image</Dropzone>
                                            <button onClick={this.addItem.bind(this)} className="btn btn-success"> Add item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Modal bsSize="lg" show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
                    <Modal.Body style={localStyle.modal}>
                        <h3>Send a message!</h3>
                        <hr />
                        <textarea onChange={this.updateOrder.bind(this)} className="form-control" placeholder="Enter message here..." style={localStyle.textarea}></textarea>
                        <button onClick={this.submitOrder.bind(this)} className="btn btn-success btn-fill">Submit</button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const localStyle = {
    input: {
        marginBottom: '10px',
        border: '1px solid #ddd'
    },
    textarea: {
        border: '1px solid #ddd',
        height: 150,
        marginBottom: 16
    }
}

const stateToProps = (state) => {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    }
}

const callDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch(actions.addItem(item))
        },
        fetchItems: (params) => dispatch(actions.fetchItems(params)),
        submitOrder: (order) => dispatch(actions.submitOrder(order)),
        sendEmail: (email) => dispatch(actions.sendEmail(email))
    }
}

export default connect(stateToProps, callDispatchToProps)(Results)