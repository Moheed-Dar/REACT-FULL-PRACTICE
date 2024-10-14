import { Fragment } from "react";

function User(props) {
  const item = "my name is moheeddar";
  return (
    <div>
      <h1>this is react fragment</h1>
      <button onClick={() => props.data(item)}>Click</button>
    </div>
  );
}
export default User;
