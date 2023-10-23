import { useSelector } from "react-redux";
import "./HotUsers.css";
import LogInButton from "./LogInButton";
import WebInfo from "./WebInfo";
function HotUsers(props) {
  let users = useSelector((state) => state.users);

  users.sort((a, b) => b.follows.length - a.follows.length);
  const top5Users = users.slice(0, 5);

  let items = top5Users.map((user, index) => {
    let avatar = `/imgs/avatars/${user.avatar}`;
    return (
      <div key={index} id="HotUser" className="row">
        <div id="UserInfo" className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <img className="Avatar" src={avatar} alt={user.avatar} />
        </div>
        <div id="UserInfo">
          <b>{user.username}</b>
          <br></br>
          <p>{user.follows.length} người theo dõi</p>
        </div>
      </div>
    );
  });
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="row">
        <LogInButton />
      </div>

      {items}
      <WebInfo />
    </div>
  );
}

export default HotUsers;
