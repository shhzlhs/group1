package group1.testing.service.post;

import group1.testing.entity.Post;
import group1.testing.entity.User;
import group1.testing.form.post.CreatePostForm;
import group1.testing.form.post.EditPostForm;
import group1.testing.form.user.CreateUserForm;
import group1.testing.repository.IPostRepository;
import group1.testing.repository.IUserRepository;
import group1.testing.service.user.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service

public class PostService implements IPostService {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IPostRepository postRepository;
    @Autowired
    IUserRepository userRepository;

    @Override
    public List<Post> getAllPost() {
        return postRepository.findAll();
    }

    @Override
    public Post viewPostById(int id) {
        return postRepository.findById(id);
    }

    @Override
    public void createPost(CreatePostForm form) {
        Post post = new Post();
        post.setContent(form.getContent());
        post.setImage(form.getImage());
        post.setUser(userRepository.findById(form.getUserId()));
        postRepository.save(post);
    }

    @Override
    public void editPost(EditPostForm form) {
        Post post = modelMapper.map(form, Post.class);
        Instant now = Instant.now();
        post.setCreatedAt(Date.from(now));
        postRepository.save(post);
    }

    @Override
    public void deletePosts(List<Integer> ids) {
        postRepository.deleteAllById(ids);
    }

    @Override
    public List<Post> getByUser(String username) {
        return postRepository.findAllByUserUsername(username);
    }

    @Override
    public List<Post> getByFollowings(List<String> usernames) {
        List<Post> posts = new ArrayList<>();
        usernames.forEach(username -> {
            List<Post> posts1 = postRepository.findAllByUserUsername(username);
            posts.addAll(posts1);
        });
        return posts;
    }
}
