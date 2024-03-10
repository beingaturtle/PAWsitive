document.addEventListener("click", (e) => {
    // check what was clicked
    let clickedTag = e.target.tagName;
    let clickedID = e.target.id;
    let clickedClass = e.target.className;

    console.log(clickedClass);
    // check if an image was clicked
    if (clickedTag == "IMG" && clickedClass == "owned") {
        // check what image was clicked
        switch(clickedID) {
            case './images/wardrobe/bald small.png':
                document.getElementById("hair").src = "";
                break;
            case './images/wardrobe/hair small.png':
                document.getElementById("hair").src = "../images/hair/hair.png";
                break;
            case './images/wardrobe/Tshirt small.png':
                document.getElementById("shirt").src = "../images/shirts/Tshirt.png";
                break;
            case './images/wardrobe/hoodie small.png':
                document.getElementById("shirt").src = "../images/shirts/hoodie.png";
                break;
            case './images/wardrobe/shorts small.png':
                document.getElementById("pants").src = "../images/pants/shorts.png";
                break;
            case './images/wardrobe/pants small.png':
                document.getElementById("pants").src = "../images/pants/pants.png";
                break;
            case './images/wardrobe/nothing shoes small.png':
                document.getElementById("shoes").src = "";
                break;
            case './images/wardrobe/shoes small.png':
                document.getElementById("shoes").src = "../images/shoes/shoes.png";
                break;
            case './images/wardrobe/nothing pet small.png':
                document.getElementById("dog").src = "";
                break;
            case './images/wardrobe/dog small.png':
                document.getElementById("dog").src = "../images/pets/dog.png";
                break;
            default:
                return;
        }
    }
})
