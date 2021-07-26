const awwLink = "https://www.reddit.com/r/aww/.json"


fetch(awwLink)
.then(res => res.json())
.then(data => {
    console.log(data);
console.log(data.data.children.length);
    console.log (data.data.children[0].data.title)

    for (let user = 0; user<10; user++){
        let title = data.data.children[user].data.title
        let image = data.data.children[user].data.thumbnail
        let link = data.data.children[user].data.url
    
        let post = document.createElement("p");
        document.querySelector(".posts").append(post);

        let postPicture = document.createElement("div");
        document.querySelector(".posts").append(postPicture);
        post.innerText = title;
        postPicture.innerHTML =`<img src="${image}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';">`; 

        let postLink = document.createElement("a");
        postLink.setAttribute("href", link);
        postLink.innerText = link;
        document.querySelector(".posts").append(postLink);

    }
    
    })

