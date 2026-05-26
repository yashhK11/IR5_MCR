import Header from "../components/Header";

const Statistics = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>User Statistics</h2>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="mb-2">Total number of Users</h2>
              <h1>10</h1>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="mb-2">Paid Users</h2>
              <h1>5</h1>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="mb-2">Most Valuable User</h2>
              <h1>Leanne Graham</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
