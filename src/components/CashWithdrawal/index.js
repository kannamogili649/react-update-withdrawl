import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  onReduction = value => {
    this.setState = prevState => ({Amount: prevState.Amount - value})
  }

  render() {
    const {denominationsList} = this.props
    const {Amount} = this.state

    return (
      <div className="container">
        <div className="content-container">
          <div className="name-container">
            <div className="initial">
              <p>S</p>
            </div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-div">
            <p>Your Balance</p>
            <p className="price">{Amount}</p>
          </div>
          <p className="para">in Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="withdraw-caption">CHOOSE SUM (IN RUPEES)</p>
          <ul className="price-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                onReduction={this.onReduction}
                reduceList={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
