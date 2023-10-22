import { combineReducers } from "redux";
import { followsBarReducer, userReducer } from "./UserReducer";
import { postReducer } from "./PostReducer";
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  followsBar: followsBarReducer,
});
export { rootReducer };
