 var app=angular.module("myApp",[]);

app.controller('myCtrl', function(){
    var vm=this;
 
    vm.people=[
        {
            name:"Vasya",
            sname:"Vasyliy",
             age:"19",
              usertype:"user",
            phone:"+380978901915"
        },
          {
            name:"Nastia",
            sname:"Ivanova",
             age:"20",
              usertype:"user",
            phone:"+38097565545"
        },
          {
            name:"Ivan",
            sname:"Gorec",
               age:"24",
              usertype:"admin",
            phone:"+380660674125"
        }
    ]
  
    
        vm.add=function(){
        vm.people.push(vm.newUser);
            console.log(vm.newUser)
            $.ajax({
        url:'/update',
        data:JSON.stringify(vm),
        type:'POST',
        contentType:'application/json'
    }) 
            vm.newUser={};
                  
            
        }
        vm.remove=function(human){
           for(var x in vm.people){
                if(vm.people[x].phone===human.phone){
                    vm.people.splice(x,1);
                }
           }
        }
    
    
    
})

       
       
       
//    $('#myModal').modal('show');
//        $('#save').click(function(){
//            var user={
//                "name":$("#name").val(),
//                "sname":$("#sname").val(),
//                "age":$("#age").val(),    
//                "usertype":$("#usertype").val(),
//                "phone":$("#phone").val()
//            }
//            console.log(vm) 
//          $.ajax({
//        url:'/update',
//        data:JSON.stringify(user),
//        type:'POST',
//        contentType:'application/json'
//    })   
//         
// })
