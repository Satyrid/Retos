function seleccionImagen() {
    /* Capturar un evento de selección por el id del checkbox */
    const img1 = document.getElementById("1").checked;
    const img2 = document.getElementById("2").checked;
    const img3 = document.getElementById("3").checked;
    const img4 = document.getElementById("4").checked;
    const img5 = document.getElementById("5").checked;
    const img6 = document.getElementById("6").checked;
    /* Capturar un evento de selección por el name del checkbox */
    const name1 = document.getElementsByName("1")[0].checked;
    const name2 = document.getElementsByName("2")[0].checked;
    const name3 = document.getElementsByName("3")[0].checked;
    const name4 = document.getElementsByName("4")[0].checked;
    const name5 = document.getElementsByName("5")[0].checked;
    const name6 = document.getElementsByName("6")[0].checked;

    let arrayImgSelected = new Array();
    arrayImgSelected.push(img1, img2, img3, img4, img5, img6);
    console.log(arrayImgSelected);



}