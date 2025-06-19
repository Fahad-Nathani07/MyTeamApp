import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext'; // ✅
import EditUserModal from '../components/EditUserModal'; // (create next)

const ViewUsers = () => {
  const { users } = useContext(UserContext); // ✅
  
  
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const closeModal = () => {
    setEditingUser(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-600">No users added yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      )}
      {editingUser && (
        <EditUserModal user={editingUser} onClose={closeModal} />
      )}

    </div>
  );
};

export default ViewUsers;
