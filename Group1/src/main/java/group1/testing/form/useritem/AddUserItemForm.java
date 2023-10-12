package group1.testing.form.useritem;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AddUserItemForm {

    private int id;

    private int userId;

    private int itemId;
}
