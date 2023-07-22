import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters, faDroplet, faWind, faSun } from "@fortawesome/free-solid-svg-icons";


export const AirConditions = ({state}) =>{

    return (
        <div className="air-conditions">
            <h3 className="air-cond-h">Air Conditions</h3>
            <div className="table">
                <div>
                    <div>
                        <p><FontAwesomeIcon icon={faTemperatureThreeQuarters} className="icoAirCond"/>  Real Feel</p>
                        <p className="podpunkt">{state?.realFeel.toFixed(0)}°C</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faDroplet} className="icoAirCond"/>  Chance of rain</p>
                        <p className="podpunkt">{(state?.pop)*100}%</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p><FontAwesomeIcon icon={faWind} className="icoAirCond"/> Wind Speed</p>
                        <p className="podpunkt">{((state?.windSpeed)*3.6).toFixed(1)} km/h</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faSun} className="icoAirCond"/> UV Index</p>
                        <p className="podpunkt">0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

