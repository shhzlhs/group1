package group1.testing.form.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class UpdateUserForm {

    private int id;

    private String username;

    private String fullName;

    private String email;

    private String password;

    private String role;

    private String status;

    private int coin;

    private int gold;

    private String avatar;

    private Date createdAt;
}
