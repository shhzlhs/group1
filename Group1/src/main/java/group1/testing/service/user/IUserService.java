package group1.testing.service.user;

import group1.testing.entity.User;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.user.UpdateUserForm;
import group1.testing.form.user.UserFilterForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IUserService {
    //phân trang, get All User
    Page<User> getAllUsers(Pageable pageable, UserFilterForm form);
    //create
    void createUser(CreateUserForm form);
    //update
    void updateUser(UpdateUserForm form);
    //delete
    void deleteUserById(List<Integer> ids);
}
