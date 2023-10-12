package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ReportDTO {

    private int id;

    private String content;

    private String reporterUsername;

    private String reportToUsername;

    private String postContent;

    private String commentContent;
}
