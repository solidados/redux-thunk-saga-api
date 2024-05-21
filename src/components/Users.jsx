import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userReducer.js";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className={"users-wrapper"}>
      <fieldset>
        <legend className={"btn-subtitle"}>Number of users</legend>
        <h2>{users.length}</h2>
        <div className={"btn-wrapper"}>
          <button onClick={() => getUsers()}>Get Users</button>
        </div>
      </fieldset>

      <fieldset>
        <legend className={"btn-subtitle"}>Users from API</legend>
        {users.length > 0 ? (
          <ol className="customers">
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ol>
        ) : (
          <div>
            <p className={"notice"}>Users were not found</p>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default Users;
