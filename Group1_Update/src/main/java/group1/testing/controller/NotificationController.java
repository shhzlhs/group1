package group1.testing.controller;

import group1.testing.dto.NotificationDTO;
import group1.testing.entity.Notification;
import group1.testing.form.noification.CreateNotificationForm;
import group1.testing.service.notification.INotificationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/notifications")
public class NotificationController {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    INotificationService notificationService;

    @GetMapping(value = "/{userId}")
    public List<NotificationDTO> getByUser(@PathVariable int userId) {
        List<Notification> notifications = notificationService.getByUserId(userId);
        List<NotificationDTO> notificationDTOS = modelMapper.map(notifications, new TypeToken<List<NotificationDTO>>() {
        }.getType());
        return notificationDTOS;
    }

    @PostMapping
    public void createNotification(@RequestBody CreateNotificationForm form) {
        notificationService.createNotification(form);
    }

    @PutMapping(value = "/{id}") //Sửa tình trạng thông báo thành đã đọc
    public void updateNotificationToReadCompleted(@PathVariable int id) {
        notificationService.setNotificationToReadCompleted(id);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable int id) {
        notificationService.deleteById(id);
    }
}
