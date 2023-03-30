package com.kani.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.kani.request.CreateUserRequest;
import com.kani.response.CreateUserResponse;
import com.kani.service.LoginServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="CreateUser")
public class LoginController {
	
 private static final Logger LOG=Logger.getLogger(LoginController.class.getName());	 
	
 @Autowired
	private LoginServiceImpl loginService;
	
	@PostMapping(value="/createUserDtls", produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String  createUserDtls(@RequestBody CreateUserRequest request) throws Exception {
		
		String response=null;
		
		if(request.getFirstName()==null||request.getLastName()==null||request.getEmailId()==null||request.getPassword()==null) 
		{
			CreateUserResponse resp=new CreateUserResponse();
			resp.setMessage("Enter all fields ::::");
			resp.setStatus("Failure");
			response=new Gson().toJson(resp);
			return response;
		}
		
		CreateUserResponse res=loginService.createUserDtls(request);
		response=new Gson().toJson(res);
		LOG.info("response::::"+response);
		
		return response; 
	}
	
	@GetMapping(value="/userLogin")
	public String userLogin(@RequestBody CreateUserRequest request) {
		
		String response=null;
		
		if(request.getEmailId()==null||request.getPassword()==null) {
			CreateUserResponse resp=new CreateUserResponse();
			resp.setMessage("Enter all fields:::");
			resp.setStatus("Failure");
			response=new Gson().toJson(resp);
			return response;
		}
		
		CreateUserResponse resp=loginService.userLogin(request);
		response=new Gson().toJson(resp);
		return response;
		
		
	}

}
