

const employee = {
    name: "Spice Johnson",
    streetAddress: "345 America Dr",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
    ...employee,
    [key]: value,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    delete employee.key;
    return {
      key,
    
    }
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}