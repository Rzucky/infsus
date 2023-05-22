const axios = require('axios'); // path to your server file

describe('Test the /createShop POST path', () => {
    test('It should respond with 201 created', async () => {
        const response = await axios
            .post('http://localhost:3000/createShop', {
                name: "Test Shop",
                employees: [
                    {name: "Employee 1", role: "manager", startDate: "2022-01-01"},
                    {name: "Employee 2", role: "employee", startDate: "2022-02-01"}
                ]
            });
        expect(response.status).toBe(201);
    });
});


describe('Test the /editShop POST path', () => {
    test('It should respond with 201 created', async () => {
        const response = await axios
            .post('http://localhost:3000/editShop', {
                name: "Test Shop",
                employees: [
                    {name: "Employee 1", role: "manager", startDate: "2022-01-01"},
                ]
            });
        console.log('AAAAAAAAAAAAAAA', response)
        expect(response.status).toBe(201);
    });
});

describe('Test the /employees GET path', () => {
    test('It should not return empty object', async () => {
        const response = await axios.get('http://localhost:3000/employees');
        expect(response.data).not.toBe({});
    });
});
