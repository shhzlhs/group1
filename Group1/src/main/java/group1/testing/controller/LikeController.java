package group1.testing.controller;

import group1.testing.dto.ItemDTO;
import group1.testing.dto.LikeDTO;
import group1.testing.entity.Item;
import group1.testing.entity.Like;
import group1.testing.form.like.CreateLikeForm;
import group1.testing.service.like.ILikeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/likes")
@CrossOrigin("*")
public class LikeController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ILikeService likeService;

    @GetMapping
    public List<LikeDTO> getAllLikes() {
        List<Like> likes = likeService.getAllLikes();
        List<LikeDTO> likeDTOS = modelMapper.map(likes, new TypeToken<List<LikeDTO>>() {
        }
                .getType());
        return likeDTOS;
    }

    @PostMapping
    void addLike(@RequestBody CreateLikeForm form) {
        likeService.addLike(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void disLike(@PathVariable int id) {
        likeService.disLike(id);
    }
}
