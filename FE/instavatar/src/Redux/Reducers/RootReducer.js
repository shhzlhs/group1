import { combineReducers } from "redux";
import {
  followsBarReducer,
  userReducer,
  usernameDetailReducer,
} from "./UserReducer";
import { postReducer } from "./PostReducer";
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  followsBar: followsBarReducer,
  usernameDetail: usernameDetailReducer,
});
export { rootReducer };
