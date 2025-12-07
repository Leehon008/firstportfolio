package com.lee.firstspring.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    @GetMapping("/")
    public List<String> getStudents() {
        return List.of("Student1", "Student2", "Student 123313");
    }

    @GetMapping("/{id}")
    public String getStudent(@PathVariable String id) {
        return "Student " + id;
    }

    @PostMapping("/create")
    public String createStudent() {
        return "Created Student";
    }

    @PutMapping("/{id}")
    public String putStudentById(@PathVariable String id){
        return "Student " + id + " updated";
    }

    @PatchMapping("/{id}")
    public String patchStudentById(@PathVariable String id){
        return "Student " + id + " patched";
    }
}
