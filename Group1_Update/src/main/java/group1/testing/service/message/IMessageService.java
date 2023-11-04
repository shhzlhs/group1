package group1.testing.service.message;

import group1.testing.dto.NotReadDTO;
import group1.testing.entity.Message;
import group1.testing.form.message.CreateMessageForm;

import java.util.List;

public interface IMessageService {

    void createMessage(CreateMessageForm form);

    List<Message> getByConversation(int id);//Hiển thị các tin nhắn theo cuộc trò chuyện;

    void deleteById(int id);

    void updateToReadCompletedByConversationAndUserId(int conId, int userId);//Sửa tình trạng thành đã xem theo cuộc trò chuyện;

    Message getLastMessagesByUserAndConversation(int userId,int conId);//Lấy ra tin nhắn mới nhất theo cuộc trò chuyện;

    int getNumberOfNotReadYetByUser(int userId);//Lấy ra tổng số lượng tin nhắn chưa đọc theo User

    List<NotReadDTO> getListNumberOfNotReadYetByUser(int userId); //Lấy ra danh sách số lượng tin nhắn chưa đọc theo User

    void updateToDeleteByUser(int UserId, int messId); //Xoá 1 tin nhắn từ 1 phía.

    void updateAllToDellByUserAndConversation(int UserId, int conversationId);//Xoá toàn bộ tin nhắn theo cuộc trò chuyện từ 1 phía


}
