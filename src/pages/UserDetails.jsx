import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function UserDetails() {
  const { userId } = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return (
    <>
      <Header />
      <section className="container mt-4 mb-5">
        {loading && <p>Loading...</p>}
        {error && <p className="alert alert-danger">Error fetching user.</p>}

        {data && (
          <>
            <h2>{data.name}</h2>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Name:</strong> {data.name}
              </li>
              <li className="list-group-item">
                <strong>Username:</strong> {data.username}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {data.email}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {data.phone}
              </li>
              <li className="list-group-item">
                <strong>Website:</strong> {data.website}
              </li>
              <li className="list-group-item">
                <strong>Company:</strong> {data.company.name}
              </li>
              <li className="list-group-item">
                <strong>City:</strong> {data.address.city}
              </li>
              <li className="list-group-item">
                <strong>Zipcode:</strong> {data.address.zipcode}
              </li>
            </ul>
          </>
        )}
      </section>
    </>
  );
}
