package group1.testing.form.noification;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateNotificationForm {

    private int id;

    private int UserId;

    private int creatorId;

    private Integer postId;

    private Integer commentId;

    private String content;

    private boolean isRead;
}
