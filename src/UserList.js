import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const infos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
      setLoading(false);
    };
    infos();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {users.map((el) => (
            <div>
              <h2>Name : {el.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
