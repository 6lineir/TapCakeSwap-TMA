import axios from "axios";

const Worker_Energy = async () => {
  const Users = await axios.get("http://localhost:3003/users");
  Users.data.forEach((user) => {
    if (user.energy < user.energy_max) {
      const url_userID = `http://localhost:3003/users/${user.id}`;

      user.energy = user.energy + user.energy_level;
      axios.put(url_userID, user);

      console.log(user);
    }
  });
};

//! ==> Runer Worker :
setInterval(() => {
  Worker_Energy();
}, 1000);
