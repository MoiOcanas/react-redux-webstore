"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Item = _interopRequire(require("../presentation/Item"));

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Dropzone = _interopRequire(require("react-dropzone"));

var turbo = _interopRequire(require("turbo360"));

var Modal = require("react-bootstrap").Modal;
var Results = (function (Component) {
    function Results() {
        _classCallCheck(this, Results);

        _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
        this.state = {
            showModal: false,
            item: {},
            order: {}
        };
    }

    _inherits(Results, Component);

    _prototypeProperties(Results, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.fetchItems();
            },
            writable: true,
            configurable: true
        },
        updateItem: {
            value: function updateItem(attr, event) {
                event.preventDefault();
                var updated = Object.assign({}, this.state.item);
                updated[attr] = event.target.value;
                this.setState({
                    item: updated
                });
            },
            writable: true,
            configurable: true
        },
        addItem: {
            value: function addItem() {
                if (this.props.account.currentUser == null) {
                    alert("Please log in or register to sell items");
                    return;
                }

                var currentUser = this.props.account.currentUser;
                var updated = Object.assign({}, this.state.item);
                updated.position = this.props.map.currentLocation;
                updated.seller = {
                    id: currentUser.id,
                    username: currentUser.username,
                    image: currentUser.image || ""
                };

                // console.log('ADD ITEM: ' + JSON.stringify(updated))
                this.props.addItem(updated).then(function (data) {
                    console.log("ITEM ADDED:" + JSON.stringify(data));
                })["catch"](function (err) {
                    console.log("ERROR: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        uploadImage: {
            value: function uploadImage(files) {
                var _this = this;
                var image = files[0];
                console.log("uploadImage: " + image.name);
                var turboClient = turbo({ site_id: "5a104f39eaac0e0014b0f81c" });

                turboClient.uploadFile(image).then(function (data) {
                    // console.log('FILE UPLOADED: ' + data.result.url)

                    var updated = Object.assign({}, _this.state.item);
                    updated.image = data.result.url;
                    _this.setState({
                        item: updated
                    });
                })["catch"](function (err) {
                    console.log("Upload ERROR: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        onPurchase: {
            value: function onPurchase(item, e) {
                e.preventDefault();
                this.setState({
                    showModal: true,
                    selectedItem: item
                });

                console.log("on purchase: " + JSON.stringify(item));
            },
            writable: true,
            configurable: true
        },
        updateOrder: {
            value: function updateOrder(e) {
                console.log("update order: " + e.target.value);
                var updated = Object.assign({}, this.state.order);
                updated.message = e.target.value;
                this.setState({
                    order: updated
                });
            },
            writable: true,
            configurable: true
        },
        submitOrder: {
            value: function submitOrder() {
                var _this = this;
                var updated = Object.assign({}, this.state.order);
                updated.item = this.state.selectedItem;

                updated.buyer = {
                    id: this.props.account.currentUser.id,
                    username: this.props.account.currentUser.username,
                    email: this.props.account.currentUser.email
                };

                // console.log('submitOrder: ' + JSON.stringify(updated))
                this.props.submitOrder(updated).then(function (data) {
                    var email = {
                        fromemail: "alejandro.ocanas35@gmail.com",
                        fromname: "Garage Sale!",
                        subject: "You got a Purchase Order!",
                        content: updated.message,
                        recipient: "alejandro.ocanas35@gmail.com"
                    };

                    return _this.props.sendEmail(email);
                }).then(function (data) {
                    alert("Your order has been submitted");
                    _this.setState({
                        showModal: false
                    });
                })["catch"](function (err) {
                    alert("OOPS: " + err.message);
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                var items = this.props.item.all || [];
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "container-fluid" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            items.map(function (item, i) {
                                return React.createElement(Item, { key: item.id, onPurchase: _this.onPurchase.bind(_this, item), item: item });
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-4" },
                                React.createElement(
                                    "div",
                                    { className: "card" },
                                    React.createElement(
                                        "div",
                                        { className: "content" },
                                        React.createElement(
                                            "div",
                                            { className: "footer" },
                                            React.createElement(
                                                "h3",
                                                null,
                                                " Add item "
                                            ),
                                            React.createElement("input", { type: "text", onChange: this.updateItem.bind(this, "name"), className: "form-control", style: localStyle.input, placeholder: "Name..." }),
                                            React.createElement("input", { type: "text", onChange: this.updateItem.bind(this, "price"), className: "form-control", style: localStyle.input, placeholder: "Price..." }),
                                            this.state.item.image == null ? null : React.createElement("img", { src: this.state.item.image + "=s240-c", style: { width: "100%" } }),
                                            React.createElement("hr", null),
                                            React.createElement(
                                                "div",
                                                { className: "stats" },
                                                React.createElement(
                                                    Dropzone,
                                                    { onDrop: this.uploadImage.bind(this), className: "btn btn-info btn-fill", style: { marginRight: 16 } },
                                                    "Add Image"
                                                ),
                                                React.createElement(
                                                    "button",
                                                    { onClick: this.addItem.bind(this), className: "btn btn-success" },
                                                    " Add item"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Modal,
                        { bsSize: "sm", show: this.state.showModal, onHide: function () {
                                _this.setState({ showModal: false });
                            } },
                        React.createElement(
                            Modal.Body,
                            { style: localStyle.modal },
                            React.createElement(
                                "h3",
                                null,
                                "Purchase item"
                            ),
                            React.createElement("hr", null),
                            React.createElement("textarea", { onChange: this.updateOrder.bind(this), className: "form-control", placeholder: "Enter message here...", style: localStyle.textarea }),
                            React.createElement(
                                "button",
                                { onClick: this.submitOrder.bind(this), className: "btn btn-success btn-fill" },
                                "Purcharse"
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Results;
})(Component);

var localStyle = {
    input: {
        marginBottom: "10px",
        border: "1px solid #ddd"
    },
    textarea: {
        border: "1px solid #ddd",
        height: 150,
        marginBottom: 16
    }
};

var stateToProps = function (state) {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    };
};

var callDispatchToProps = function (dispatch) {
    return {
        addItem: function (item) {
            dispatch(actions.addItem(item));
        },
        fetchItems: function (params) {
            return dispatch(actions.fetchItems(params));
        },
        submitOrder: function (order) {
            return dispatch(actions.submitOrder(order));
        },
        sendEmail: function (email) {
            return dispatch(actions.sendEmail(email));
        }
    };
};

module.exports = connect(stateToProps, callDispatchToProps)(Results);
//position: { lat: 40.71224117, lng: -73.9995892 }