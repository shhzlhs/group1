package group1.testing.controller;

import group1.testing.dto.CommentDTO;
import group1.testing.entity.Comment;
import group1.testing.form.comment.AddCommentForm;
import group1.testing.service.comment.ICommentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/comments")
public class CommentController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ICommentService commentService;

    @GetMapping
    public List<CommentDTO> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        List<CommentDTO> commentDTOS = modelMapper.map(comments, new TypeToken<List<CommentDTO>>() {
        }
                .getType());
        return commentDTOS;
    }

    @PostMapping
    public void addComment(@RequestBody AddCommentForm form) {
        commentService.addComment(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteComments(@PathVariable List<Integer> ids) {
        commentService.deleteComments(ids);
    }

    @GetMapping(value = "/{id}")
    public CommentDTO findById(@PathVariable int id) {
        Comment comment = commentService.findById(id);
        CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);

        return commentDTO;
    }
}
