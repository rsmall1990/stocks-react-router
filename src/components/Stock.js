import React from 'react'

const Stock = props => {
  const stock = props.data.filter( d => d.symbol === props.match.params.symbol)[0]
  return (
    <div>
      <h2>Name: {stock.name}</h2>
      <h3>Stock Symbol: {stock.symbol}</h3>
      <h3>Price: {stock.lastPrice}</h3>
      <h3>High: {stock.high}</h3>
      <h3>Low: {stock.low}</h3>
    </div>
  )
}


export default Stock