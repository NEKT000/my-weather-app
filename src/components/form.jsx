import { Wether } from "./wether";

export const Form = ({weatherMethod}) =>{
    return(
        <form onSubmit={weatherMethod}>
            <input className="search-input" type="text" name="city" placeholder="Search for cities" />
            <button className="get-wether-btn" onClick={Wether}>Get weather</button>
        </form>
    );
}