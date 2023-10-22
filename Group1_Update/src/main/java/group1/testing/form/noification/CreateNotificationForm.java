package group1.testing.form.noification;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateNotificationForm {

    private int id;

    private int userId;

    private int creatorId;

    private String content;

    private boolean isRead;
}
