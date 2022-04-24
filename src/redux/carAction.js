import axios from 'axios';

export const carAction = () => {
    return async (dispatch) => {
        const { data } = await axios('https://rent-cars-api.herokuapp.com/admin/car')

        data.forEach((cars) => {
            cars.kapasitas = "4 Orang";
            cars.transmisi = "Manual";
            cars.tahun = "Tahun 2022";
        });
    
        dispatch({ type:'SET_DETAILS', payload:data });
                
    }
}