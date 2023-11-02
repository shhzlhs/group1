package group1.testing.service.useritem;

import group1.testing.entity.User;
import group1.testing.entity.UserItem;
import group1.testing.form.user.CreateUserForm;
import group1.testing.repository.IItemRepository;
import group1.testing.repository.IUserItemRepository;
import group1.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserItemService implements IUserItemService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IUserItemRepository userItemRepository;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    IItemRepository iItemRepository;

    @Override
    public UserItem getByUserIdAndItemId(int userId, int itemId) {
        return userItemRepository.findByUserIdAndItemId(userId, itemId);
    }

    @Override
    public void addUserItem(int userId, int itemId) {
       UserItem userItem = new UserItem();
       userItem.setItem(iItemRepository.findById(itemId));
       userItem.setUser(userRepository.findById(userId));
       userItemRepository.save(userItem);
    }

    @Override
    public void deleteByUserIdAndItemId(int userId, int itemId) {
        userItemRepository.deleteByUserIdAndItemId(userId, itemId);
    }
}
