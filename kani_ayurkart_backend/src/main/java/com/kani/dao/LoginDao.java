package com.kani.dao;

import com.kani.request.CreateUserRequest;
import com.kani.response.CreateUserResponse;

public interface LoginDao {

	CreateUserResponse createUserDtls(CreateUserRequest request) throws Exception;

	CreateUserResponse userLogin(CreateUserRequest request);

}
