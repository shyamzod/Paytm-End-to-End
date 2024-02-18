import NavBar from "./Child Components/NavBar";
import UsersComponent from "./Child Components/UsersComponent";
import Intro from "./Child Components/Intro";
export default function HomeComponent() {
  return (
    <>
      <NavBar />
      <div>
        {localStorage.getItem("userName") ? <UsersComponent /> : <Intro />}
      </div>
    </>
  );
}
