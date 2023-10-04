package group1.testing.form.comment;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class AddCommentForm {

    private int id;

    private int postId;

    private int userId;

    private String content;

    private Date createdAt;
}
