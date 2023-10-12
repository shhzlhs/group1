package group1.testing.form.follow;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AddFollowForm {

    private int id;

    private int followerId;

    private int followingId;
}
