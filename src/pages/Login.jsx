import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="bg-gray-100 p-6 rounded shadow-lg w-96 mx-auto">
          <div className="mb-4">
            <label className="block text-left">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-left">Password</label>
            <input type="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
