import React from "react"
import "./combined.css"

const HistoryComponent =()=>{
    return(
        <div>
          <div class="line-bottom">
            <p class="history-title">  Transaction History  </p>
          </div>

<table>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Pick-Up Date</th>
          <th scope="col">Type of Scrap</th>
          <th scope="col">Quantity</th>
          <th scope="col">Reward</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">10001</a></td>
          <td>24-01-2022</td>
          <td>paper</td>
          <td>10 Kg</td>
          <td>Cash</td>
          <td>✔️</td>
        </tr>
        <tr>
        <td><a href="#">10002</a></td>
          <td>25-01-2022</td>
          <td>paper</td>
          <td>15 Kg</td>
          <td>Cash</td>
          <td>✔️</td>
        </tr>
        <tr>
        <td><a href="#">10003</a></td>
          <td>26-01-2022</td>
          <td>Bottle</td>
          <td>5 Kg</td>
          <td>Cash</td>
          <td>❌</td>
        </tr>
        <tr>
          <td><a href="#">10004</a></td>
          <td>27-01-2022</td>
          <td>Metal</td>
          <td>10 Kg</td>
          <td>Voucher</td>
          <td>❌</td>
          
        </tr>

        <tr>
          <td><a href="#">10005</a></td>
          <td>27-01-2022</td>
          <td>Plastic</td>
          <td>5 Kg</td>
          <td>Voucher</td>
          <td>✔️</td>
        </tr>
      </tbody>
    </table>



        </div>
    )
}
export default HistoryComponent;