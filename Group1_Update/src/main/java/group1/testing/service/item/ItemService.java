package group1.testing.service.item;


import group1.testing.entity.Item;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.item.UpdateItemForm;
import group1.testing.repository.IItemRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ItemService implements IItemService{
    @Autowired
     private IItemRepository itemRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item getItemById(int id) {
        return itemRepository.findById(id);
    }

    @Override
    public void createItem(CreatingItemForm form) {
        TypeMap<CreatingItemForm, Item> typeMap = modelMapper.getTypeMap(CreatingItemForm.class, Item.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Item item = modelMapper.map(form, Item.class);
        itemRepository.save(item);

    }
    @Override
    public void updateItem(UpdateItemForm form) {
        Item item = modelMapper.map(form,Item.class);
        itemRepository.save(item);
    }


    @Override
    public void deletingItems(List<Integer> ids) {
        itemRepository.deleteAllById(ids);
    }


}
