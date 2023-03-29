package com.kani.dto;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "kani_user_dtls")
public class UserDetailsDTO {
	@GeneratedValue//(strategy=GenerationType.SEQUENCE,generator="kani_sequence_gen")
	@SequenceGenerator(name="kani_sequence_gen",sequenceName="KANI_USER_DTLS_SEQ")
	@Column(name="Sno")
	private int sno;
	
	private String firstname;

	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	private String lastname;
	
	@Id
	private String emailid;
	
	private String password;
	
	private String tokenvalue;
	
	private String sessionid;
	
	private Date createdDate;
	
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	
	
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTokenvalue() {
		return tokenvalue;
	}
	public void setTokenvalue(String tokenvalue) {
		this.tokenvalue = tokenvalue;
	}
	public String getSessionid() {
		return sessionid;
	}
	public void setSessionid(String sessionid) {
		this.sessionid = sessionid;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
	 
	
	

}
