package group1.testing.form.post;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreatePostForm {

    private int id;

    private int userId;

    private String image;

    private String content;
}
