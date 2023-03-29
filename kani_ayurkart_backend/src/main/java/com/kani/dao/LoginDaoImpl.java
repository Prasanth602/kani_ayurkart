package com.kani.dao;

import com.kani.controller.LoginController;
import com.kani.dto.UserActivityInfo;
import com.kani.dto.UserDetailsDTO;
import com.kani.repository.ActivityInfoRepository;
import com.kani.repository.LoginRepository;
import com.kani.request.CreateUserRequest;
import com.kani.response.CreateUserResponse;
import com.kani.util.AurtKartKaniUtil;

import jakarta.annotation.Resource;

import java.util.Date;
import java.util.Optional;
import java.util.Properties;
import java.util.Random;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDaoImpl implements LoginDao {
	private static final Logger LOG = Logger.getLogger(LoginController.class.getName());
	

	@Autowired
	private LoginRepository repo;
	
	@Autowired
	private ActivityInfoRepository activityRepo;
	
	
	//@Resource(name="common",required=true)
	//private Properties commonProperties;
	
	
	private AurtKartKaniUtil ayurKartutil=new AurtKartKaniUtil();

	@Override
	public CreateUserResponse createUserDtls(CreateUserRequest request) throws Exception {

		CreateUserResponse resp = new CreateUserResponse();

		UserDetailsDTO userDetails = new UserDetailsDTO();
		int refNumber=1000000000+new Random().nextInt(9*1000000000);
		userDetails.setSno(refNumber);
		
		userDetails.setFirstname(request.getFirstName());
		userDetails.setLastname(request.getLastName());
		
		String emailIdEncrypted=ayurKartutil.encryptionAES(request.getEmailId());
		userDetails.setEmailid(emailIdEncrypted);
		
		String passwordEncrypted=ayurKartutil.encryptionAES(request.getPassword());
		String emailIdDecrypted=ayurKartutil.decryptionAES(emailIdEncrypted);
		System.out.println("Encrypted emailid is : "+emailIdEncrypted);
		System.out.println("Decrypted Email id is : "+emailIdDecrypted);
		
		userDetails.setPassword(passwordEncrypted);
		
		//userDetails.setEmailid(request.getEmailId());
		//userDetails.setPassword(request.getPassword());
		userDetails.setCreatedDate(new Date());
		userDetails.setTokenvalue("232323232");
		userDetails.setSessionid("ERERER#$#$#");
		
		UserActivityInfo activityInfo = new UserActivityInfo();
		//activityInfo.setsNo(refNumber);
		activityInfo.setServiceName("Registration / New ");
		activityInfo.setEmailId(emailIdEncrypted);
		activityInfo.setMobileNo("***********");
		activityInfo.setIp_Address("172.31.255.255");
		activityInfo.setCreatedDate(new Date());
		activityInfo.setTokenValue("ERERER#$#$#");
		activityRepo.save(activityInfo);
		
		String emailIdEncrtpt=ayurKartutil.encryptData(request.getEmailId());
		Optional<UserDetailsDTO> dto = repo.findById(emailIdEncrtpt);
		if (dto.isPresent()) {
			resp.setMessage("Email_Id already used  ::::");
			resp.setStatus("User_Existed");
			return resp;
		}

		UserDetailsDTO userResponse = repo.save(userDetails);
		LOG.info("response from database::::" + userResponse);
		
		//String firstNameEncrypted=ayurKartutil.encryptData(request.getFirstName());
		resp.setMessage("UserDetails added SuccessFulluy");
		resp.setStatus("Success");
		return resp;
	}

	@Override
	public CreateUserResponse userLogin(CreateUserRequest request) {
		

		CreateUserResponse resp = new CreateUserResponse();
		// UserDetailsDTO dto=new UserDetailsDTO();
		
		UserActivityInfo activityInfo = new UserActivityInfo();
		
		String emailIdEncrypted=ayurKartutil.encryptData(request.getEmailId());
		activityInfo.setEmailId(emailIdEncrypted);
		activityInfo.setServiceName("Login Service");
		activityInfo.setMobileNo("**********");
		activityInfo.setIp_Address("143.43.56.2");
		activityInfo.setCreatedDate(new Date());
		activityInfo.setTokenValue("EDET#JS#R");
		activityRepo.save(activityInfo);
		
		CreateUserResponse resp1 = null;
		String encryptedEmailId=ayurKartutil.encryptData(request.getEmailId());
		String encryptedPassword=ayurKartutil.encryptData(request.getPassword());
		
		Optional<UserDetailsDTO> dto = repo.findById(encryptedEmailId);
		
		if (dto.isPresent()) {
			UserDetailsDTO dtoGet = dto.get();
			if (encryptedEmailId.equals(dtoGet.getEmailid())
					&& encryptedPassword.equals(dtoGet.getPassword())) {
				
				//String message=commonProperties.getProperty("ABOUT_US");
				//System.out.println(message);
				
				resp.setMessage("Valid User :::::");
				resp.setStatus("SUCCESS");
				resp1 = resp;
			} else {
				resp.setMessage("Invalid Password :::::");
				resp.setStatus("Invalid Credentials ");
				resp1=resp;
			}
		} 
		else {
			resp.setMessage("User not found :::::");
			resp.setStatus("User NOT_FOUND");
			resp1 = resp;
		}
		return resp1;
	}
}
