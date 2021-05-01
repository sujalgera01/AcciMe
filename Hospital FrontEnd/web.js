fetch('https://acci-me.herokuapp.com/user/reportedAccident')
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("Error"))



// function getData(){
//     console.log("Started getData")
//     url = "https://acci-me.herokuapp.com/user/reportedAccident";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


// function postData(){
//     url = "https://acci-me.herokuapp.com/user/reportedAccident";
//     data = '{"_id":"608cfce43581054e6f61e9db","latitude":"50.32","longitude":"50.11","pincode":110095,"__v":0"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// if (Notification.permission === "granted") {
//     alert("New Urgent Case !");
// } else if (Notification.permission !== "denied") { 
//     Notification.requestPermission().then(permission => { 
//         console.log(permission);


function showNotification () {

    const notification = new Notification("New Case Found!", 
    { body: "Check details soon for help !"
    
    });
    
    }

console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification();
} else if (Notification.permission !== "denied") { 
    Notification.requestPermission().then(permission => { 
        if (permission === "granted"){
        showNotification();
        }


});

}