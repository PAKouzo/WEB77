import express from "express";
import {v4 as uuidv4, v4} from "uuid";
import {users, posts} from "./data.js";
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("welcome!")
})

app.get('/users/:id', (req, res) => {
    const {age} = req.query;
    const {id} = req.params;
    console.log("id:", id)
    console.log("age:", age)
    const userRes = users.filter(user => user.age > +age);
    res.send(userRes)
})

/*lấy danh sách user hơn 50 tuổi:
- tạo api get user hơn 50 tuổi.
- viết logic để lấy user hơn 50 tuổi.
*/

app.get('/users/old', (req, res) => {
    const usersRes = users.filter(users => users.age > 50);
    res.send({
        status: 200,
        message: 'Find old users successfully',
        user: usersRes
    });
})

//ex2:
/*Viết API tạo user với các thông tin như trên users, với id là random (uuid), email là duy nhất, phải kiểm tra được trùng email khi tạo user
- create -> dùng phương thức post.
    1. Viết API tạo users.
    2. Viết hàm tạo ID (random, sử dụng uuid).
    3. Viết hàm nhập userName, email, age, avatar.
    4. Check email xem có bị trùng nhau không. (sử dụng find)
    5. Thêm thông tin user vào file data.
*/
//--------------------------------------------------------------
app.post('/createUsers', (req, res) => {
    const {userName, email, age, avatar} = req.body;
    console.log(userName,',', email,',', age,',', avatar)
    const newUser = {
        id: v4(),
        userName,
        email,
        age,
        avatar
    }
    const checkEmail = () => {
        const n = users.length;
        for( let i = 0; i < n; i++ )
        {
            if(newUser.email == users[i].email)
            {
                console.log("Email already in use!")
            }
            else{
                users.push(newUser);
                res.send(users);
            }
        }
    }
    res.send(checkEmail());
})
app.listen(8000, () => {
    console.log("server is running!");
})
