import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList.js";
import "./AddItem.css";

function AddItem() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [editUser, setEditUser] = useState(null);

  const userobject = {
    name: name,
    age: age,
    email: email,
    mobileNumber: mobileNumber,
  };

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setAge(editUser.age);
      setEmail(editUser.email);
      setMobileNumber(editUser.mobileNumber);
    }
  }, [editUser]);

  const validateName = () => {
    for (const char of name) {
      if (
        !(char >= "a" && char <= "z") &&
        !(char >= "A" && char <= "Z") &&
        char !== " "
      ) {
        alert("Please enter the correct name");
        return false;
      }
    }
    if (name === "") {
      alert("Please enter the name");
      return false;
    } else if (name.length < 2) {
      alert("Please enter the correct name");
      return false;
    }
    return true;
  };

  const validateAge = () => {
    if (age === "") {
      alert("Please enter the age");
      return false;
    } else if (age >= 100 || age <=5) {
      alert("Please enter the correct age");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    for (const char of email) {
      if (char >= "A" && char <= "Z") {
        alert("Please enter the correct email");
        return false;
      }
    }
    if (email === "") {
      alert("Please enter the email");
      return false;
    } else if (
      email.includes("@") &&
      email.includes(".com") &&
      email.length > 10
    ) {
      return true;
    }
    alert("Please enter the correct email");
    return false;

  };

  const validateMobileNUmber = () => {
    var numberLength = String(mobileNumber)
      .split("")
      .reduce((count, digit) => count + 1, 0);
    if (mobileNumber === "") {
      alert("Please enter your mobile number");
      return false;
    } else if (numberLength !== 10) {
      alert("Please enter correct mobile number");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      editUser &&
      validateName() &&
      validateAge() &&
      validateEmail() &&
      validateMobileNUmber()
    ) {
      axios
        // .put(
        //   `http://localhost:5000/items/updateUser/${editUser._id}`,
        //   userobject
        // )
        .put(`https://mern-form-backend-zeta.vercel.app/items/updateUser/${editUser._id}`, userobject)
        .then((response) => {
          console.log(response.data);
          setEditUser(false);
        })
        .then(setName(""), setAge(""), setEmail(""), setMobileNumber(""))
        .catch((error) => {
          console.error(error);
        });
        setTimeout(() => {
          alert("User successfully updated");
        }, "2000");
    } else if (
      !editUser &&
      validateName() &&
      validateAge() &&
      validateEmail() &&
      validateMobileNUmber()
    ) {
      axios
        // .post("http://localhost:5000/items/users", userobject)
        .post("https://mern-form-backend-zeta.vercel.app/items/users",userobject)
        .then((response) => {
          console.log(response.data);
        })
        .then(setName(""), setAge(""), setEmail(""), setMobileNumber(""))
        .catch((error) => {
          console.error(error);
        });
      setTimeout(() => {
        alert("User successfully added");
      }, "1500");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div className="AddItem">
      <div className="inputSection">
        <p className="heading">Form</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">
              Name
              <input
                className="inputField"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              Age
              <input
                className="inputField"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              Email
              <input
                className="inputField"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="label">
              Mobile No.
              <input
                className="inputField"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="submitBtn">
            {editUser ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <div className="ItemList">
          <ItemList onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default AddItem;
