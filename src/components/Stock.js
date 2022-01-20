import React from 'react'

const Stock = props => {
  const stock = props.data.filter( d => d.symbol === props.match.params.symbol)[0]
  return (
    <div>
      <h2>Name: {stock.name}</h3>
      <h3>Stock Symbol: {stock.symbol}</h2>
      <h3>Price: {stock.lastPrice}</h2>
      <h3>High: {stock.high}</h2>
      <h3>Low: {stock.low}</h2>
    </div>
  )
}


export default Stock