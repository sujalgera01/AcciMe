package com.example.accime;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.EditText;
import android.widget.Toast;

public class registration extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_registration);
        View login = findViewById(R.id.tv_Login);
        View register = findViewById(R.id.bt_register);
        EditText firstname = (EditText) findViewById(R.id.et_firstName);
        EditText lastname = (EditText) findViewById(R.id.et_lastName);
        EditText email_reg = (EditText) findViewById(R.id.et_email);
        EditText phone = (EditText) findViewById(R.id.et_phone);
        EditText aadhar = (EditText) findViewById(R.id.et_aadhar);
        EditText password = (EditText) findViewById(R.id.et_password);
        EditText ConfirmPass = (EditText) findViewById(R.id.et_confirmppassword_register3);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(registration.this,register.class));
            }
        });
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (firstname.getText().toString().isEmpty()  ) {
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER FIRST NAME", Toast.LENGTH_SHORT).show();
                }else if(lastname.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER LAST NAME", Toast.LENGTH_SHORT).show();
                }else if(email_reg.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER EMAIL", Toast.LENGTH_SHORT).show();
                }else if(phone.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER PHONE", Toast.LENGTH_SHORT).show();
                }else if(aadhar.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER YOUR AADHAR NUMBER", Toast.LENGTH_SHORT).show();
                }else if(password.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE ENTER PASSWORD", Toast.LENGTH_SHORT).show();
                }else if(ConfirmPass.getText().toString().isEmpty()){
                    Toast.makeText(getApplicationContext(), "PLEASE CONFIRM PASSWORD", Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(getApplicationContext(), "SUCCESS", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}