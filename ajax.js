let button = document.getElementById('btn');

let userContent = document.getElementById('user');

button.addEventListener('click' , myFun);

function myFun()
{
    var xhr = new XMLHttpRequest();
     xhr.onload = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log(xhr);
            }
            if(xhr.status == 404){
                console.log('File is not found!');
            }
            var people = JSON.parse(xhr.responseText);
            console.log(people);
            var output = '';
            for(var i = 0 ; i <= 5 ; i++)
            {
                output+= '<h1>ID:'+people[i].id+'</h1>';
                output+= '<h1>Login: '+people[i].login+'</h1>';

                output+= '<img height="100" weight="100" src="'+people[i].avatar_url+'">';
             }
            userContent.innerHTML = output;
        }
    }
    xhr.open('GET' , 'https://api.github.com/users',true);

    xhr.send();
}