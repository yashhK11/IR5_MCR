import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-primary text-white text-center py-5">
        <h1>User Database</h1>
        <p>View company's user data</p>
        <Link to="/users" className="btn btn-light">
          View List of Users
        </Link>
      </div>
      <div className="text-center py-5">
        <h2>User Statistics</h2>
        <p>View company's user statistics</p>
        <Link to="/statistics" className="btn btn-primary">
          View User Stats
        </Link>
      </div>
      <Footer />
    </>
  );
}
