var Friend=(function(){
             var friends=[];
             const add=(frnd) => {
                friends.push(frnd);
             };
             const remove=(that) => {
                var id=that.dataset.id
                
                for (let i = 0, len = friends.length; i < len; i++) {
                    if(friends[i].id==id){
                        var friend=friends[i];
                        var index = friends.indexOf(friend);
                        if (index > -1) {
                            friends.splice(index, 1);
                        }
                        break;
                    }
                }

                renderFriendList();
             };
             const renderFriend=(id) => {
                for (let i = 0, len = friends.length; i < len; i++) {
                    if(friends[i].id==id){
                        var str_html='';
                        
                        str_html+='<div class="left"><div class="pb5"><label for="fname">Name</label></div>'
                    str_html+='<div><input type="text" name="firstName" placeholder="First Name" value="'+friends[i].name+'" class="form-control" readonly></div></div>'
    
                    str_html+='<div class="left"><div class="pb5"><label for="lname">Surname</label></div>'
                    str_html+='<div><input type="text" name="lastName" placeholder="Last Name" value="'+friends[i].surname+'" class="form-control" readonly></div> </div>'
                    
                    str_html+='<div class="left">   <div class="pb5"> <label for="email">Email Address</label></div>'
                    str_html+='<div> <input type="email" name="email" placeholder="Email Address" value="'+friends[i].email+'" class="form-control quick-search-input" readonly></div></div>'
    
                    str_html+='<div class="left"> <input type="submit" name="" value="Remove Friend" class="red-btn btnRemoveFrnd" data-id="'+friends[i].id+'" onclick="Friend.removeFriend(this)"></div>'
                        
                     
                    
                    //str_html+='</div>'
                    
                    var new_row = document.createElement("div");
                    new_row.setAttribute("class", "invite-friends-row2" );
                    document.getElementById("invite-friends-row2").className = "invite-friends-row2";
                    new_row.innerHTML = str_html;
                    var br = document.createElement("br");
                    var container=document.getElementById("frndListContainer");
                    container.appendChild(new_row);
                    container.appendChild(br);

                        break;
                    }
                   
                  }
             };
             const renderFriendList=() => {
                var container=document.getElementById("frndListContainer");
                container.innerHTML = "";
                for (let i = 0, len = friends.length; i < len; i++) {
                    var str_html='';
                    
                    
                    str_html+='<div class="left"><div class="pb5"><label for="fname">Name</label></div>'
                    str_html+='<div><input type="text" name="firstName" placeholder="First Name" value="'+friends[i].name+'" class="form-control" readonly></div></div>'
    
                    str_html+='<div class="left"><div class="pb5"><label for="lname">Surname</label></div>'
                    str_html+='<div><input type="text" name="lastName" placeholder="Last Name" value="'+friends[i].surname+'" class="form-control" readonly></div> </div>'
                    
                    str_html+='<div class="left">   <div class="pb5"> <label for="email">Email Address</label></div>'
                    str_html+='<div> <input type="email" name="email" placeholder="Email Address" value="'+friends[i].email+'" class="form-control quick-search-input" readonly></div></div>'
    
                    str_html+='<div class="left"> <input type="submit" id="btnRemoveFrnd" name="" value="Remove Friend" class="red-btn btnRemoveFrnd" data-id="'+friends[i].id+'" onclick="Friend.removeFriend(this)"></div>'
                    
                   
                    
                    
                    var new_row = document.createElement("div");
                    new_row.setAttribute("class", "invite-friends-row2" );
                    document.getElementById("invite-friends-row2").className = "invite-friends-row2 pd0";
                    
                    new_row.innerHTML = str_html;
                    var br = document.createElement("br");
                    
                    container.appendChild(new_row);
                    container.appendChild(br);
              }
             };
             const resetForm=() => {
                document.getElementById("first-name").value="";
                document.getElementById("last-name").value="";
                document.getElementById("email-id1").value="";
             };
             var createGuid=() => {  
                function _p8(s) {  
                   var p = (Math.random().toString(16)+"000000000").substr(2,8);  
                   return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
                }  
                return _p8() + _p8(true) + _p8(true) + _p8();  
             };
             var validateEmail=() => {
                
                    var email = document.getElementById('email-id1');
                    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                    if (!filter.test(email.value)) {
                    email.focus;
                    return false;
                 }
                 return true;
                }

             return{
                 addFriend:add,
                 removeFriend:remove,
                 renderFriend:renderFriend,
                 resetForm:resetForm,
                 renderFriendList:renderFriendList,
                 createGuid:createGuid,
                 validateEmail:validateEmail,
                 friendList:friends
             }
}());

document.getElementById("btnAddFrnd").onclick = function() {
    var isEmailValid=Friend.validateEmail();
    if(!isEmailValid){
        alert('Please provide a valid email address');
        return false;
    }
    var frnd={
        id:Friend.createGuid(),
        name:document.getElementById("first-name").value,
        surname:document.getElementById("last-name").value,
        email:document.getElementById("email-id1").value
    };
    Friend.addFriend(frnd);
    Friend.renderFriend(frnd.id);
    Friend.resetForm();
};