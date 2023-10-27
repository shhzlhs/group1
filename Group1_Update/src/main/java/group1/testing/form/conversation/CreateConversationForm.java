package group1.testing.form.conversation;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateConversationForm {

    private int id;

    private int user1Id;

    private int user2Id;

}
