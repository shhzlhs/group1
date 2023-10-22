package group1.testing.service.like;

import group1.testing.entity.Like;
import group1.testing.form.like.CreateLikeForm;

import java.util.List;

public interface ILikeService {

    List<Like> getAllLikes();
    void addLike(CreateLikeForm form);
    void disLike(int id);
}
