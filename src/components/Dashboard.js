import React from "react";
import {Link} from 'react-router-dom'

// ?? I know there's something weird with the styling on the table... ??

function Dashboard(props) {
  return <div className="stockTable">
      <table>
        <th>
          <tr>
            <td>Company Name</td>
            <td>Symbol</td>
            <td>Price</td>
            <td>Change</td>
          </tr>
        </th>
        <tbody>
          <tr>
            {
             props.data.map((d,i) => {
               return(
               <tr>
                 <td><Link key={i} to={`/stocks/${d.symbol}`}>{d.name}</Link></td>
                 <td>{d.symbol}</td>
                 <td>{d.lastPrice}</td>
                 <td>{d.change}</td>
               </tr>
             )})
            }
          </tr>
        </tbody>
      </table>
    </div>;
};

export default Dashboard;
