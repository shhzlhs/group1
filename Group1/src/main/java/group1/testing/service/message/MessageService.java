package group1.testing.service.message;

import group1.testing.entity.Item;
import group1.testing.entity.Like;
import group1.testing.entity.Message;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.like.CreateLikeForm;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.repository.IMessageRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
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

    @Override
    public void createMessage(CreateMessageForm form) {
        TypeMap<CreateMessageForm, Message> typeMap = modelMapper.getTypeMap(CreateMessageForm.class, Message.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Message message = modelMapper.map(form, Message.class);
        messageRepository.save(message);
    }

    @Override
    public List<Message> getMessagesBySenderAndReceiver(int senderId, int receiverId) {
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }

    @Override
    public void deleteBySenderAndReceiver(int senderId, int receiverId) {
        List<Message> messages = messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
        List<Integer> ids = new ArrayList<>();
        messages.forEach(message -> {
            ids.add(message.getId());
        });
        messageRepository.deleteAllById(ids);
    }

    @Override
    public void deleteById(int id) {
        messageRepository.deleteById(id);
    }
}
