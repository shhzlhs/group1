package group1.testing.service.notification;

import group1.testing.entity.Notification;
import group1.testing.form.noification.CreateNotificationForm;

import java.util.List;

public interface INotificationService {

    List<Notification> getByUserId (int userId);

    void createNotification (CreateNotificationForm form);

    void deleteById (int id);

    void setNotificationToReadCompleted(int id);
}
