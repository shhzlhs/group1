package group1.testing.controller;


import group1.testing.dto.ItemDTO;
import group1.testing.entity.Item;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.item.UpdateItemForm;
import group1.testing.service.item.IItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/items")

public class ItemController {
    @Autowired
    private IItemService itemService;
    @Autowired
    private ModelMapper modelMapper;
    @GetMapping
    public List<ItemDTO> getAllItems(){
        List<Item> items = itemService.getAllItems();
        List<ItemDTO> itemDTOS = modelMapper.map(items,new TypeToken<List<ItemDTO>>(){}
                .getType());
        return itemDTOS;
    }
    @GetMapping("/{id}")
    public ItemDTO getItemById(@PathVariable(name = "id")int id){
        Item item = itemService.getItemById(id);
        return modelMapper.map(item,ItemDTO.class);

    }
    @PostMapping
    public void createItem(@RequestBody CreatingItemForm form){
        itemService.createItem(form);
    }
    @PutMapping("/{id}")
    public void updateItem(@RequestBody UpdateItemForm form, @PathVariable(name = "id")int id){
        itemService.updateItem(form);
    }

    @DeleteMapping("/{ids}")
    public void deletingItem(@PathVariable List<Integer> ids){
        itemService.deletingItems(ids);
    }

}
