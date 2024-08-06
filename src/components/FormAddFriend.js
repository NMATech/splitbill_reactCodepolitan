import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [nama, setNama] = useState("");
  const [gambar, setGambar] = useState("https://i.pravatar.cc/48/");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !gambar) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      nama,
      image: `${gambar}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setNama("");
    setGambar("");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label for="">🙎‍♂️Nama</label>
      <input
        type="text"
        name=""
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <label for="">📷Gambar</label>
      <input
        type="text"
        name=""
        value={gambar}
        onChange={(e) => setGambar(e.target.value)}
      />

      <button className="button">Tambah</button>
    </form>
  );
}
