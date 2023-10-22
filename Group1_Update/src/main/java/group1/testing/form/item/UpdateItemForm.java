package group1.testing.form.item;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class UpdateItemForm {

    private int id;

    private String name;

    private String image;

    private int coinCost;

    private int goldCost;

    private String type;
}
