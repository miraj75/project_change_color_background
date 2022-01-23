function myFun(){
    let search = document.getElementById('search');
    let image = document.querySelectorAll('.card');
    // console.log(image.length);
    for (let i = 0; i < image.length; i++) {
        image[i].style.display= "none"
        
    }
    for (let j = 0; j < image.length; j++) {
        const title = image[j].getAttribute("data-title");
        if(search.value==title){
            image[j].style.display = 'block';
        }
        if(search.value==""){
            image[j].style.display = 'block';
        }
        
    }
}

