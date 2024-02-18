import { useRecoilValue } from "recoil";
import { fetchUserData } from "../../store";
import UserComponent from "./UserComponent";
import { SelectorUser } from "../../store";
export interface User {
  username: string;
}
export default function UsersComponent() {
  let selectorusers = useRecoilValue(fetchUserData);
  selectorusers = selectorusers.filter(
    (user) => user.username != localStorage.getItem("userName")
  );
  return (
    <>
      <div>
        {selectorusers.map((users: SelectorUser) => (
          <UserComponent user={users} key={users.UserBalance.UserId} />
        ))}
      </div>
    </>
  );
}
