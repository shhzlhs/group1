package group1.testing.service.report;

import group1.testing.entity.Report;
import group1.testing.form.report.AddReportForm;

import java.util.List;

public interface IReportService {

    void addReport(AddReportForm form);

    List<Report> getAllReports();
}
