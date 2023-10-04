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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<User> getAllUsers(Pageable pageable, UserFilterForm form) {
        Specification<User> where = UserSpecification.buildWhere(form);
        return userRepository.findAll(where, pageable);
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
        User user = modelMapper.map(form, User.class);
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(List<Integer> ids) {
        userRepository.deleteAllById(ids);

    }
}
