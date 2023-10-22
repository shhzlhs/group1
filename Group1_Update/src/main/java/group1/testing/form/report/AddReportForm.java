package group1.testing.form.report;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AddReportForm {
    private int id;

    private String content;

    private int reporterId;

    private Integer reportToId;

    private Integer postId;

    private Integer commentId;
}
