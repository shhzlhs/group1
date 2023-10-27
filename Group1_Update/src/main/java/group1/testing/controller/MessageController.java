package group1.testing.controller;

import group1.testing.dto.MessageDTO;
import group1.testing.entity.Message;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.service.message.IMessageService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/messages")
public class MessageController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IMessageService messageService;

    @PostMapping
    public void createMessage(@RequestBody CreateMessageForm form) {
        messageService.createMessage(form);
    }

    @GetMapping(value = "/{id}")
    public List<MessageDTO> getByConversation(@PathVariable int id) {
        List<Message> messages = messageService.getByConversation(id);
        List<MessageDTO> messageDTOS = modelMapper.map(messages, new TypeToken<List<MessageDTO>>() {
        }.getType());
        return messageDTOS;
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable int id) {
        messageService.deleteById(id);
    }

    @PutMapping(value = "/{ids}")
    public void updateToReadComplete(@PathVariable List<Integer> ids) {
        messageService.updateToReadCompleted(ids);
    }

    @GetMapping(value = "/last/{id}")
    public MessageDTO getLastByConversation(@PathVariable int id) {
        Message message = messageService.getLastMessageByConversation(id);
        return modelMapper.map(message, MessageDTO.class);
    }

    @GetMapping(value = "/user/{userId}/convers/{conversationId}")
    public int getNumberOfNotReadYetByUserAndConversation(@PathVariable int userId, @PathVariable int conversationId) {
        return messageService.getNumberOfNotReadYetByUserAndConversation(userId, conversationId);
    }

    @PutMapping(value = "/user/{userId}/convers/{conversationId}")
    public void updateMessageToDel(@PathVariable int userId, @PathVariable int conversationId) {
        messageService.updateToDeleteByUser(userId, conversationId);
    }
}
