package com.example.accime;

public class model {
    String Address,State;


    public model(String address, String state) {
        Address = address;
        State = state;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }
}
