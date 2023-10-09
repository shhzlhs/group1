package group1.testing.form.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import group1.testing.entity.Gender;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
public class CreateUserForm {

    private int id;

    private String username;

    private String fullName;

    private String email;

    private String password;

    private String role;

    private String status;

    private Gender gender;

    private int coin;

    private int gold;

    private String avatar;

    @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")

    private Date createdAt;
}
