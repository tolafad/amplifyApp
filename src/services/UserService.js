import axios from 'axios';

const USER_API_BASE_URL = "http://buddy-env.eba-epkynjas.eu-west-1.elasticbeanstalk.com/api/v1/buddy-system";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL + '/users');
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/user' , user);
    }
        
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/user/' + userId);
    }
    
    generateBuddyById(userId){
        return axios.get(USER_API_BASE_URL + '/user/' + userId + '/buddy');
    }
    
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/user/'+ userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/user/' + userId);
    }
}

export default new UserService()
