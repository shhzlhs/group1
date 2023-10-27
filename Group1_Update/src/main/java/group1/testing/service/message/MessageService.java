package group1.testing.service.message;

import group1.testing.entity.Message;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.repository.IConversationRepository;
import group1.testing.repository.IMessageRepository;
import group1.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class MessageService implements IMessageService {
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IMessageRepository messageRepository;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IConversationRepository conversationRepository;

    @Override
    public void createMessage(CreateMessageForm form) {
        Message message = new Message();
        message.setContent(form.getContent());
        message.setSender(userRepository.findById(form.getSenderId()));
        message.setConversation(conversationRepository.findById(form.getConversationId()));
        messageRepository.save(message);
    }

    @Override
    public List<Message> getByConversation(int id) {
        return messageRepository.findAllByConversationId(id);
    }


    @Override
    public void deleteById(int id) {
        messageRepository.deleteById(id);
    }

    @Override
    public void updateToReadCompleted(List<Integer> ids) {
        List<Message> messages = messageRepository.findAllById(ids);
        messages.forEach(message -> {
            message.setIsRead("Y");
        });
        messageRepository.saveAll(messages);
    }

    @Override
    public Message getLastMessageByConversation(int id) {
        List<Message> messages = messageRepository.findAllByConversationId(id);
        messages.sort((m1, m2) -> m2.getCreatedAt().compareTo(m1.getCreatedAt()));
        return messages.get(0);
    }

    @Override
    public int getNumberOfNotReadYetByUserAndConversation(int userId, int conversationId) {
        List<Message> messages = messageRepository.findAllByConversationId(conversationId);

        int count = 0;

        for (Message message : messages) {
            if (message.getIsRead().equals("N") && message.getSender().getId() != userId) {
                count++;
            }
        }

        return count;

    }

    @Override
    public void updateToDeleteByUser(int userId, int messId) {
        Message message = messageRepository.findById(messId);
        if (message.getConversation().getUser1().getId() == userId) {
            message.setDel1("Y");
        } else {
            message.setDel2("Y");
        }
        messageRepository.save(message);
    }
}
