package group1.testing.form.user;

import group1.testing.entity.Gender;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class UpdateUserForm {

    private int id;

    private String username;

    private String fullName;

    private String password;

    private String avatar;
}
