package group1.testing.controller;

import group1.testing.dto.PostDTO;
import group1.testing.dto.UserDTO;
import group1.testing.entity.Post;
import group1.testing.entity.User;
import group1.testing.form.post.CreatePostForm;
import group1.testing.form.post.EditPostForm;
import group1.testing.service.post.IPostService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/posts")
@CrossOrigin("*")
public class PostController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IPostService postService;

    @GetMapping
    public List<PostDTO> getAllPost() {
        List<Post> posts = postService.getAllPost();
        List<PostDTO> postDTOS = modelMapper.map(posts, new TypeToken<List<PostDTO>>() {
        }.getType());
        return postDTOS;
    }

    @GetMapping(value = "/{id}")
    public PostDTO viewPostById(@PathVariable int id) {
        Post post = postService.viewPostById(id);
        return modelMapper.map(post, PostDTO.class);
    }

    @PostMapping
    void createPost(@RequestBody CreatePostForm form) {
        postService.createPost(form);
    }

    @PutMapping(value = "/{id}")
    void editPost(@RequestBody EditPostForm form, @PathVariable int id) {
        form.setId(id);
        postService.editPost(form);
    }

    @DeleteMapping(value = "/{ids}")
    void deletePosts(@PathVariable List<Integer> ids) {
        postService.deletePosts(ids);
    }
}
