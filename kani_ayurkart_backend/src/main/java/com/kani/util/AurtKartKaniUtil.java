package com.kani.util;

import java.nio.charset.StandardCharsets;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

public class AurtKartKaniUtil {
	private static final String SECRET_KEY = "12125453265412547859654123568950";
	private static final String SALTVALUE = "abcdefggijklmnop";

	public String encryptData(String data) {
		// String encryptedData = null;
		// Encrypted logic
		// String originalInput = "test input";
		String originalInput = data;
		String encryptedData = Base64.getEncoder().encodeToString(originalInput.getBytes());
		return encryptedData;

	}
	
	public String decryptData(String data) {
		
		byte[] decodedBytes = Base64.getDecoder().decode(data);
		String decodedString = new String(decodedBytes);
		return decodedString;
	}
	
	//Encryption and Decryption methods ====================================================================
	/* Encryption Method */
	public static String encryptionAES(String strToEncrypt) throws Exception {
		byte[] iv = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};  
	      IvParameterSpec ivspec = new IvParameterSpec(iv);        
	      /* Create factory for secret keys. */  
	      SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");  
	      /* PBEKeySpec class implements KeySpec interface. */  
	      KeySpec spec = new PBEKeySpec(SECRET_KEY.toCharArray(), SALTVALUE.getBytes(), 65536, 256);  
	      SecretKey tmp = factory.generateSecret(spec);  
	      SecretKeySpec secretKey = new SecretKeySpec(tmp.getEncoded(), "AES");  
	      Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");  
	      cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivspec);  
	      /* Retruns encrypted value. */  
	      return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes(StandardCharsets.UTF_8)));
		}
	public static String decryptionAES(String strToDecrypt) throws Exception{
		byte[] iv = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}; 
	      IvParameterSpec ivspec = new IvParameterSpec(iv);  
	      /* Create factory for secret keys. */  
	      SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");  
	      /* PBEKeySpec class implements KeySpec interface. */  
	      KeySpec spec = new PBEKeySpec(SECRET_KEY.toCharArray(), SALTVALUE.getBytes(), 65536, 256);  
	      SecretKey tmp = factory.generateSecret(spec);  
	      SecretKeySpec secretKey = new SecretKeySpec(tmp.getEncoded(), "AES");  
	      Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");  
	      cipher.init(Cipher.DECRYPT_MODE, secretKey, ivspec);  
	      /* Retruns decrypted value. */  
	      return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
		}
}


