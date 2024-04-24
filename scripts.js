function img_slider() {
    let points = document.querySelectorAll(".sld")
    console.log(points);
    let cnt =0;
    points.forEach((sld) => {

        sld.addEventListener("click", () => {
            console.log(sld.id)
            for (i = 0; i < imgs.length; i++) {
                if (imgs[i][0] === sld.id) {
                    document.getElementById("banner").src = imgs[i][1];
                }
            }
        })
    })
}
function show_menu(state){
    if (state===false){
        document.getElementById('submenu').style.transform="scaleY(1)"
    }   
}
function hidemenu(){
    document.getElementById('submenu').style.transform="scaleY(0)"

}
function readmore(){
    let popup= document.getElementById('prpl_img');
    document.getElementById('prpl_img').innerHTML = "<h2 id='pop'>Read more</h2>";
    document.getElementById('prpl_img').style.backgroundColor= "darkorange";
    popup.style.width= '80vw';
    popup.style.height= '40vh';
    popup.style.justifyContent= 'center';
    popup.style.alignItems='center';
    popup.style.display='flex';
    document.getElementById('pop').style.border = '2px white solid'
    document.getElementById('pop').style.padding ='5px'
    popup.style.color = 'white';
}
function reset_img(){
    document.getElementById('prpl_img').innerHTML = "<img src='Principal.jpg' >";

}
img_slider();