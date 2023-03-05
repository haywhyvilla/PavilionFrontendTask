import React from "react";
import "./DisplayTable.css";

const DisplayTable = () => {
  const data = [
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "REGENT SYNERGY",
      terminalID: "2013432456",
      amount: "400",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABBA ALHAJI GARBA",
      terminalID: "6754654689",
      amount: "200",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ZILLON CONCEPT NIG",
      terminalID: "8976543213",
      amount: "100",
      status: true,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "970",
      status: true,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "900",
      status: true,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "500",
      status: true,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "200",
      status: true,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "700",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "300",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "800",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "700",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "400",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "FAITH ADERONKE LTD",
      terminalID: "8976543213",
      amount: "500",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
  ];

  let td_data = data.map((item, index) => (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>{item.merchantName}</td>
      <td>{item.terminalID}</td>
      <td>{item.amount}</td>
      <td>
        {item.status === true ? (
          <button className="approved-btn">Approved</button>
        ) : (
          <button className="failed-btn">Failed</button>
        )}
      </td>
      <td>{item.pan}</td>
      <td>
        {" "}
        <span className="veiw">{item.Receipt}</span>
      </td>
    </tr>
  ));
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Merchant Name</th>
            <th>Terminal ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>PAN</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>{td_data}</tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
