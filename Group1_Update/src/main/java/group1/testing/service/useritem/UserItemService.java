package group1.testing.service.useritem;

import group1.testing.entity.User;
import group1.testing.entity.UserItem;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.useritem.AddUserItemForm;
import group1.testing.repository.IUserItemRepository;
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

    @Override
    public UserItem getByUserIdAndItemId(int userId, int itemId) {
        return userItemRepository.findByUserIdAndItemId(userId, itemId);
    }

    @Override
    public void addUserItem(AddUserItemForm form) {
        TypeMap<AddUserItemForm, UserItem> typeMap = modelMapper.getTypeMap(AddUserItemForm.class, UserItem.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreateUserForm, User>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        UserItem userItem = modelMapper.map(form, UserItem.class);
        userItemRepository.save(userItem);
    }

    @Override
    public void deleteByUserIdAndItemId(int userId, int itemId) {
        userItemRepository.deleteByUserIdAndItemId(userId, itemId);
    }
}
