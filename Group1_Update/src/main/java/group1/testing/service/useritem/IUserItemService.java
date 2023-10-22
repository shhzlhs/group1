package group1.testing.service.useritem;

import group1.testing.entity.UserItem;
import group1.testing.form.useritem.AddUserItemForm;

public interface IUserItemService {

    UserItem getByUserIdAndItemId(int userId, int itemId);

    void addUserItem(AddUserItemForm form);

    void deleteByUserIdAndItemId(int userId, int itemId);

}
