
import React, { Component } from 'react'

export default (props) => {

    const item = props.item

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="numbers">
                                <p>{item.name}</p>
                                ${item.price}
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <img style={localStyle.itemImage} src={item.image} />
                        </div>
                    </div>
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            <button className="btn btn-success btn-fill" onClick={props.onPurchase.bind(this)}> I'm interest </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: 'right'
    },
    itemImage: {
        width: 100 + '%',
        padding: 3,
        border: '1px solid #ddd',
        background: '#fffffa'
    }
}