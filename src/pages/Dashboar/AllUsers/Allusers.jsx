 
 
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllUser = () => {
 

  return (
    <div className="md:mt-12 md:w-[90%] mx-auto">
      <Helmet>
        <title>User Manage || Hostel Management</title>
      </Helmet>
      <div className="flex justify-between my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {"users.length"}</h2>
      </div>
      {/*  table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="md:flex hidden ">Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
              <tr key={""}>
                <th>1</th>
                <td>{"user.name"}</td>
                <td className="hidden md:flex">{"user.email"}</td>
                <td>
                   
                    <button
                       
                      className="hover:text-red-500 text-xl md:btn-lg md:btn text-black md:bg-blue-400 md:text-white"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  
                </td>
                <td>
                  <button
                    
                    className="hover:text-red-500 md:btn-lg md:btn"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
