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

    @GetMapping(value = "/user/{id}")
    public List<ConversationDTO> getAllByUser(@PathVariable int id) {
        List<Conversation> conversations = conversationService.getByUserId(id);
        List<ConversationDTO> conversationDTOS = modelMapper.map(conversations, new TypeToken<List<ConversationDTO>>() {
        }
                .getType());
        return conversationDTOS;
    }

    @GetMapping(value = "/users/{id1}/{id2}")
    public ConversationDTO getByUserId(@PathVariable int id1, @PathVariable int id2) {
        Conversation conversation = conversationService.getByUser1AndUser2(id1, id2);
        return modelMapper.map(conversation, ConversationDTO.class);
    }

    @PostMapping
    public void createConversation(@RequestBody CreateConversationForm form) {
        conversationService.createConversation(form);
    }

    @PutMapping(value = "/user/{userId}/convers/{conversationId}")
    public void updateToDel(@PathVariable int userId, @PathVariable int conversationId) {
        conversationService.updateToDelByUser(userId, conversationId);
    }
}
