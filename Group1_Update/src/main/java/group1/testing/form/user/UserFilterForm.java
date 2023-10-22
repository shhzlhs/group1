package group1.testing.form.user;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserFilterForm {
    //search theo username và fullName
    private String search;
}
