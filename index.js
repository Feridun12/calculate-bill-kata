function calculateBill(price, vat, tip) {
    if (typeof price == 'number' && typeof vat == 'number' && typeof tip == 'number') {
        let bill = price + (price * vat / 100) + tip 
            s_bill = bill.toString();
            return "£" + s_bill;
    }else{
        return "error"   
    }
};



module.exports = calculateBill;