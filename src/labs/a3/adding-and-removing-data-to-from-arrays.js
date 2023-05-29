function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    // adding new items
    numberArray1.push(6);
    stringArray1.push('string3');

    // remove 1 item starting on 3rd spot
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);

    return(
        <div>
            <h2>Add and remove data to arrays</h2>
            <p>numberArray1 = {numberArray1}</p>
            <p>stringArray1 = {stringArray1}</p>
        </div>
    );
}

export default AddingAndRemovingDataToFromArrays