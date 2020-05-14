const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
const flexCt = document.getElementsByClassName("flex-container")[0];
//循环创建
for (let i = 0; i <works.length ; i++) {
    let all=document.createElement("div");
    let genre=document.createElement("h4");
    let box1=document.createElement("div");
    let box2=document.createElement("div");
    let author=document.createElement("h3");
    let lifetime=document.createElement("h5");
    let photos=document.createElement("h3");
    let button=document.createElement("button");
    all.appendChild(genre);
    all.appendChild(box1);
    box1.appendChild(author);
    box1.appendChild(lifetime);
    all.appendChild(box2);
    all.appendChild(button);
    box2.appendChild(photos);
    button.innerHTML = "visit";
    genre.innerHTML = "Genre : " + works[i]["tips"];
    all.setAttribute("class","item");
     box1.setAttribute("class", "inner-box");
    author.innerHTML = works[i]["author"];
    lifetime.innerHTML = "lifetime: " + works[i]["lifetime"];
    //排版间隙
    author.style.display = "inline";
    lifetime.style.display = "inline";
    lifetime.style.marginLeft = "1em";
   box2.setAttribute("class", "inner-box");
    for (let j = 0, max = works[i]["photos"].length; j < max; j++) {
        let photoX = document.createElement("img");
        box2.appendChild(photoX);
        photoX.setAttribute("class", "photo");
        photoX.src = works[i]["photos"][j];
        flexCt.appendChild(all);
    }
    flexCt.appendChild(all);
}