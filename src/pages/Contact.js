import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/contact", formData)
      .then(response => {
        console.log(response.data);
        alert("Thank you for your message. We will get back to you soon.");
      })
      .catch(error => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Have any questions or feedback? Feel free to reach out to us!</p>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-400">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mt-1 p-2 bg-slate-700 text-white rounded"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-400">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full mt-1 p-2 bg-slate-700 text-white rounded"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-400">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full mt-1 p-2 bg-slate-700 text-white rounded"
            rows="5"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-indigo-600 py-2 px-4 rounded text-white hover:bg-indigo-500 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
