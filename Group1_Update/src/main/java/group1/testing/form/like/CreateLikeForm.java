package group1.testing.form.like;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateLikeForm {

    private int id;

    private Integer postId;

    private int userId;

    private Integer commentId;

}
