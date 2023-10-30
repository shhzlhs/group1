package group1.testing.service.user;

import group1.testing.entity.User;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.user.UpdateUserForm;
import group1.testing.form.user.UserFilterForm;
import group1.testing.repository.IUserRepository;
import group1.testing.specification.UserSpecification;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<User> getAllUsers(UserFilterForm form) {
        Specification<User> where = UserSpecification.buildWhere(form);
        return userRepository.findAll(where);
    }

    @Override
    public void createUser(CreateUserForm form) {
        TypeMap<CreateUserForm, User> typeMap = modelMapper.getTypeMap(CreateUserForm.class, User.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreateUserForm, User>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        User user = modelMapper.map(form, User.class);
        userRepository.save(user);
    }

    @Override
    public void updateUser(UpdateUserForm form) {
        User user1 = userRepository.findById(form.getId());
        User user = modelMapper.map(form, User.class);
        user.setFollows(user1.getFollows());
        user.setFollowings(user1.getFollowings());
        user.setItems(user1.getItems());
        userRepository.save(user);
    }

    @Override
    public void deleteUserByIds(List<Integer> ids) {
        userRepository.deleteAllById(ids);

    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username);
//        if (user == null) {
//            throw new UsernameNotFoundException(username);
//        }
//        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()));
//    }
}
