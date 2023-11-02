package group1.testing.controller;

import group1.testing.dto.UserItemDTO;
import group1.testing.entity.UserItem;
import group1.testing.service.useritem.IUserItemService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/userItems")
@CrossOrigin("*")
public class UserItemController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IUserItemService userItemService;

    @GetMapping(value = "/{userId},{itemId}")
    public UserItemDTO getByUserIdAndItemId(@PathVariable int userId, @PathVariable int itemId) {
        UserItem userItem = userItemService.getByUserIdAndItemId(userId, itemId);
        return modelMapper.map(userItem, UserItemDTO.class);
    }

    @DeleteMapping(value = "/{userId},{itemId}")
    public void deleteByUserIdAndItemId(@PathVariable int userId, @PathVariable int itemId) {
        userItemService.deleteByUserIdAndItemId(userId, itemId);
    }

    @PostMapping(value = "/{userId}/{itemId}")
    public void addUserItem(@PathVariable int userId, @PathVariable int itemId) {
        userItemService.addUserItem(userId, itemId);
    }
}
