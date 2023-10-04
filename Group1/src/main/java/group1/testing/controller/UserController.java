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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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
    public Page<UserDTO> getAllUsers(@PageableDefault(page = 0, size = 10) Pageable pageable, UserFilterForm form) {
        Page<User> userPage = userService.getAllUsers(pageable, form);
        List<User> users = new ArrayList<>(userPage.getContent());
        Collections.sort(users, new Comparator<User>() {
            @Override
            public int compare(User o1, User o2) {
                return o2.getFollows().size() - o1.getFollows().size();
            }
        });
        List<UserDTO> userDTOS = modelMapper.map(users, new TypeToken<List<UserDTO>>() {
        }.getType());
        return new PageImpl<>(userDTOS, pageable, userPage.getTotalElements());
    }

    @PostMapping
    public void createUser(@RequestBody CreateUserForm form) {
        userService.createUser(form);
    }

    @PutMapping(value = "/{id}")
    public void updateUser(@PathVariable(name = "id") int id, @RequestBody UpdateUserForm form) {
        form.setId(id);
        userService.updateUser(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteAllUserById(@PathVariable(name = "ids") List<Integer> ids) {
        userService.deleteUserById(ids);
    }

}
