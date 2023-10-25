package group1.testing.service.comment;

import group1.testing.entity.Comment;
import group1.testing.form.comment.AddCommentForm;

import java.util.List;

public interface ICommentService {
    List<Comment> getAllComments();

    void addComment(AddCommentForm form);

    void deleteComments (List<Integer> ids);

    Comment findById(int id);
}

