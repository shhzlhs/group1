package group1.testing.repository;

import group1.testing.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IMessageRepository extends JpaRepository<Message,Integer> {

    List<Message> findBySenderIdAndReceiverId (int senderId, int receiverId);


}
