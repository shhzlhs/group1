package group1.testing.service.follow;

import group1.testing.entity.Follow;
import group1.testing.entity.Item;
import group1.testing.entity.User;
import group1.testing.form.follow.AddFollowForm;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.repository.IFollowRepository;
import group1.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowSerVice implements IFollowService {
    @Autowired
    IFollowRepository followRepository;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public Follow getFollowByFollowerIdAndFollowingId(int followerId, int followingId) {
        return followRepository.findByFollowerIdAndFollowingId(followerId, followingId);
    }

    @Override
    public void addFollow(AddFollowForm form) {

        User follower = userRepository.findById(form.getFollowerId());
        User following = userRepository.findById(form.getFollowingId());
        Follow follow = new Follow();
        follow.setFollower(follower);
        follow.setFollowing(following);
        followRepository.save(follow);

    }

    @Override
    public void deleteFollowByFollowerIdAndFollowingId(int followerId, int followingId) {
        followRepository.deleteByFollowerIdAndFollowingId(followerId, followingId);

    }
}
