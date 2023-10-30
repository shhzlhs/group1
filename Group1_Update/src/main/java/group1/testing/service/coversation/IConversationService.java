package group1.testing.service.coversation;

import group1.testing.entity.Conversation;
import group1.testing.form.conversation.CreateConversationForm;

import java.util.List;

public interface IConversationService {

    List<Conversation> getByUserId(int id);//Lấy ra danh sách cuộc trò chuyện theo user;

    Conversation getByUser1AndUser2(int id1, int id2); //Kiểm ta xem tồn tại cuộc trò chuyện hay chưa;

    void deleteConversation(int id);

    void createConversation(CreateConversationForm form);

    void updateToDelByUser(int userId, int conversationId);//Xoá hội thoại từ 1 phía

    void recoverByUserAndConversationId(int userId,int conversationId); //Tạo mới cuộc hội thoại mà trước đấy đã xoá;
}
