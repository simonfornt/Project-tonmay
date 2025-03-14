import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent!");
  };

  return (
    <>
    <Navbar/>
    <section className="py-16 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gray-800 font-semibold text-lg">Get In Touch</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Me A Message</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">Mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+880"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type Your Message Here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
            <p className="text-gray-600">
              Quam elementum pulvinar etiam non quam lacus. Suspendisse scelerisque purus semper.
            </p>
            <p className="mt-4">
              <strong>Location:</strong> Railgate, Sadar, Jashore, Khulna, Dhaka, Bangladesh.

            </p>
            <p>
              <strong>Phone:</strong> +880 1972730204

            </p>
            <p>
              <strong>Email:</strong> shuddhangan@gmail.com

            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactForm;