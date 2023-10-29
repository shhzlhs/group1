package group1.testing.controller;

import group1.testing.dto.MessageDTO;
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
    public List<MessageDTO> getLastMessagesByUserId(@PathVariable int id) {
        List<Conversation> conversations = conversationService.getByUserId(id);
        List<Message> messages = new ArrayList<>();
        conversations.forEach(conversation -> {
            messages.add(messageService.getLastMessageByConversation(conversation.getId()));
        });
        List<MessageDTO> messageDTOS = modelMapper.map(messages, new TypeToken<List<MessageDTO>>() {
        }.getType());
        return messageDTOS;
    }

    @GetMapping(value = "/user/{userId}/convers/{conversationId}")
    public int getNumberOfNotReadYetByUserAndConversation(@PathVariable int userId, @PathVariable int conversationId) {
        return messageService.getNumberOfNotReadYetByUserAndConversation(userId, conversationId);
    }

    @PutMapping(value = "/user/{userId}/message/{messId}")
    public void updateMessageToDel(@PathVariable int userId, @PathVariable int messId) {
        messageService.updateToDeleteByUser(userId, messId);
    }

    @GetMapping(value = "/notRead/user/{userId}")
    public int getNumberOfNotReadYetByUser(@PathVariable int userId) {
        return messageService.getNumberOfNotReadYetByUser(userId);
    }
}
