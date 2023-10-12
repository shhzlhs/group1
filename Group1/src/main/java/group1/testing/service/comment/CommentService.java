package group1.testing.service.comment;

import group1.testing.entity.Comment;
import group1.testing.entity.Item;
import group1.testing.form.comment.AddCommentForm;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.repository.ICommentRepository;
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
    ModelMapper modelMapper;

    @Override
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public void addComment(AddCommentForm form) {
        TypeMap<AddCommentForm, Comment> typeMap = modelMapper.getTypeMap(AddCommentForm.class, Comment.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Comment comment = modelMapper.map(form, Comment.class);
        commentRepository.save(comment);
    }

    @Override
    public void deleteComments(List<Integer> ids) {
        commentRepository.deleteAllById(ids);
    }



}
