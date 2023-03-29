package com.kani.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kani.dto.UserDetailsDTO;

@Repository
public interface LoginRepository extends JpaRepository<UserDetailsDTO,String>{

	//@Query("select p from UserDetailsDTO p where p.emailId=?")
	//public UserDetailsDTO findByEmaliid(String emailId);

}
