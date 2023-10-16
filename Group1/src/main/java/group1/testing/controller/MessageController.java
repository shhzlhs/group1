package group1.testing.controller;

import group1.testing.dto.MessageDTO;
import group1.testing.dto.PostDTO;
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

    @GetMapping(value = "/{senderId},{receiverId}")
    public List<MessageDTO> getMessagesBySenderAndReceiver(@PathVariable int senderId, @PathVariable int receiverId) {
        List<Message> messages = messageService.getMessagesBySenderAndReceiver(senderId, receiverId);
        List<MessageDTO> messageDTOS = modelMapper.map(messages, new TypeToken<List<MessageDTO>>() {
        }.getType());
        return messageDTOS;
    }

    @DeleteMapping(value = "/{senderId}/{receiverId}")
    public void deleteBySenderAndReceiver(@PathVariable int senderId, @PathVariable int receiverId) {
        messageService.deleteBySenderAndReceiver(senderId, receiverId);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable int id) {
        messageService.deleteById(id);
    }
}
