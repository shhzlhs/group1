package group1.testing.service.useritem;

import group1.testing.entity.UserItem;

public interface IUserItemService {

    UserItem getByUserIdAndItemId(int userId, int itemId);

    void addUserItem(int userId, int itemId);

    void deleteByUserIdAndItemId(int userId, int itemId);

}
