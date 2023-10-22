package group1.testing.service.post;

import group1.testing.entity.Post;
import group1.testing.form.post.CreatePostForm;
import group1.testing.form.post.EditPostForm;

import java.util.List;

public interface IPostService {
    List<Post> getAllPost();

    Post viewPostById(int id);

    void createPost(CreatePostForm form);

    void editPost(EditPostForm form);

    void deletePosts(List<Integer> ids);

    List<Post> getByUser(String username);
    List<Post> getByFollowings(List<String> usernames);

}
