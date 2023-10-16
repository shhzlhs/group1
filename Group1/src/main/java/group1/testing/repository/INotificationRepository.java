package group1.testing.repository;

import group1.testing.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INotificationRepository extends JpaRepository<Notification,Integer> {
    List<Notification> findAllByUserId (int userId);
    Notification findById(int id);
}
