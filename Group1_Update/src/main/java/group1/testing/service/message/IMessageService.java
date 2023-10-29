package group1.testing.service.message;

import group1.testing.entity.Message;
import group1.testing.form.message.CreateMessageForm;

import java.util.List;

public interface IMessageService {

    void createMessage(CreateMessageForm form);

    List<Message> getByConversation(int id);//Hiển thị các tin nhắn theo cuộc trò chuyện;

    void deleteById(int id);

    void updateToReadCompleted(List<Integer> ids);//Sửa tình trạng thành đã xem;

    Message getLastMessageByConversation(int id);//Lấy ra tin nhắn mới nhất theo cuộc trò chuyện;

    int getNumberOfNotReadYetByUser(int userId);//Lấy ra tổng số lượng tin nhắn chưa đọc theo User

    int getNumberOfNotReadYetByUserAndConversation(int userId, int conversationId); //Lấy ra số lượng tin nhắn chưa đọc theo cuộc trò chuyện

    void updateToDeleteByUser(int UserId,int messId); //Xoá tin nhắn từ 1 phía.

}
