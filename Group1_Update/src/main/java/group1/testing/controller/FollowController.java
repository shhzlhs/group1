package group1.testing.controller;

import group1.testing.dto.FollowDTO;
import group1.testing.entity.Follow;
import group1.testing.form.follow.AddFollowForm;
import group1.testing.service.follow.IFollowService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/follows")
public class FollowController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IFollowService followService;

    @GetMapping(value = "/{followerId},{followingId}")
    public FollowDTO getFollowByFollowerIdAndFollowingId(@PathVariable int followerId, @PathVariable int followingId) {
        Follow follow = followService.getFollowByFollowerIdAndFollowingId(followerId, followingId);
        return modelMapper.map(follow, FollowDTO.class);
    }

    @DeleteMapping(value = "/{followerId},{followingId}")
    public void deleteFollow(@PathVariable int followerId, @PathVariable int followingId) {
        followService.deleteFollowByFollowerIdAndFollowingId(followerId, followingId);
    }

    @PostMapping
    public void addFollow(@RequestBody AddFollowForm form) {
        followService.addFollow(form);
    }

}
