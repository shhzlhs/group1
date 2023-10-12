package group1.testing.service.report;

import group1.testing.entity.Report;
import group1.testing.entity.User;
import group1.testing.entity.UserItem;
import group1.testing.form.report.AddReportForm;
import group1.testing.form.user.CreateUserForm;
import group1.testing.form.useritem.AddUserItemForm;
import group1.testing.repository.IReportRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService implements IReportService {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IReportRepository reportRepository;

    @Override
    public void addReport(AddReportForm form) {
        TypeMap<AddReportForm, Report> typeMap = modelMapper.getTypeMap(AddReportForm.class, Report.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreateUserForm, User>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        System.out.println("form: " + form);
        Report report = modelMapper.map(form, Report.class);

        reportRepository.save(report);
    }

    @Override
    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }
}
