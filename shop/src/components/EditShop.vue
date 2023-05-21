<template>
    <div class="container">
      <h2>Edit Shop</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="shopName" class="form-label">Shop Name</label>
          <input type="text" class="form-control" id="shopName" v-model="shop.name" required>
        </div>
        <h2>Edit employees</h2>
        <div class="mb-3" v-for="(employee, index) in shop.employees" :key="index">
          <div class="mb-3">
            <label for="employeeName" class="form-label">Employee Name</label>
            <input type="text" class="form-control" id="employeeName" v-model="employee.name" required>
          </div>
          <div class="mb-3">
            <label for="employeeRole" class="form-label">Role</label>
            <select class="form-select" id="employeeRole" v-model="employee.role">
              <option selected disabled>Select Role</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="startDate" class="form-label">Start Date</label>
            <input type="date" class="form-control" id="startDate" v-model="employee.startDate" required>
          </div>
          <button type="button" class="btn btn-danger mb-3" @click="deleteEmployee(index)">Delete Employee</button>
        </div>
        <button type="button" class="btn btn-secondary mb-3" @click="addEmployee">Add Employee</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
        <button type="button" class="btn btn-danger" @click="deleteShop">Delete Shop</button>
      </form>
    </div>
  </template>
  
  <script>
  import { toRefs, reactive } from "vue";
  
  export default {
    props: {
      initialShop: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const shop = reactive({ ...props.initialShop });
  
      const addEmployee = () => {
        shop.employees.push({
          name: "",
          role: "",
          startDate: "",
        });
      };
  
      const deleteEmployee = (index) => {
        shop.employees.splice(index, 1);
      };
  
      const submitForm = () => {
        console.log(shop);
      };
  
      const deleteShop = () => {
        this.$emit('delete-shop', shop);
      };
  
      return { ...toRefs(shop), addEmployee, deleteEmployee, submitForm, deleteShop };
    }
  };
  </script>
  