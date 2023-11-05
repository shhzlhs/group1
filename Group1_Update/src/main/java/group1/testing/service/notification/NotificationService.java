package group1.testing.service.notification;

import group1.testing.entity.*;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.noification.CreateNotificationForm;
import group1.testing.repository.ICommentRepository;
import group1.testing.repository.INotificationRepository;
import group1.testing.repository.IPostRepository;
import group1.testing.repository.IUserRepository;
import group1.testing.service.comment.ICommentService;
import group1.testing.service.user.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class NotificationService implements INotificationService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    INotificationRepository notificationRepository;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IPostRepository postRepository;

    @Autowired
    ICommentRepository commentRepository;

    @Override
    public List<Notification> getByUserId(int userId) {
        return notificationRepository.findAllByUserId(userId);
    }

    @Override
    public void createNotification(CreateNotificationForm form) {
        Notification notification = new Notification();
        notification.setCreator(userRepository.findById(form.getCreatorId()));
        notification.setContent(form.getContent());
        if (form.getUserId() != 0) {
            notification.setUser(userRepository.findById(form.getUserId()));
            if (form.getPostId() != null) {
                int potsId = form.getPostId();
                notification.setPost(postRepository.findById(potsId));
            }
        } else {
            if (form.getPostId() != null) {

                int postId = form.getPostId();
                Post post = postRepository.findById(postId);
                notification.setPost(post);
                if (form.getCommentId() == null) {
                    notification.setUser(post.getUser());
                } else {
                    int commentId = form.getCommentId();
                    Comment comment = commentRepository.findById(commentId);
                    notification.setComment(comment);
                    notification.setUser(comment.getUser());
                }
            } else {
                if (form.getCommentId()!=null){
                    int commentId = form.getCommentId();
                    Comment comment = commentRepository.findById(commentId);
                    if(comment.getComment()==null){
                        notification.setPost(comment.getPost());
                        notification.setUser(comment.getUser());
                    }else {
                        notification.setPost(comment.getComment().getPost());
                        notification.setUser(comment.getUser());
                    }
                }

            }
        }
        notificationRepository.save(notification);
    }

    @Override
    public void deleteById(int id) {
        notificationRepository.deleteById(id);
    }

    @Override
    public void setNotificationToReadCompleted(int id) {
        Notification notification = notificationRepository.findById(id);
        notification.setIsRead("Y");
        notificationRepository.save(notification);
    }

}
