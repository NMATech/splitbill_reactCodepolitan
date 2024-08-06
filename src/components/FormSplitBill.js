import { useState } from "react";

export default function FormSplitBill({ data, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !myBill) return;

    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {data.nama}</h2>

      <label for="">💰Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label for="">🙋‍♂️Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label for="">🙋‍♀️Tagihan {data.nama}</label>
      <input type="text" value={friendBill} />

      <label for="">🤑Ditalangin sama :</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{data.nama}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
