<template>
    <div class="container" style="background-color: #ece6e6; padding: 2em; border-radius: 1em; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4A90E2;">Create a new shop</h2>
      <form @submit.prevent="submitForm" style="padding: 1em; background-color: white; border-radius: 1em;">
        <div class="mb-3" style="padding: 1em; border-radius: 1em; margin-top: 1em; background-color: #f1b8b8">
          <label for="shopName" class="form-label" style="color: #4A90E2;">Shop Name</label>
          <input type="text" class="form-control" style="padding: 0.5em; margin-bottom: 0.5em;" id="shopName" v-model="shop.name" required>
        </div>
        <h2 style="color: #4A90E2; padding-top: 1em;">Add employees</h2>
        <div class="mb-3" v-for="(employee, index) in shop.employees" :key="index" style="background-color: #f1b8b8; padding: 1em; border-radius: 1em; margin-top: 1em;">
          <div class="mb-3">
            <label for="employeeName" class="form-label" style="color: #4A90E2;">Employee Name</label>
            <input type="text" class="form-control" style="padding: 0.5em; margin-bottom: 0.5em;" id="employeeName" v-model="employee.name" required>
          </div>
          <div class="mb-3">
            <label for="employeeRole" class="form-label" style="color: #4A90E2;">Role</label>
            <select class="form-select" style="padding: 0.5em; margin-bottom: 0.5em;"  id="employeeRole" v-model="employee.role">
              <option selected disabled>Select Role</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="startDate" class="form-label" style="color: #4A90E2;">Start Date</label>
            <input type="date" class="form-control" style="padding: 0.5em; margin-bottom: 0.5em;" id="startDate" v-model="employee.startDate" required>
          </div>
        </div>
        <div style="margin-top: 1em">
            <button type="button" class="btn btn-secondary styled-secondary-button mx-3" @click="addEmployee">Add Employee</button>
            <button type="submit" class="btn btn-primary styled-primary-button">Create Shop</button>
        </div>

      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from "vue";
  
  export default {
    setup() {
      const shop = reactive({
        name: "",
        employees: [
          {
            name: "",
            role: "",
            startDate: ""
          }
        ]
      });
  
      const addEmployee = () => {
        shop.employees.push({
          name: "",
          role: "",
          startDate: ""
        });
      };
  
      const submitForm = () => {
        for (const emp in shop.employees)
        {
            if (emp.role === '')
            {
                emp.role == 'employee'
            }
        }
        console.log(shop);
      };
  
      return { shop, addEmployee, submitForm };
    }
  };
  </script>
  