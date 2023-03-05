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
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
    {
      merchantName: "ABDUL COSMETICS",
      terminalID: "2013460897",
      amount: "900",
      status: false,
      pan: "653457****7856",
      Receipt: "Veiw",
    },
  ];

  let td_data = data.map((item, idex) => (
    <tr key={item.id}>
      <td>{item.merchantName}</td>
      <td>{item.terminalID}</td>
      <td>{item.amount}</td>
      <td>{item.status}</td>
      <td>{item.pan}</td>
      <td>{item.Receipt}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <tbody>{td_data}</tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
