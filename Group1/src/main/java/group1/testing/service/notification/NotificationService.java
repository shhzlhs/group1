package group1.testing.service.notification;

import group1.testing.entity.Item;
import group1.testing.entity.Message;
import group1.testing.entity.Notification;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.message.CreateMessageForm;
import group1.testing.form.noification.CreateNotificationForm;
import group1.testing.repository.INotificationRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService implements INotificationService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    INotificationRepository notificationRepository;

    @Override
    public List<Notification> getByUserId(int userId) {
        return notificationRepository.findAllByUserId(userId);
    }

    @Override
    public void createNotification(CreateNotificationForm form) {
        TypeMap<CreateNotificationForm, Notification> typeMap = modelMapper.getTypeMap(CreateNotificationForm.class, Notification.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Notification notification = modelMapper.map(form, Notification.class);
        notificationRepository.save(notification);
    }

    @Override
    public void deleteById(int id) {
        notificationRepository.deleteById(id);
    }

    @Override
    public void setNotificationToReadCompleted(int id) {
        Notification notification = notificationRepository.findById(id);
        notification.setRead(true);
        notificationRepository.save(notification);
    }

}
