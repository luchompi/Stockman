import PropTypes from "prop-types";
import "../assets/css/cards.css"
import PlayOnce from "../components/Animations.jsx";
import {useSesionStore} from "../stores/sesion.store.js";
import COMMS from '../assets/json/COMMS.json'

const CardLayout = ({cardHeader,cardTitle,cardText,cardComponent,cardIcon}) =>{
    const {isLoading} = useSesionStore.getState();
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h4>{isLoading ? "Espere..." : cardHeader}</h4>
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h3>{isLoading ? null : cardTitle}</h3>
                    </div>
                    <div className="card-text">
                        <div className="row">
                            <div className="col col-lg-3">
                                {isLoading ?(<PlayOnce ICON={COMMS}/> ):(<PlayOnce ICON={cardIcon}/>)}
                            </div>
                            <div className="col col-lg-9">
                                {isLoading ? (
                                    "espere mientras procesamos unas cosas"
                                ) :
                                    (cardText  || cardComponent)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CardLayout.propTypes ={
    cardHeader: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    cardComponent: PropTypes.element,
    cardIcon: PropTypes.object
}

export default CardLayout