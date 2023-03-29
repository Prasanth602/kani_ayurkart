package com.kani.dao;

import com.google.gson.Gson;
import com.kani.response.CreateUserResponse;

public class TestClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String finalResponse=null;
		
		
CreateUserResponse response =new CreateUserResponse();

response.setStatus("SUCCESS");
response.setMessage("Welcome to the KaniSolutions");
finalResponse=new Gson().toJson(response);
System.out.println("json response::::::"+finalResponse);



	}

}
