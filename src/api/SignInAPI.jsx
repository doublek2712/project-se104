import axios from 'axios';

const SignInAPI = async (email, password) => {
    try {
        await axios.post('http://localhost:8081/api/pms-be/login', { email, password })
            .then((res) => {
                console.log(res.data);

                if (res.data.message == "Email not exits") {
                    alert("Email not exits");
                }
                else if (res.data.message == "Login Success") {

                    alert("Thành công gòi cọ đĩ ơiiiiii");
                }
                else {
                    alert("Incorrect Email and Password not match");
                }
            }, fail => {
                console.error(fail); // Error!
            });;
        // Xử lý phản hồi thành công
        //console.log(response.data);
    } catch (error) {
        // Xử lý lỗi
        //console.error(error);
        alert(err);
    }
};

export default SignInAPI;