import React, {useMemo} from "react";


function expensiveCalculation(numbers) {
    console.log("Calculating...");
    return numbers.reduce((a, b) => a + b, 0) * 2;
}

function UseMemoDemo({numbers}) {
    let calculationValue = useMemo(() => {
        return expensiveCalculation(numbers);
    }, [numbers]); // 仅当 numbers 改变时重新计算
    
    return (
        <div>
            <h2>UseMemo Demo</h2>
            <p>Numbers: {numbers.join(", ")}</p>
            <p>Calculation Result: {calculationValue}</p>
        </div>
    )
}

export default UseMemoDemo;