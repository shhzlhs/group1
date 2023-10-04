package group1.testing.service.like;

import group1.testing.entity.Item;
import group1.testing.entity.Like;
import group1.testing.form.item.CreatingItemForm;
import group1.testing.form.like.CreateLikeForm;
import group1.testing.repository.ILikeRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService implements ILikeService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ILikeRepository likeRepository;

    @Override
    public List<Like> getAllLikes() {
        return likeRepository.findAll();
    }

    @Override
    public void addLike(CreateLikeForm form) {
        TypeMap<CreateLikeForm, Like> typeMap = modelMapper.getTypeMap(CreateLikeForm.class, Like.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingItemForm, Item>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Like like = modelMapper.map(form, Like.class);
        likeRepository.save(like);
    }

    @Override
    public void disLike(int id) {
        likeRepository.deleteById(id);
    }
}
