import React, { useState } from 'react';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User added:\nName: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}`);
    // In real app, send to backend here
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (e.g. Developer)"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
