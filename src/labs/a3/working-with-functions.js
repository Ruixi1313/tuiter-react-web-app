import ArrowFunctions from "./arrow-functions";
import ES5Functions from "./es5-functions";
import ImpliedReturn from "./implied-returns";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters"

function WorkWithFunctions() {
    return(
        <div>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    );
}

export default WorkWithFunctions