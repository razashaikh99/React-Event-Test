import React from 'react'

const BillCalculator = () => {

    function calculateBill() {

        var unit_rate = 25;
        var bill_cal = +prompt("Enter Your Units ...");
        var bill = unit_rate * bill_cal;
        alert("Unit Rate is 25")
        alert("Your Bill is : " + bill);

    }

    return (
        <div>
            <button className='btn btn-primary px-5 mt-4' onClick={calculateBill}>Enter Your Units</button>
        </div>
    )
}

export default BillCalculator