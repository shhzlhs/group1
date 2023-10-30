package group1.testing.controller;

import group1.testing.dto.ConversationDTO;
import group1.testing.dto.ItemDTO;
import group1.testing.entity.Conversation;
import group1.testing.form.conversation.CreateConversationForm;
import group1.testing.service.coversation.IConversationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/conversations")
public class ConversationController {

    @Autowired
    IConversationService conversationService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping(value = "/user/{id}") //Hiển thị danh sách hội thoại theo User
    public List<ConversationDTO> getAllByUser(@PathVariable int id) {
        List<Conversation> conversations = conversationService.getByUserId(id);
        List<ConversationDTO> conversationDTOS = modelMapper.map(conversations, new TypeToken<List<ConversationDTO>>() {
        }
                .getType());
        return conversationDTOS;
    }

    @GetMapping(value = "/users/{id1}/{id2}")//Tìm cuộc hội thoại giữa 2 người
    public ConversationDTO getByUserId(@PathVariable int id1, @PathVariable int id2) {
        Conversation conversation = conversationService.getByUser1AndUser2(id1, id2);
        return modelMapper.map(conversation, ConversationDTO.class);
    }

    @PostMapping //Tạo cuộc hội thoại mới
    public void createConversation(@RequestBody CreateConversationForm form) {
        conversationService.createConversation(form);
    }

    @PutMapping(value = "/user/{userId}/convers/{conversationId}")//Xoá cuộc hội thoại từ 1 phía
    public void updateToDel(@PathVariable int userId, @PathVariable int conversationId) {
        conversationService.updateToDelByUser(userId, conversationId);
    }

    @PutMapping(value = "/recover/user/{userId}/convers/{conversationId}")//Tạo mới cuộc hội thoại đã xoá từ 1 phía (không khôi phục tin nhắn cũ)
    public void recoverConversationByUser(@PathVariable int userId, @PathVariable int conversationId) {
        conversationService.recoverByUserAndConversationId(userId, conversationId);
    }

    @DeleteMapping(value = "/{id}")//Xoá vĩnh viễn cuộc hội thoại
    public void delById(@PathVariable int id) {
        conversationService.deleteConversation(id);
    }
}
