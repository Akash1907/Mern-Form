import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemList.css";

function ItemList({ onEdit }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/items/getUsers")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to fetch users");
        }
        return response.data;
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(() => {
      fetchUsers();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/items/deleteUser/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          fetchUsers();
        } else {
          console.error("Failed to delete user");
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
    console.log(userId);
    setTimeout(() => {
      alert("User successfully deleted");
    }, "700");
  };

  const handleEdit = (user) => {
    onEdit(user);
  };

  return (
    <div>
      {users.length === 0 ? (
        <div className = 'noData'>No data to show</div>
      ) : (
        <div className="listOfItems">
          {users.slice().reverse().map((user) => (
            <div key={user._id} className="userInfo">
              <p className="item">Name: {user.name}</p>
              <p className="item">Age: {user.age}</p>
              <p className="item">Email: {user.email}</p>
              <p className="item">Mobile Number: {user.mobileNumber}</p>
              <div className="itemBtns">
                <button className="btns" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button className="btns" onClick={() => deleteUser(user._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
