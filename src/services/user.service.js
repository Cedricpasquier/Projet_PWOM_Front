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

    postResponse(id,userString,dates){
        return axios.post(API_URL + 'response',{
            formId: id,
            user : userString,
            responseDates: dates
        })
    }

    getAllForm() {
        return axios.get(API_URL + 'getallform', { headers: authHeader() });
    }

    getUserResp(user) {
        return axios.get(API_URL + 'gethisresp?user=' + user, { headers: authHeader() });
    }
}
export default new UserService();