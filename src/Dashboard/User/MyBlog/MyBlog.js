import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "./../../../hooks/useAuth";
const MyBlog = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const {
    register,
    handleSubmit,
    formState: { errors, reset },
  } = useForm();
  const today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const onSubmit = (data, e) => {
    const newData = { ...data };
    // console.log(newData);
    newData.date = date;
    newData.time = time;
    newData.status = "pending";
    newData.email = user?.email;
    fetch("https://travel-blog-d3v3.onrender.com/writeBlog", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    alert("Blog Added");
    e.target.reset();
  };
  return (
    <div className="mb-5">
      <h1 className="mt-3 text-center " style={{ color: "#565454" }}>
        Add New Blog
      </h1>
      <div lassName="mt-0 col-md-6">
        <div className="p-3 m-auto mt-5 mb-5 rounded shadow login-box w-75 bg-body">
          <div className="border border-0 event-box d-flex justify-content-center align-items-center">
            <div className="mt-3 login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Title"
                  className="p-3 m-2 w-100"
                />

                <input
                  {...register("desc")}
                  placeholder="Description"
                  className="p-3 m-2 w-100"
                />

                <input
                  {...register("traveler")}
                  placeholder="Traveler Name"
                  defaultValue={user.displayName}
                  className="p-3 m-2 w-100"
                />

                <input
                  {...register("expense")}
                  placeholder="Expense"
                  className="p-3 m-2 w-100"
                />

                <input
                  {...register("location")}
                  placeholder="Location"
                  className="p-3 m-2 w-100"
                />

                <select {...register("category")} className="p-3 m-2 w-100">
                  <option>Select</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Family Travel">Family Travel</option>
                  <option value="Photography">Photography</option>
                  <option value="Solo Travelers">Solo Travelers</option>
                  <option value="Other">other</option>
                </select>

                <input
                  {...register("rating")}
                  placeholder="Rating"
                  className="p-3 m-2 w-100"
                />

                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-3 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="mt-3 mb-3 btn w-25"
                  style={{ backgroundColor: "#00BCD9", color: "white" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
