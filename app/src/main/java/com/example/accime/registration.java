package com.example.accime;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class registration extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_registration);
        TextView login = findViewById(R.id.tv_Login);
        Button register = findViewById(R.id.bt_register);
        EditText firstname = (EditText) findViewById(R.id.et_firstName);
        EditText lastname = (EditText) findViewById(R.id.et_lastName);
        EditText email_reg = (EditText) findViewById(R.id.et_email);
        EditText aadhar = (EditText) findViewById(R.id.et_aadhar);
        EditText password = (EditText) findViewById(R.id.et_password);
        EditText ConfirmPass = (EditText) findViewById(R.id.et_confirmppassword_register3);
        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();
        ProgressBar progressBar = findViewById(R.id.progressBar);
        if (firebaseAuth.getCurrentUser() != null) {
            startActivity(new Intent(getApplicationContext(), Map_Activity.class));
        }

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(registration.this, register.class));
            }
        });
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(registration.this, aadhar.class));
            }
            });
    }
}