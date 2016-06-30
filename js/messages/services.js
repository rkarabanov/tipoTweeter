'use strict';
ttApp.service('messageService', [ function () {
    return {
        isLike: isLike,
        sendMessage:sendMessage,
        createMessage:createMessage,
        reverseMessage:reverseMessage,
        deleteMessage:deleteMessage
    };

    function deleteMessage(messages, id) {
      for (let i=0;i<messages.length;i++){
          if(messages[i].id===id){
            messages.splice(i,1);
          return messages;
          }
      }
    }
function createMessage(login,id,text) {
    return{
    dataTTMessege:  ""+new Date(),
        id: ++id,
        like: 0,
        loginUser: login,
        ttMessage:text,
        whoLiked:false
    }
}
function reverseMessage(messages) {
    return messages.reverse();
}
function sendMessage() {
    let text=document.getElementById("newMessage").value;
    document.getElementById("newMessage").value="";
    return text;
}

    function isLike(login, whoLiked) {
        // console.log(login+" " +whoLiked);
        if (whoLiked === false|| login===undefined) {

            return false;
        }
        else {
            for (let one of whoLiked){
                if(one===login){
                    return true;
                }
            }
        }
        return false;
    }
}
]);