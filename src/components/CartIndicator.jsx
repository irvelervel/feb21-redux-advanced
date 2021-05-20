import { Component } from 'react'
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import { setUserNameAction } from '../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => ({
  setUserName: (username) =>
    dispatch(setUserNameAction(username)),
})

class CartIndicator extends Component {

  state = {
    inputValue: ''
  }

  render() {
    return (
      <div className="ml-auto mt-2">
        {this.props.user.firstName ? <>
          <span className="mr-2">Welcome {this.props.user.firstName}!</span>
          <Button color="primary" onClick={() => this.props.history.push("/cart")}>
            <FaShoppingCart />
            <span className="ml-2">{this.props.cart.products.length}</span>
          </Button>
        </> :
          <FormControl
            placeholder="Insert username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.inputValue}
            onChange={e => {
              this.setState({
                inputValue: e.currentTarget.value
              })
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                this.props.setUserName(this.state.inputValue)
              }
            }}
          />}
      </div >
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator));
