import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import FindFunction from "./find-function";
import ForLoops from "./forloops";
import JsonStringify from "./json-stringify";
import MapFunction from "./map-function";
import FindFunctions from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [12345];
    let stringArray1 = ['string1string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    console.log('Working With Arrays'); 
    return (
        <div>
            <h2>Working With Arrays</h2>
            <p>numberArray1 = {numberArray1.toString()}</p>
            <p>stringArray1 = {stringArray1.toString()}</p>
            <p>variableArray1 = {variableArray1.map((item, i) => i < 3 ? item : item.toString())}</p>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunctions/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays