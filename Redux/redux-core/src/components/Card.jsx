
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Card(){

    const stateData = useSelector(state => state.data);
    const stateName = useSelector(state => state.cars)

    return(
        <div className='border border-1 border-dark p-3'>
            <p>Card</p>
            <p>{stateData.isAuth? "Anda login":"Belum Login"}</p>
            <p>{stateName[0].name}</p>
        </div>
    )
}

Card.propTypes = {
    auth: PropTypes.bool.isRequired, // Memastikan 'auth' adalah boolean dan wajib ada
};