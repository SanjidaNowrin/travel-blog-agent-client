import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageBlogs = () => {
  const [event, setEvent] = useState([]);
  const [reload, setReload] = useState(true);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("https://desolate-depths-37774.herokuapp.com/allBlogs")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [control, reload]);

  const handleDelete = (id) => {
    fetch(`https://desolate-depths-37774.herokuapp.com/deleteBlogs/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure?");
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };
  // update status
  function confirmHandler(id) {
    const confirmation = window.confirm("are you sure to confirm!!");
    if (confirmation) {
      fetch(`https://desolate-depths-37774.herokuapp.com/userBlog/${id}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            setReload(!reload);
          }
        });
    }
  }
  return (
    <div className="container">
      <h1 className="mt-3 mb-5 text-center" style={{ color: "#565454" }}>
        Total Blogs: {event?.length}
      </h1>
      <Table
        striped
        bordered
        hover
        className="p-3 mb-3 mb-5 rounded shadow bg-body"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Destination description</th>
            <th>Current Status</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        {event?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{pd.name}</td>

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
                  src={pd.img}
                  alt=""
                />
              </td>
              <td>{pd.desc}</td>
              <td>{pd.status}</td>
              <td>
                <i
                  className="fas fa-edit fa-2xl"
                  onClick={() => confirmHandler(pd._id)}
                ></i>
              </td>
              <td>
                <i
                  className="fas fa-trash-alt fa-2xl"
                  onClick={() => handleDelete(pd._id)}
                ></i>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageBlogs;
