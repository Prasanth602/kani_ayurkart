package com.kani.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kani.dto.UserActivityInfo;

@Repository
public interface ActivityInfoRepository extends JpaRepository<UserActivityInfo,Integer>{

}
