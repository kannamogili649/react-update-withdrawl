import './index.css'

const DenominationItem = props => {
  const {reduceList, onReduction} = props
  const {value} = reduceList

  const reduceAmount = () => {
    onReduction(value)
  }

  return (
    <li className="button-container">
      <button type="submit" className="button" onClick={reduceAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
