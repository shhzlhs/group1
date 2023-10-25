package group1.testing.service.comment;

import group1.testing.entity.Comment;
import group1.testing.entity.Item;
import group1.testing.entity.Post;
import group1.testing.form.comment.AddCommentForm;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.repository.ICommentRepository;
import group1.testing.repository.IPostRepository;
import group1.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService implements ICommentService {
    @Autowired
    ICommentRepository commentRepository;
    @Autowired
    IUserRepository userRepository;

    @Autowired
    IPostRepository postRepository;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public void addComment(AddCommentForm form) {
        Comment comment = new Comment();
        if (form.getCommentId() == null) {
            int postId = form.getPostId();
            comment.setPost(postRepository.findById(postId));
        } else if (form.getPostId() == null) {
            int commentId = form.getCommentId();
            comment.setComment(commentRepository.findById(commentId));
        }
        int userId = form.getUserId();
        comment.setUser(userRepository.findById(userId));
        comment.setContent(form.getContent());
        commentRepository.save(comment);
    }

    @Override
    public void deleteComments(List<Integer> ids) {
        commentRepository.deleteAllById(ids);
    }

    @Override
    public Comment findById(int id) {
        return commentRepository.findById(id);
    }


}
