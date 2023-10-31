package group1.testing.service.report;

import group1.testing.entity.Report;
import group1.testing.entity.User;
import group1.testing.form.report.AddReportForm;
import group1.testing.form.user.CreateUserForm;
import group1.testing.repository.ICommentRepository;
import group1.testing.repository.IPostRepository;
import group1.testing.repository.IReportRepository;
import group1.testing.repository.IUserRepository;
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

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ICommentRepository commentRepository;

    @Autowired
    IPostRepository postRepository;

    @Override
    public void addReport(AddReportForm form) {
        Report report = new Report();
        report.setContent(form.getContent());
        report.setReporter(userRepository.findById(form.getReporterId()));
        if (form.getReportToId() != null) {
            int id = form.getReportToId();
            report.setReportTo(userRepository.findById(id));
        } else if (form.getCommentId() != null) {
            int id = form.getCommentId();
            report.setComment(commentRepository.findById(id));
        } else if (form.getPostId() != null) {
            int id = form.getPostId();
            report.setPost(postRepository.findById(id));
        }
        reportRepository.save(report);
    }

    @Override
    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }
}
