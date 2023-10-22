package group1.testing.service.follow;

import group1.testing.entity.Follow;
import group1.testing.form.follow.AddFollowForm;

public interface IFollowService {

    Follow getFollowByFollowerIdAndFollowingId(int followerId, int followingId);

    void addFollow(AddFollowForm form);

    void deleteFollowByFollowerIdAndFollowingId(int followerId, int followingId);
}
