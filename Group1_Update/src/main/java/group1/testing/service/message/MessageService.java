package group1.testing.service.message;

import group1.testing.dto.NotReadDTO;
import group1.testing.entity.Conversation;
import group1.testing.entity.Message;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.repository.IConversationRepository;
import group1.testing.repository.IMessageRepository;
import group1.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
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
    public void updateToReadCompletedByConversationAndUserId(int conId, int userId) {
        List<Message> messages = messageRepository.findAllByConversationId(conId);
        messages.forEach(message -> {
            if (message.getSender().getId() != userId) {
                message.setIsRead("Y");
            }
        });
        messageRepository.saveAll(messages);
    }

    @Override
    public Message getLastMessagesByUserAndConversation(int userId, int conId) {
        List<Message> messages = messageRepository.findAllByConversationId(conId);
        messages.sort((m1, m2) -> m2.getCreatedAt().compareTo(m1.getCreatedAt()));
        if (messages.size() > 0) {
            if ((messages.get(0).getConversation().getUser1().getId() == userId && messages.get(0).getDel1().equals("N")) ||
                    (messages.get(0).getConversation().getUser2().getId() == userId && messages.get(0).getDel2().equals("N"))) {
                return messages.get(0);
            } else {
                Message message1 = new Message();
                message1.setConversation(conversationRepository.findById(conId));
                message1.setContent("Chưa có tin nhắn nào");
                message1.setCreatedAt(conversationRepository.findById(conId).getCreatedAt());
                message1.setIsRead("Y");
                message1.setSender(conversationRepository.findById(conId).getUser1());
                return message1;
            }
        } else {
            Message message1 = new Message();
            message1.setConversation(conversationRepository.findById(conId));
            message1.setContent("Chưa có tin nhắn nào");
            message1.setCreatedAt(conversationRepository.findById(conId).getCreatedAt());
            message1.setIsRead("Y");
            message1.setSender(conversationRepository.findById(conId).getUser1());
            return message1;
        }
    }

    @Override
    public int getNumberOfNotReadYetByUser(int userId) {
        List<Conversation> conversations = new ArrayList<>();
        List<Conversation> conversation1s = conversationRepository.findAllByUser1Id(userId);
        List<Conversation> conversation2s = conversationRepository.findAllByUser2Id(userId);
        conversations.addAll(conversation1s);
        conversations.addAll(conversation2s);
        List<Message> messages = new ArrayList<>();
        conversations.forEach(conversation -> {
            List<Message> messes = messageRepository.findAllByConversationId(conversation.getId());
            messages.addAll(messes);
        });
        int count = 0;
        for (Message message : messages) {
            if (message.getConversation().getUser1().getId() == userId) {
                if (message.getIsRead().equals("N") && message.getDel1().equals("N") && message.getConversation().getDel1().equals("N") && message.getSender().getId() != userId) {
                    count++;
                }
            } else {
                if (message.getIsRead().equals("N") && message.getDel2().equals("N") && message.getConversation().getDel2().equals("N") && message.getSender().getId() != userId) {
                    count++;
                }
            }


        }
        return count;
    }

    @Override
    public List<NotReadDTO> getListNumberOfNotReadYetByUser(int userId) {
        List<Conversation> conversations = new ArrayList<>();
        List<Conversation> conversation1s = conversationRepository.findAllByUser1Id(userId);
        List<Conversation> conversation2s = conversationRepository.findAllByUser2Id(userId);
        conversations.addAll(conversation1s);
        conversations.addAll(conversation2s);
        List<NotReadDTO> notReadDTOS = new ArrayList<>();
        conversations.forEach(conversation -> {
            List<Message> messages = messageRepository.findAllByConversationId(conversation.getId());
            int count = 0;
            for (Message message : messages) {
                if (message.getConversation().getUser1().getId() == userId) {
                    if (message.getIsRead().equals("N") && message.getSender().getId() != userId && message.getDel1().equals("N") && message.getConversation().getDel1().equals("N")) {
                        count++;
                    }
                } else {
                    if (message.getIsRead().equals("N") && message.getSender().getId() != userId && message.getDel2().equals("N") && message.getConversation().getDel2().equals("N")) {
                        count++;
                    }
                }
            }
            NotReadDTO notReadDTO = new NotReadDTO();
            notReadDTO.setConversationId(conversation.getId());
            notReadDTO.setNumberOfNotRead(count);
            notReadDTOS.add(notReadDTO);
        });


        return notReadDTOS;

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

    @Override
    public void updateAllToDellByUserAndConversation(int userId, int conversationId) {
        List<Message> messages = messageRepository.findAllByConversationId(conversationId);
        messages.forEach(message -> {
            if (message.getConversation().getUser1().getId() == userId) {
                message.setDel1("Y");
            } else {
                message.setDel2("Y");
            }
        });
        messageRepository.saveAll(messages);
    }
}
