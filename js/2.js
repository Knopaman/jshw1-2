var arr=[];
var name;
for(var i=0; i<5; i++) {
    arr[i]=prompt('Введите имя пользователя:')
}

name=prompt('Введите имя');
var l=0;
for (var i=0; i<5; i++){
    if (arr[i]==name){
        l=1;
        alert(name + ', вы успешно вошли');
        break;
    }
}

if (l==0){
    alert('Ошибка');
}

