package com.lee.firstspring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
  @Id
  private String id;
  private  String name;
  private  String surname;
  private  String email;
  private  String phone;
  private  String address;
  private  String city;
  private  int age;

}
