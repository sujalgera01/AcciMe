package com.example.accime;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.http.GET;

public interface myapi {
    @GET("user/findnearesthospital/Haryana")
    Call<List<model>> getmodels() ;
}
