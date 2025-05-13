import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import useAllUser from "../../../hooks/useAllUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
 

const AllUser = () => {
  const {users, refetch} = useAllUser();
  const axiosSecure = useAxiosSecure();

 const handleDeleteUser = async (id) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      console.log("Deleting user with ID:", id);

      const res = await axiosSecure.delete(`/users/${id}`);

      if (res.data.deletedCount > 0) {
        refetch();
        await Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "User not found or already deleted.",
          icon: "error",
        });
      }
    }
  } catch (error) {
    console.error("Delete failed:", error);
    Swal.fire("Failed!", "Something went wrong.", "error");
  }
};


  return (
    <div className="md:mt-12 md:w-[90%] mx-auto">
      <Helmet>
        <title>User Manage || Hostel Management</title>
      </Helmet>
      <div className="flex justify-between my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      {/*  table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="md:flex hidden">Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td className="hidden md:flex ">{user.email}</td>
                <td>
                  <button className="hover:text-red-500 text-xl md:btn-lg md:btn text-black md:bg-blue-400 md:text-white">
                    <FaUsers></FaUsers>
                  </button>
                </td>
                <td>
                  {user && (
                    <button
                      onClick={() => handleDeleteUser(user?._id)}
                      className="hover:text-red-500 md:btn-lg md:btn"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
