import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/';

class UserService {

    postForumlaire(formName, description, dates) {
        return axios.post(API_URL + 'form', {
            nomFormulaire: formName,
            descFormulaire: description,
            dates: dates
        },{ headers: authHeader() }).then(
            response => {
                return response.data;
            }
        );
    }

    getAllForm() {
        return axios.get(API_URL + 'getallform', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}
export default new UserService();