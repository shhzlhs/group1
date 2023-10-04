package group1.testing.service.item;


import group1.testing.entity.Item;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.item.UpdateItemForm;

import java.util.List;

public interface IItemService {
    List<Item> getAllItems();

    Item getItemById(int id);

    void createItem(CreatingItemForm form);

    void updateItem(UpdateItemForm form);
    
    void deletingItems(List<Integer> ids);
}
