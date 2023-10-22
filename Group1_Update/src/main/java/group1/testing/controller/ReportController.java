package group1.testing.controller;

import group1.testing.dto.ReportDTO;
import group1.testing.entity.Report;
import group1.testing.form.report.AddReportForm;
import group1.testing.service.report.IReportService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/reports")
public class ReportController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IReportService reportService;

    @GetMapping
    public List<ReportDTO> getAllReports() {
        List<Report> reports = reportService.getAllReports();

        List<ReportDTO> reportDTOS = modelMapper.map(reports, new TypeToken<List<ReportDTO>>() {
        }.getType());
        return reportDTOS;
    }

    @PostMapping
    public void addReport(@RequestBody AddReportForm form) {
        reportService.addReport(form);
    }
}
