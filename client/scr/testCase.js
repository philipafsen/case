import React, {Component} from 'react';
    const data = require('./data.json');
    var emp = data.carshop.employees;
    var cm = data.carshop.carmodels;
    var sale = data.carshop.sales;

    export function getEmployees(){
        var list = [];
        var text = "";
        for(var i = 0; i<emp.length;i++){
            text = "Name: " + emp[i].name + '\n'
            + "id: " + emp[i].id + '\n'
            list[i] = text;
        }
        return list;
    };


    export function getCarModels(){
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

    export function postCarModels(ID, carbrand, carmodel, carprice){
        const carModelList = [...cm]; //clones carmodels array
        var car = {id: ID, brand:carbrand, model:carmodel, price:carprice};
        carModelList.push(car);
        cm = carModelList;

        return car;
    }

    export function deleteCarModels(id){
            const carModelList = cm.filter(c => c.id !==  id);
            cm = carModelList;
    };
    
    export function getSale(id){
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

    export function getTotalSales(){
        //var totalSales = this.getSales();
        const list = this.getEmployees(); //clone
        for(var k = 0; k<list.length;k++){
            //list[k] += "sales: " + totalSales[k] + '\n';
            list[k] += "sales: " + this.getSale(k+1) + '\n';
        }
        return list;
    };

