package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GameSlotDTO {

    private int id;

    private int userId;

    private String userUsername;

    private int gameId;

    private int slot;
}
