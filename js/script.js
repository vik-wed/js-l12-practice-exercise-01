const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");



async function getData(numUsers){
    let usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); 
    let data = await usersRequest.json();
    let userResults = data.results;

    displayUsers(userResults);
}
getData(1);

function displayUsers(userResults){
    randomFolks.innerHTML = "";
    for (let user of userResults){
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        let userDiv = document.createElement("div");

        userDiv.innerHTML = `
                <h3>${name}</h3> 
                <p>${country}</p> 
                <img src =${imageUrl} alt="User avatar"/>
            `; 
        randomFolks.append(userDiv);
    }

};

selectUserNumber.addEventListener("change", function(e){
    let numUsers = e.target.value;

    getData(numUsers);
})