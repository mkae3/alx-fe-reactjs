import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>تفاصيل المستخدم</h3>
      <p>البريد الإلكتروني: {user.email}</p>
    </div>
  );
}

export default UserDetails;
