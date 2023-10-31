package group1.testing.service.coversation;

import group1.testing.entity.Conversation;
import group1.testing.form.conversation.CreateConversationForm;
import group1.testing.repository.IConversationRepository;
import group1.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConversationService implements IConversationService {

    @Autowired
    IConversationRepository conversationRepository;
    @Autowired
    IUserRepository userRepository;

    @Override
    public List<Conversation> getByUserId(int id) {
        List<Conversation> conversations = new ArrayList<>();
        conversations.addAll(conversationRepository.findAllByUser1Id(id));
        conversations.addAll(conversationRepository.findAllByUser2Id(id));

        return conversations;
    }

    @Override
    public Conversation getByUser1AndUser2(int id1, int id2) {
        Conversation conversation1 = conversationRepository.findByUser1IdAndUser2Id(id1, id2);
        if (conversation1 != null) {
            return conversation1;
        } else {
            Conversation conversation2 = conversationRepository.findByUser1IdAndUser2Id(id2, id1);
            if (conversation2 != null) {
                return conversation2;
            } else return new Conversation();
        }

    }

    @Override
    public void deleteConversation(int id) {
        conversationRepository.deleteById(id);
    }

    @Override
    public void createConversation(CreateConversationForm form) {

        Conversation conversation = new Conversation();
        conversation.setUser1(userRepository.findById(form.getUser1Id()));
        conversation.setUser2(userRepository.findById(form.getUser2Id()));
        conversationRepository.save(conversation);
    }

    @Override
    public void updateToDelByUser(int userId, int conversationId) {
        Conversation conversation = conversationRepository.findById(conversationId);
        if (conversation.getUser1().getId() == userId) {
            conversation.setDel1("Y");
        } else conversation.setDel2("Y");

        conversationRepository.save(conversation);
    }

    @Override
    public void recoverByUserAndConversationId(int userId, int conversationId) {
        Conversation conversation = conversationRepository.findById(conversationId);
        if (conversation.getUser1().getId() == userId) {
            conversation.setDel1("N");
        } else {
            conversation.setDel2("N");
        }
        conversationRepository.save(conversation);
    }

}
