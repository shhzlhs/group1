package group1.testing.service.user;

import group1.testing.entity.User;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.user.UpdateUserForm;
import group1.testing.form.user.UserFilterForm;

import java.util.List;

public interface IUserService {
    List<User> getAllUsers(UserFilterForm form);

    //create
    void createUser(CreateUserForm form);

    //update
    User updateUser(UpdateUserForm form);

    //delete
    void deleteUserByIds(List<Integer> ids);

    User getUserById(int id);

    User getUserByUsername(String username);

    User getUserByEmail(String email);

    User changeCoinGoldByUser(int userId, int coinChanged, int goldChanged);
}
