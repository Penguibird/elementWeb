let carousel;
$(document).ready(() => {
    console.log("Test")
    carousel = new bootstrap.Carousel(document.querySelector(".carousel"), { interval: false });
    document.querySelector(".carousel").addEventListener('slide.bs.carousel', e => {
        let oldIndex = e.from;
        let newIndex = e.to;
        setSelectedControl(oldIndex, newIndex);
    })
    // let paralax = document.querySelector('.paralax');
    // paralax.addEventListener('scroll', ev => {
    //     console.log(ev.target.scrollTop)
    //     const scrollCutOff = 1632;
    //     if (ev.target.scrollTop >= scrollCutOff) {
    //         console.log("END")
    //         stopParalaxForMain()
    //     } if (ev.target.scrollTop < scrollCutOff) {
    //         startParalaxForMain()
    //     }
    // })
})


const flipToSlide = (i) => {
    console.log("fliping to", i)
    carousel.to(i)

}

const setSelectedControl = (from, to) => {
    let list = document.getElementsByClassName('carousel-control');
    // console.log(list, list[0], to)
    list.item(from).classList.remove("selected");
    list.item(to).classList.add("selected");
}


const stopParalaxForMain = () => {
    // document.getElementsByClassName('static-content')[0].style.display = "none";
    // document.getElementsByClassName('static-content')[0].classList.add('no-paralax');

    // document.getElementsByClassName('static-content')[0].style.display = "block";
}
const startParalaxForMain = () => {
    // document.getElementsByClassName('static-content')[0].classList.remove('no-paralax')
}