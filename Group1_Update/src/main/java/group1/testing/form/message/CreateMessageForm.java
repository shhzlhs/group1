package group1.testing.form.message;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CreateMessageForm {

    private int id;

    private int senderId;

    private int conversationId;

    private String content;
}
