package group1.testing.controller;

import group1.testing.dto.MessageDTO;
import group1.testing.dto.NotReadDTO;
import group1.testing.entity.Conversation;
import group1.testing.entity.Message;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.repository.IConversationRepository;
import group1.testing.service.coversation.IConversationService;
import group1.testing.service.message.IMessageService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/messages")
public class MessageController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IMessageService messageService;
    @Autowired
    IConversationService conversationService;

    @PostMapping
    public void createMessage(@RequestBody CreateMessageForm form) {
        messageService.createMessage(form);
    }

    @GetMapping(value = "/{id}") //Hiển thị danh sách tin nhắn theo cuộc hội thoại
    public List<MessageDTO> getByConversation(@PathVariable int id) {
        List<Message> messages = messageService.getByConversation(id);
        List<MessageDTO> messageDTOS = modelMapper.map(messages, new TypeToken<List<MessageDTO>>() {
        }.getType());
        return messageDTOS;
    }

    @DeleteMapping(value = "/{id}")//Xoá vĩnh viễn tin nhắn
    public void deleteById(@PathVariable int id) {
        messageService.deleteById(id);
    }

    @PutMapping(value = "/convers/{id}/user/{userId}")//Sửa tình trạng tin nhắn thành đã xem
    public void updateToReadComplete(@PathVariable int id, @PathVariable int userId) {
        messageService.updateToReadCompletedByConversationAndUserId(id, userId);
    }

    @GetMapping(value = "/last/{id}")//Lấy ra danh sách các tin nhắn mới nhất theo danh sách cuộc hội thoại của user
    public List<MessageDTO> getLastMessagesByUserId(@PathVariable int id) {
        List<Conversation> conversations = conversationService.getByUserId(id);
        List<Message> messages = new ArrayList<>();
        conversations.forEach(conversation -> {
            messages.add(messageService.getLastMessagesByUserAndConversation(id, conversation.getId()));
        });
        List<MessageDTO> messageDTOS = modelMapper.map(messages, new TypeToken<List<MessageDTO>>() {
        }.getType());
        return messageDTOS;
    }

    @GetMapping(value = "/notReadList/user/{userId}")
    //Lấy ra số lượng tin nhắn chưa đọc tương ứng với các cuộc hội thoại của user
    public List<NotReadDTO> getListNumberOfNotReadByUser(@PathVariable int userId) {
        return messageService.getListNumberOfNotReadYetByUser(userId);
    }

    @PutMapping(value = "/user/{userId}/message/{messId}")//Xoá 1 tin nhắn từ 1 phía
    public void updateMessageToDel(@PathVariable int userId, @PathVariable int messId) {
        messageService.updateToDeleteByUser(userId, messId);
    }

    @PutMapping(value = "/delAll/user/{userId}/convers/{conversationId}")
    //Xoá toàn bộ tin nhắn trong 1 cuộc hội thoại từ 1 phía
    public void delAllByUserAndConversationId(@PathVariable int userId, @PathVariable int conversationId) {
        messageService.updateAllToDellByUserAndConversation(userId, conversationId);
    }

    @GetMapping(value = "/notRead/user/{userId}") //Lấy ra tổng số lượng tin nhắn chưa đọc của user
    public int getNumberOfNotReadYetByUser(@PathVariable int userId) {
        return messageService.getNumberOfNotReadYetByUser(userId);
    }
}
