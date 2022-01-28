import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const WriteBlog = () => {
  const [control, setControl] = useState(false);
  const [reload, setReload] = useState(true);
  const { allContext } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;
  useEffect(() => {
    const query = `https://desolate-depths-37774.herokuapp.com/myblog?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [email, reload]);
  // console.log(carts);
  //delete
  const handleDelete = (id) => {
    const confirmation = window.confirm("are you sure to delete?");
    if (confirmation) {
      fetch(`https://desolate-depths-37774.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            setControl(!control);
            setReload(!reload);
          }
        });
    }
    // console.log(id);
  };
  return (
    <div
      className="card mt-4 mb-3 border-0 container"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Blog Name</th>
            <th>Expense</th>
            <th>Category</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        {carts?.map((cart, index) => (
          <tbody key={cart._id}>
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  width="100%"
                  style={{
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "15px",
                  }}
                  src={cart.img}
                  alt=""
                />
              </td>
              <td>{cart.name}</td>
              <td>{cart.expense}</td>
              <td>{cart.category}</td>
              <td>{cart.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="text-white btn p-2"
                  style={{ backgroundColor: "#00BCD9" }}
                >
                  <i className="fas fa-trash-alt "></i>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default WriteBlog;
