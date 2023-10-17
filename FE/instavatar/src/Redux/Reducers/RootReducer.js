import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { postReducer } from "./PostReducer";
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});
export { rootReducer };
