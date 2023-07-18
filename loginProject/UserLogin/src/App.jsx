import "./App.css";
import Homepage from "./Homepage";
import Login from "./Login";
import axios from "axios";

function App() {
  const checkUsers = async (kullaniciAdi, sifre) => {
    const response = await axios.get("http://localhost:3000/Users");
    const users = response.data;
    console.log(users)

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (user.username === kullaniciAdi && user.password === sifre) {
        console.log("Giriş yapıldı");
        return;
      }
    }

    console.log("Girdiğiniz bilgiler hatalı");
  };

  return (
    <div className="App">
      <Login onCheck={checkUsers} />
      <Homepage />
    </div>
  );
}

export default App;
