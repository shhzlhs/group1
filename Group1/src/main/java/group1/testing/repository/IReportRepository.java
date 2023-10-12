package group1.testing.repository;

import group1.testing.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReportRepository extends JpaRepository<Report, Integer> {
}
