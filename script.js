let show =document.querySelector('.show-btn')
show.addEventListener("click",function(){
 let show_pwd = document.querySelector('.User-input2');
 if(show_pwd.type == "password"){
show_pwd.type= 'text';
 }else{
    show_pwd.type='password';
 }
})