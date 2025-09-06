import { useContext } from "react";
import UserContext from "./UserContext";
import UserDetails from "./UserDetails";

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>معلومات المستخدم</h2>
      <p>الاسم: {user.name}</p>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
