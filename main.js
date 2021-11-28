let header = document.querySelector('header')
let headerIcons = document.querySelectorAll('.section-header-wrapper-background__image__extras__card')

header.addEventListener("mousemove", parallax);

function parallax(e) {
    let _w = header.offsetWidth / 2;
    let _h = header.offsetHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let _depth1 = `${(50 - (_mouseX - _w) * 0.004) - 50}%, ${(50 - (_mouseY - _h) * 0.03) - 50}%`;
    let _depth2 = `${(50 - (_mouseX - _w) * 0.001) - 50}%, ${(50 - (_mouseY - _h) * 0.009) - 50}%`;
    let _depth3 = `${(50 - (_mouseX - _w) * 0.0012) - 50}%, ${(50 - (_mouseY - _h) * 0.009) - 50}%`;

    headerIcons[0].style.transform = `translate(${_depth1})`;
    headerIcons[1].style.transform = `translate(${_depth2})`;
    headerIcons[2].style.transform = `translate(${_depth3})`;
}
