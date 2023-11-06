package group1.testing.controller;

import group1.testing.dto.UserDTO;
import group1.testing.entity.User;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.user.UpdateUserForm;
import group1.testing.form.user.UserFilterForm;
import group1.testing.service.user.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<UserDTO> getAllUsers(UserFilterForm form) {
        List<User> users = userService.getAllUsers(form);

        List<UserDTO> userDTOS = modelMapper.map(users, new TypeToken<List<UserDTO>>() {
        }.getType());
        return userDTOS;
    }

    @PostMapping
    public void createUser(@RequestBody CreateUserForm form) {
        userService.createUser(form);
    }

    @PutMapping(value = "/{id}")
    public UserDTO updateUser(@PathVariable(name = "id") int id, @RequestBody UpdateUserForm form) {
        form.setId(id);
        User user = userService.updateUser(form);
        return modelMapper.map(user, UserDTO.class);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteAllUserById(@PathVariable(name = "ids") List<Integer> ids) {
        userService.deleteUserByIds(ids);
    }

    @GetMapping(value = "/id={id}")
    public UserDTO getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        return modelMapper.map(user, UserDTO.class);
    }

    @GetMapping(value = "/username={username}")
    public UserDTO getUserByUsername(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        return modelMapper.map(user, UserDTO.class);
    }

    @GetMapping(value = "/email={email}")
    public UserDTO getUserByEmail(@PathVariable String email) {
        User user = userService.getUserByEmail(email);
        return modelMapper.map(user, UserDTO.class);
    }

    @PutMapping(value = "/changeMoney/{userId}/{coin}/{gold}")
    public UserDTO changeCoinAndGoldByUser(@PathVariable int userId, @PathVariable int coin, @PathVariable int gold) {
        return modelMapper.map(userService.changeCoinGoldByUser(userId, coin, gold), UserDTO.class);
    }
}
