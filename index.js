let carousel;
let selectedSlide = 0;
let selectedPortfolio = 0;
let selectedNavigation = 0;
let baseOverlayInnerHTML;

const isClient = typeof window !== 'undefined'
if (isClient) {

    const flipToSlide = (i) => {
        console.log("fliping to", i)
        window.mySwipe.slideTo(i, 100);
    }

    const setSelectedControl = (from, to) => {
        selectedSlide = to;
        document.querySelectorAll('.carousel-control').forEach(el => {
            if (el.classList.contains(`carousel-control-button-${from}`)) {
                el.classList.remove("selected")
            }
            if (el.classList.contains(`carousel-control-button-${to}`)) {
                el.classList.add("selected")
            }
        });
    }

    window.onload = () => {
        console.log("Test")

        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(vw)
        window.mySwipe = new Swiper('#slider', {
            width: vw * 0.905,
            autoHeight: true,
            // loop: true,
        });
        window.mySwipe.on('slideChange', e => {
            setSelectedControl(selectedSlide, e.realIndex);
        });
        // window.mySwipe.on('transitionEnd', e => {
        //     showPortfolio(selectedPortfolio, e.realIndex);
        // })
        // showPortfolio(0, 0)

        document.querySelector('.media-info .carousel-control-next').addEventListener('click', e => { window.mySwipe.slideNext() })
        document.querySelector('.media-info .carousel-control-prev').addEventListener('click', e => { window.mySwipe.slidePrev() })

        document.querySelectorAll('.carousel-control').forEach(el => {
            el.addEventListener('click', e => flipToSlide(el.getAttribute('data-i').toString()));
        })

        document.querySelectorAll('.portfolio-link.music').forEach((el, key) => {
            el.addEventListener('click', e => openMusicPlayer(el.getAttribute('data-src')))
        })
        document.querySelectorAll('.portfolio-link.youtube, .portfolio-link.video').forEach((el, key) => {
            el.addEventListener('click', e => openYoutubePlayer(el.getAttribute('data-src')))
        })
        document.querySelectorAll('.portfolio-link.image').forEach((el, key) => {
            el.addEventListener('click', e => openImage(el.getAttribute('data-src')))
        })

        document.querySelectorAll('.portfolio-link.facebook').forEach((el, key) => {
            el.setAttribute('href', el.getAttribute('data-src'));
            el.setAttribute('target', '_blank');
            // el.addEventListener('click', e => openFacebook(el.getAttribute('data-src'), el.getAttribute('data-url')))
        })
        document.querySelectorAll('.portfolio-link.docs').forEach((el, key) => {
            el.setAttribute('href', el.getAttribute('data-src'));
            el.setAttribute('target', '_blank');
        })
        document.getElementById("overlay").addEventListener('click', e => overlayToggleVisibility(false));

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        window.onresize = () => {
            vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            console.log(vw)
            window.mySwipe = new Swiper('.swiper-container', {
                initialSlide: selectedSlide,
                width: vw * 0.905,
                autoHeight: true,
                // loop: true,
            });
            window.mySwipe.on('slideChange', e => {
                setSelectedControl(selectedSlide, e.realIndex);
            });
            // window.mySwipe.on('transitionEnd', e => {
            //     showPortfolio(selectedPortfolio, e.realIndex);
            // })
        }
        baseOverlayInnerHTML = document.getElementById("overlay").innerHTML;
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'

                });
            });
        });
        document.querySelector(".show-navigation").addEventListener('click', e => {
            // Show navigation on sm
            document.querySelector(".navigation").style.display = 'block';
            document.querySelector(".navigation").style.transition = 'transform 0.2s ease-in-out';
            window.requestAnimationFrame(() => {
                document.querySelector(".navigation").style.transform = 'translateY(0)';
            })
        })
        document.querySelector(".close-navigation").addEventListener('click', e => {
            // Show navigation on sm
            closeNavigation();
        })
        const closeNavigation = () => {
            if (vw < 900) {
                document.querySelector(".navigation").style.transform = 'translateY(-100%)';
                window.requestAnimationFrame(() => {
                    document.querySelector(".navigation").style.display = 'none';
                })
            }

        }
        document.querySelectorAll('.navigation a').forEach(el => {
            el.addEventListener("click", closeNavigation);
        })
        document.querySelectorAll('.navigation-overlay a').forEach(el => {
            el.addEventListener("click", closeNavigation);
        })
        const navigationOffset = 100;
        document.querySelector(".paralax").onscroll = e => {
            // Shrink the navigation-sm when scrolled down
            if (document.querySelector(".paralax").scrollTop > 5) {
                document.querySelector(".navigation-sm").style.height = "80px"
                document.querySelector(".navigation-sm button").style.top = "-60px"
            }
            if (document.querySelector(".paralax").scrollTop < 5) {
                document.querySelector(".navigation-sm button").style.top = "-80px"
                document.querySelector(".navigation-sm").style.height = "120px"
            }

            ["#paralax", "#mainText", "#mediaInfo", "#kontakt"].forEach((el, i) => {
                let { top, bottom } = document.querySelector(el).getBoundingClientRect();
                // console.log(el, i, top, bottom);
                if (el = "#kontakt" && document.querySelector(".paralax").scrollTop > document.querySelector(".paralax").scrollTopMax - 100) {
                    setSelectedNavigation(i);
                }
                if (top < (0 + navigationOffset) && bottom > (0 + navigationOffset)) {
                    setSelectedNavigation(i);
                }
            })
        }


        //possibly unused
        document.addEventListener('click', evt => {
            let targetElement = evt.target; // clicked element
            do {
                if (targetElement == document.querySelector('.navigation')) {
                    // This is a click inside. Do nothing, just return.
                    closeNavigation();
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
        })



        // document.querySelector(".image-portfolio-predmety").addEventListener('click', e => {
        //     toggle2(true)
        // })
        const toggle2 = bool => {
            document.getElementById("overlay2").style.display = bool ? 'grid' : 'none';
            document.getElementById("overlay2").style.opacity = bool ? 1 : 0;
        }
        // document.getElementById("overlay2").addEventListener('click', e => {
        //     toggle2(false)
        // });
        document.querySelector(".close-button-2").addEventListener('click', e => {
            toggle2(false)
        });




        document.querySelectorAll('.navigation .hexagon-icon').forEach(el => {
            el.addEventListener('mouseenter', e => document.querySelector('.navigation-wrapper').classList.add('hovered'))
            // el.addEventListener('onmouseover', e=> document.querySelector('.navigation-wrapper').classList.add('hovered'))
        })
        document.querySelector('.navigation-wrapper').addEventListener('mouseleave', e => document.querySelector('.navigation-wrapper').classList.remove('hovered'))



        window.myPortfolio = new Swiper('.swiper-container#myPortfolio', {
            width: (vw > 1000 ? 900 : 0.80 * vw) * 0.9,
            loop: true,
            autoHeight: true,
            // preventClicksPropagation: true,
        });



        document.querySelector('#overlay2 .carousel-control-next').addEventListener('click', e => { window.myPortfolio.slideNext() })
        document.querySelector('#overlay2 .carousel-control-prev').addEventListener('click', e => { window.myPortfolio.slidePrev() })





    }

    const setSelectedNavigation = i => {
        document.querySelectorAll('.navigation a').item(selectedNavigation).classList.remove('selected');
        selectedNavigation = i;
        document.querySelectorAll('.navigation a').item(selectedNavigation).classList.add('selected');
    }
    const openFacebook = (img, url) => {
        //Currently unused
        openOverlay(`<a class="content facebook" href="${url}"><img src="${img}" /></a>`);
    }
    const openYoutubePlayer = url => {
        openOverlay(`<iframe class="content youtube" width="100%" height="500px" src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
        // document.querySelector('.content.youtube').get
    }
    const openMusicPlayer = (url) => {
        openOverlay(`<iframe class="content" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//${url}&amp;&buying=false&sharing=false&download=false&show_artwork=true&show_playcount=false&show_user=false">
        </iframe>`)
    }
    const openImage = src => {
        openOverlay(`<img src="${src}" class="content" />`)
    }
    const openVideo = src => {

    }

    const openOverlay = innerHTML => {
        overlayToggleVisibility(true);
        document.getElementById("overlay").innerHTML = baseOverlayInnerHTML + innerHTML;
    }
    const overlayToggleVisibility = bool => {
        document.getElementById("overlay").style.display = bool ? 'grid' : 'none';
        document.getElementById("overlay").style.opacity = bool ? 1 : 0;
        if (!bool) document.getElementById("overlay").innerHTML = baseOverlayInnerHTML;
    }

    // const showPortfolio = (from, to) => {
    //     selectedPortfolio = to;
    //     console.log("showing portfolio", from, to)
    //     document.querySelector(`.slide-${from} .portfolio`).style.opacity = 0;
    //     document.querySelector(`.slide-${from} .portfolio`).style.transform = 'translateY(50px)';
    //     document.querySelector(`.slide-${to} .portfolio`).style.opacity = 1;
    //     document.querySelector(`.slide-${to} .portfolio`).style.transform = 'translateY(0px)';
    // }
























}
