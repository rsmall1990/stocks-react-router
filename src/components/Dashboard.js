import React from "react";
import {Link} from 'react-router-dom'

function Dashboard(props) {
  let data = props.data.map((d, i) => {
    return <Link key={i} to={`/stocks/${d.symbol}`}>
        <li >{d.name}</li>
      </Link>
  });
  return <ul>{data}</ul>;
}

export default Dashboard;
