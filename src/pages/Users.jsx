import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Users() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>List of Users</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="alert">Error fetching user.</p>}
        {data && (
          <ul className="list-group mt-3">
            {data.map((user) => (
              <li key={user.id} className="">
                <h5>{user.name}</h5>
                <p className=" mt-4 mb-4">Email: {user.email}</p>
                <p className="mb-4">Phone: {user.phone}</p>
                <p className="mb-4">Company: {user.company.name}</p>
                <Link
                  to={`/users/${user.id}`}
                  className="btn btn-primary mt-2 mb-4"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
}
