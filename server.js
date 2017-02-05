var express = require('express');  // модуль експрес

var app = express();

var file = 'test.json'        //записуємо в змінну наш файл джесон

var path = require('path');
var bodyParser = require('body-parser')
var jsonfile = require('jsonfile')
app.use(bodyParser.json())      // потрібна конфігурація щоб працювати з джсон фалами


app.get('/', function(req, res) {     //перша функція яка з працьовує при заходженні на "/" 
    res.sendFile(path.join(__dirname + '/index.html'));   //показує файл індекс
});


app.post('/update', function(req, res){  // функція яка забезпечує запис в файл
    var user=req.body;                  //записує обєкт який прийшов з аджаксу в змінну 
    var users=jsonfile.readFileSync(file);   // зчитує інформацію з нашого 'test.json' файлу і записує в масив
    users.push(user);   //до масиву юзерів додає обєкт який ми отримали з аджаксу
    jsonfile.writeFileSync(file, users);   //новий масив перезаписує в 'test.json' 
});


app.post('/user', function (req, res) {   // функція яка забеспечує авторизацію
    var user=req.body;                      // --
    var users=jsonfile.readFileSync(file);      //--
    var userAvtoriz;    
    for(var i=0;i<users.length;i++){          //цикл який перевіряє чи є такий юзер у нашому 'test.json' 
        if(users[i].login==user.login&&users[i].password==user.password){
            userAvtoriz=users[i];  //якщо є то записуєм його в змінну
        }
    }
    res.send(userAvtoriz);    //відправляєм на вюшку
})




app.listen(8080, function(){
	console.log('listen on port');
});