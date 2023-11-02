package group1.testing.form.game;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CreateGameForm {

    private String name;

    private int slotCoinPrice;

    private int slotGoldPrice;

    private String logo;
}
