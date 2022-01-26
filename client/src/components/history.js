import React from "react"
import "./combined.css"

const HistoryComponent =()=>{
    return(
        <div>
            <p class="history-title">
        Transaction History
    </p>

    <table width="75%">
        <tr>
          <th>Id</th>
          <th>Pick-up Date</th>
          <th>Type of scrap</th>
          <th>Quantity</th>
          <th>Reward</th>
          <th>Status</th>
        </tr>
        <tr>
          <td><a href="#">10001</a></td>
          <td>24-01-2022</td>
          <td>Paper</td>
          <td>10kg</td>
          <td>Swiggy Voucher</td>
          <td>❌</td>
        </tr>
        <tr>
            <td>10002</td>
            <td>20-01-2022</td>
            <td>Books</td>
            <td>20kg</td>
            <td>Audible Voucher</td>
            <td>✔️</td>
        </tr>
      </table>
        </div>
    )
}
export default HistoryComponent;