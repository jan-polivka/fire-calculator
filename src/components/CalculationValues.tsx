import { action, computed, makeObservable, observable } from "mobx"

class CalculationValues{
    age: number
    expenditure: number
    income: number
    netWorth: number

    constructor() {
        makeObservable(this, {
            finalAmount: computed,
            finalAmounts: computed,
            age: observable,
            expenditure: observable,
            income: observable,
            netWorth: observable,
            set_age: action,
            set_expenditure: action,
            set_income: action,
            set_net_worth: action
        })        
        this.age = 0
        this.expenditure = 0 
        this.income = 0
        this.netWorth = 0
    }

    get finalAmount() {
        let calculationWorth = this.netWorth;
        for(let i = 0; i < 10; i++) {
            calculationWorth = calculationWorth*(1 + 0.07) + (this.income - this.expenditure);
        }
        return calculationWorth;
    }

    get finalAmounts() {
        let calculationWorth = this.netWorth;
        let calculationList = [this.netWorth]; //this should actually be a dict, with year as key
        for(let i = 0; i < 10; i++) {
            calculationWorth = calculationWorth*(1 + 0.07) + (this.income - this.expenditure);
            calculationList.push(calculationWorth)
        }
        return calculationList;
    }

    set_age(age) {
        this.age = age
    }

    set_expenditure(exp) {
        this.expenditure = exp
    }

    set_income(inc) {
        this.income = inc
    }
    
    set_net_worth(worth) {
        this.netWorth = worth
    }
    
}

export default CalculationValues;