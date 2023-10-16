package group1.testing.service.message;

import group1.testing.entity.Message;
import group1.testing.form.message.CreateMessageForm;

import java.util.List;

public interface IMessageService {

void createMessage (CreateMessageForm form);

List<Message> getMessagesBySenderAndReceiver (int senderId, int receiverId);

void deleteBySenderAndReceiver(int senderId, int receiverId);

void deleteById (int id);
}
