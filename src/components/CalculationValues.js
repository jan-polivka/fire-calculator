import { action, computed, makeObservable, observable } from "mobx"

class CalculationValues{
    difference
    income = 0
    expenditure = 0 

    constructor() {
        makeObservable(this, {
            difference: computed,
            income: observable,
            expenditure: observable,
            set_expenditure: action,
            set_income: action
        })
    }

    get difference() {
        return this.income - this.expenditure;
    }

    set_expenditure(exp) {
        this.expenditure = exp
    }

    set_income(inc) {
        this.income = inc
    }
    
}

export default CalculationValues;