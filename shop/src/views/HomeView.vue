<!-- eslint-disable max-len -->
<template>
  <div class="container">
    <div class="accordion" id="shopAccordion">
      <!-- {{ this.shops }} -->
      <div class="card" v-for="(shop, index) in this.shops" :key="shop.name">
        <div class="card-header">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true">
              {{ shop.name }}
            </button>
            <!-- <button>
              <router-link :to="{ name: 'EditShop', params: { initialShop: shop } }">Edit</router-link>
            </button> -->
          </h2>
        </div>

        <!-- <div :id="'collapse' + index" class="collapse" data-parent="#shopAccordion"> -->
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="employee in shop.employees" :key="employee.name">
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.role }}</td>
                  <td>{{ employee.startDate }}</td>
                </tr>
              </tbody>
            </table>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
export default {

  data() {
    return {
      shops: [],
    };
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/employees')
    console.log(response)
    const a = []
    for (const [key, value] of Object.entries(response.data)) {
      
      a.push({
        name:key,
        employees: value,
      })

    }
    this.shops = a;
    

  },
};
</script>
