function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h2>Parenthesis and parameters</h2>
            <p>twoSquared = {twoSquared}</p>
            <p>square(2) = {twoSquared} </p>
            <p>threePlusOne = {threePlusOne}</p>
            <p>plusOne(3) = {threePlusOne}</p>

        </div>
    );
}

export default FunctionParenthesisAndParameters