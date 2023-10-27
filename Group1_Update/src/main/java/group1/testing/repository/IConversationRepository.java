package group1.testing.repository;

import group1.testing.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IConversationRepository extends JpaRepository<Conversation, Integer> {
    List<Conversation> findAllByUser1Id(int id);

    List<Conversation> findAllByUser2Id(int id);

    Conversation findByUser1IdAndUser2Id(int id1, int id2); //Lấy ra đoạn hội thoại chung giữa 2 người

    Conversation findById(int id);
}
