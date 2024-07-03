import {useSelector} from "react-redux";


function CarList(props) {
    const cars = useSelector(state => {
        return state.cars.data
    })

    return (
        <div>CarList</div>
    );
}

export default CarList;