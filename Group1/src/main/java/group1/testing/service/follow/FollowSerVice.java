package group1.testing.service.follow;

import group1.testing.entity.Comment;
import group1.testing.entity.Follow;
import group1.testing.entity.Item;
import group1.testing.form.comment.AddCommentForm;
import group1.testing.form.follow.AddFollowForm;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.repository.IFollowRepository;
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
    ModelMapper modelMapper;

    @Override
    public Follow getFollowByFollowerIdAndFollowingId(int followerId, int followingId) {
        return followRepository.findByFollowerIdAndFollowingId(followerId, followingId);
    }

    @Override
    public void addFollow(AddFollowForm form) {
        TypeMap<AddFollowForm, Follow> typeMap = modelMapper.getTypeMap(AddFollowForm.class, Follow.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Follow follow = modelMapper.map(form, Follow.class);
        followRepository.save(follow);

    }

    @Override
    public void deleteFollowByFollowerIdAndFollowingId(int followerId, int followingId) {
        followRepository.deleteByFollowerIdAndFollowingId(followerId, followingId);

    }
}
