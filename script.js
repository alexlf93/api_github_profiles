const main = document.getElementById("main");

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    let user = document.getElementById("search").value;

    axios.get("https://api.github.com/users/" + user)
    .then(response =>{
        const data = response.data;
        console.log(data);

        let profile = document.createElement("div");
        profile.classList.add('card');
        main.appendChild(profile);
        
        let avatarImg = document.createElement("img")
        avatarImg.src = data.avatar_url;
        avatarImg.classList.add('avatar');
        profile.appendChild(avatarImg);


        axios.get(data.repos_url)
        .then(response =>{
            const repoData = response.data;

        let list  = document.createElement("ul");
        list.classList.add('user-info');
        profile.appendChild(list);

        repoData.forEach((repo) =>{

            let publicRepos = document.createElement("li");
        publicRepos.classList.add('repo');
        publicRepos.textContent = repo.name;
        repos.appendChild(publicRepos);

        });

        });

        let profileData = document.createElement("div");
        profileData.classList.add('user-info');
        profile.appendChild(profileData);

        let profileName = document.createElement("h2");
        profileName.textContent = data.name;
        profileData.appendChild(profileName);

        let profileBio = document.createElement("h5");
        profileBio.textContent = data.bio;
        profileData.appendChild(profileBio);

        let infoData = document.createElement("ul");
        profileData.appendChild(infoData);
        infoData.classList.add('stats')

        let followers = document.createElement("li");
        followers.innerHTML =  `${data.followers} Followers`;
        infoData.appendChild(followers);

        let following = document.createElement("li");
        following.innerHTML =  `${data.following} Following`;
        infoData.appendChild(following);

        let totalRepos = document.createElement("li");
        totalRepos.innerHTML =  `${data.public_repos} Repos`;
        infoData.appendChild(totalRepos);

        let reposContainer  = document.createElement("div")
        reposContainer.classList.add('reposContainer');
        profileData.appendChild(reposContainer);
        

        let repos = document.createElement("ul");
        reposContainer.appendChild(repos);

    })
    .catch((error) =>{
        console.error(error);
    })
    
});
