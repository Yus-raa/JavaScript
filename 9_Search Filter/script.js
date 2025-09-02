const users = [
  {
    name: "Muhammad Zain",
    pic: "https://cdn.pixabay.com/photo/2021/08/31/16/40/man-6589404_1280.jpg",
    bios: "Frontend developer who loves crafting responsive UIs with React."
  },
  {
    name: "Catherine Lee",
    pic: "https://cdn.pixabay.com/photo/2021/09/03/13/32/portrait-6595821_1280.jpg",
    bios: "UI/UX designer focused on creating intuitive user experiences."
  },
  {
    name: "David Brown",
    pic: "https://cdn.pixabay.com/photo/2020/10/14/03/18/man-5653200_1280.jpg",
    bios: "Full-stack developer with a knack for problem-solving and debugging."
  },
  {
    name: "Ella Davis",
    pic: "https://cdn.pixabay.com/photo/2025/07/31/20/00/woman-9747618_1280.jpg",
    bios: "Data analyst who enjoys finding patterns and insights in large datasets."
  },
  {
    name: "Frank Wilson",
    pic: "https://cdn.pixabay.com/photo/2019/12/04/09/30/man-4672229_1280.jpg",
    bios: "Cloud engineer working with AWS and containerized applications."
  },
  {
    name: "Grace Miller",
    pic: "https://cdn.pixabay.com/photo/2023/08/01/18/52/man-8163603_1280.jpg",
    bios: "Mobile app developer specializing in Flutter and React Native."
  },
  {
    name: "Henry Thompson",
    pic: "https://cdn.pixabay.com/photo/2020/09/13/17/28/portrait-5568884_1280.jpg",
    bios: "Cybersecurity enthusiast researching threat detection and prevention."
  },
  {
    name: "Isabella Martinez",
    pic: "https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg",
    bios: "AI researcher exploring deep learning and NLP applications."
  },
  {
    name: "Yashfa Yaseen",
    pic: "https://cdn.pixabay.com/photo/2021/11/25/13/05/woman-6823558_1280.jpg",
    bios: "Game developer passionate about Unity and interactive storytelling."
  },
  {
    name: "Katherine White",
    pic: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg",
    bios: "Project manager ensuring smooth delivery of software products."
  },
  {
    name: "Liam Harris",
    pic: "https://cdn.pixabay.com/photo/2018/06/19/19/48/man-3485138_1280.jpg",
    bios: "DevOps engineer automating CI/CD pipelines and deployments."
  },
  {
    name: "Mia Clark",
    pic: "https://cdn.pixabay.com/photo/2024/01/29/08/35/girl-8539256_1280.jpg",
    bios: "Content creator and tech blogger sharing coding tips online."
  },
  {
    name: "Yusra Yaseen",
    pic: "https://cdn.pixabay.com/photo/2025/07/31/20/00/woman-9747618_1280.jpg",
    bios: "Machine learning engineer focused on recommendation systems."
  },
  {
    name: "Olivia Walker",
    pic: "https://cdn.pixabay.com/photo/2023/10/24/14/59/woman-8338390_1280.jpg",
    bios: "Software tester with a passion for delivering bug-free experiences."
  }
];

// show all the users
// filter everytime input occurs
// show filtered users
function showUsers(ary){
    ary.forEach(function(user){
        // create outer card div
        const card = document.createElement("div");
        card.classList.add("card");

        // create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create blured layer div
        const bluredLayer = document.createElement("div");
        bluredLayer.style.backgroundImage = `url(${user.pic})`;
        bluredLayer.classList.add("blurred-layer");

        // create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // create h3 and paragraph
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p")
        para.textContent = user.bios;

        // append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        // append all to the card
        card.appendChild(img);
        card.appendChild(bluredLayer);
        card.appendChild(content);

        // finally append card to the body
        document.querySelector(".cards").appendChild(card);
        })

}
showUsers(users)