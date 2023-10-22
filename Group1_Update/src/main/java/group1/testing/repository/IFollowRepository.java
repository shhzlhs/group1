package group1.testing.repository;

import group1.testing.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

public interface IFollowRepository extends JpaRepository<Follow, Integer> {

    Follow findByFollowerIdAndFollowingId(int followerId, int followingId);

    @Transactional
    @Modifying
    void deleteByFollowerIdAndFollowingId(int followerId, int followingId);
}
