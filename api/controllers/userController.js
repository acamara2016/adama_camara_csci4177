const userData = require('../model/userModel');

const searchUser = (key, value) => {
    const match = userData.find(userData=>{
        return userData[key] === value;
    })
    if(!match) throw new Error("No user Found");
    return match;
}
const updateUsername = (key, current_username, new_username) => {
    const match = userData.find(userData=>{
        userData[key] = new_username

        if(userData[key] === current_username){
            userData[key] = new_username
            return userData[key] === new_username;
        }
        
    })
    if(!match) throw new Error("No user Found");
    return match;
}

const addUser = (key, userName, email, __v) =>{
    const result = userData.push({
        "_id": key,
        "userName" : userName,
        "email":email,
        "__v":__v
    })
    if(!result) throw new Error("Unable to add user");
    return result;

}
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.updateUsername = updateUsername;