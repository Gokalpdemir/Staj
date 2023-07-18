import { useState } from "react";
function Login({ onCheck }) {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setsifre] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setKullaniciAdi(event.target.value);
  };

  const handleChangeSifre = (event) => {
    event.preventDefault();
    setsifre(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    onCheck(kullaniciAdi, sifre);
  };

  return (
    <div className="mainDiv">
      <div>
        
      </div>
      <form className="form">
      
        <label className="form-label">Kullanıcı adı:</label>
        <input
          className="form-input"
          value={kullaniciAdi}
          onChange={handleChange}
        />

        <label className="form-label">Şifre:</label>
        <input
          className="form-input"
          value={sifre}
          onChange={handleChangeSifre}
        />

        <button className="form-button" onClick={handleLogin}>
          Giriş yap
        </button>
      </form>
    </div>
  );
}

export default Login;
