package com.kani.service;

import com.kani.response.CreateUserResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kani.controller.LoginController;
import com.kani.dao.LoginDao;
import com.kani.request.CreateUserRequest;

@Service
public class LoginServiceImpl {
	 private static final Logger LOG=Logger.getLogger(LoginServiceImpl.class.getName());	 

	
	@Autowired
	private LoginDao loginDao;
	

	public CreateUserResponse createUserDtls(CreateUserRequest request) throws Exception {
		LOG.info("Entered createUserDtls loginService::::");
		return loginDao.createUserDtls(request);
	}


	public CreateUserResponse userLogin(CreateUserRequest request) {
		
		return loginDao.userLogin(request);
	}

}
