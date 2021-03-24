
    const data = require('./data.json');
    var emp = data.carshop.employees;
    var cm = data.carshop.carmodels;
    var sale = data.carshop.sales;

    function getEmployees(){
        var list = [];
        var text = "";
        for(var i = 0; i<emp.length;i++){
            text = "Name: " + emp[i].name + '\n'
            + "id: " + emp[i].id + '\n'
            list[i] = text;
        }
        return list;
    };

    function getCarModels(){
        var list = [];
        var text = "";
        for(var i = 0; i<cm.length;i++){
            text = "Car: " + cm[i].brand + ", " + cm[i].model + '\n'
            + "Price: " + cm[i].price + '\n' 
            + "id: " + cm[i].id + '\n' + '\n';
            list[i] = text;
        }
        return list;
    };

    function postCarModels(ID, carbrand, carmodel, carprice){
        const carModelList = [...cm]; //clones carmodels array
        car = {id: ID, brand:carbrand, model:carmodel, price:carprice};
        carModelList.push(car);
        cm = carModelList;

        return car;
    }

    function deleteCarModels(id){
            const carModelList = cm.filter(c => c.id !==  id);
            cm = carModelList;
    };

    function getSale(id){
        var price = 0;
        var carIndex;
        for(var j = 0; j<sale.length; j++){
            if(id === sale[j].employee_id){
                carIndex = sale[j].carmodel_id - 1;
                price += cm[carIndex].price;
            }
        }
        return price;
    }

    function getTotalSales(){
        const list = [...getEmployees()]; //clone
        for(var k = 0; k<list.length;k++){
            list[k] += "sales: " + getSale(k+1) + '\n';
        }
        return list;
    };


    //test cases
    const employees = getEmployees();
    const carmodels = getCarModels();
    const sales = getTotalSales();
    for(var i=0;i<employees.length;i++){
        console.log(employees[i]);
    }
    for(var i=0;i<carmodels.length;i++){
        console.log(carmodels[i]);
    }
    for(var i=0;i<sales.length;i++){
        console.log(sales[i]);
    }
    postCarModels(6, "Porsche", "911", 400000);
    deleteCarModels(1);
    postCarModels(7, "Porsche", "911", 400000);
    postCarModels(6, "Porsche", "911", 400000);
    deleteCarModels(6);
    for(var i=0;i<carmodels.length;i++){
        console.log(carmodels[i]);
    }
