let carousel;
$(document).ready(() => {
    console.log("Test")
    carousel = new bootstrap.Carousel(document.querySelector(".carousel"), { interval: false });
    document.querySelector(".carousel").addEventListener('slide.bs.carousel', e => {
        let oldIndex = e.from;
        let newIndex = e.to;
        setSelectedControl(oldIndex, newIndex);
    })
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