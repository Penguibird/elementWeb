/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
eval("let carousel;\r\nlet selectedSlide = 0;\r\nlet selectedPortfolio = 0;\r\nlet selectedNavigation = 0;\r\nlet baseOverlayInnerHTML;\r\n\r\nconst isClient = typeof window !== 'undefined'\r\nif (isClient) {\r\n\r\n    const flipToSlide = (i) => {\r\n        console.log(\"fliping to\", i)\r\n        window.mySwipe.slideTo(i, 100);\r\n    }\r\n\r\n    const setSelectedControl = (from, to) => {\r\n        selectedSlide = to;\r\n        document.querySelectorAll('.carousel-control').forEach(el => {\r\n            if (el.classList.contains(`carousel-control-button-${from}`)) {\r\n                el.classList.remove(\"selected\")\r\n            }\r\n            if (el.classList.contains(`carousel-control-button-${to}`)) {\r\n                el.classList.add(\"selected\")\r\n            }\r\n        });\r\n    }\r\n\r\n    window.onload = () => {\r\n        console.log(\"Test\")\r\n\r\n        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)\r\n        console.log(vw)\r\n        window.mySwipe = new Swiper('#slider', {\r\n            width: vw * 0.905,\r\n            autoHeight: true,\r\n            // loop: true,\r\n        });\r\n        window.mySwipe.on('slideChange', e => {\r\n            setSelectedControl(selectedSlide, e.realIndex);\r\n        });\r\n        // window.mySwipe.on('transitionEnd', e => {\r\n        //     showPortfolio(selectedPortfolio, e.realIndex);\r\n        // })\r\n        // showPortfolio(0, 0)\r\n\r\n        document.querySelector('.media-info .carousel-control-next').addEventListener('click', e => { window.mySwipe.slideNext() })\r\n        document.querySelector('.media-info .carousel-control-prev').addEventListener('click', e => { window.mySwipe.slidePrev() })\r\n\r\n        document.querySelectorAll('.carousel-control').forEach(el => {\r\n            el.addEventListener('click', e => flipToSlide(el.getAttribute('data-i').toString()));\r\n        })\r\n\r\n        document.querySelectorAll('.portfolio-link.music').forEach((el, key) => {\r\n            el.addEventListener('click', e => openMusicPlayer(el.getAttribute('data-src')))\r\n        })\r\n        document.querySelectorAll('.portfolio-link.youtube, .portfolio-link.video').forEach((el, key) => {\r\n            el.addEventListener('click', e => openYoutubePlayer(el.getAttribute('data-src')))\r\n        })\r\n        document.querySelectorAll('.portfolio-link.image').forEach((el, key) => {\r\n            el.addEventListener('click', e => openImage(el.getAttribute('data-src')))\r\n        })\r\n\r\n        document.querySelectorAll('.portfolio-link.facebook').forEach((el, key) => {\r\n            el.setAttribute('href', el.getAttribute('data-src'));\r\n            el.setAttribute('target', '_blank');\r\n            // el.addEventListener('click', e => openFacebook(el.getAttribute('data-src'), el.getAttribute('data-url')))\r\n        })\r\n        document.querySelectorAll('.portfolio-link.docs').forEach((el, key) => {\r\n            el.setAttribute('href', el.getAttribute('data-src'));\r\n            el.setAttribute('target', '_blank');\r\n        })\r\n        document.getElementById(\"overlay\").addEventListener('click', e => overlayToggleVisibility(false));\r\n\r\n        document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\r\n            anchor.addEventListener('click', function (e) {\r\n                e.preventDefault();\r\n\r\n                document.querySelector(this.getAttribute('href')).scrollIntoView({\r\n                    behavior: 'smooth'\r\n                });\r\n            });\r\n        });\r\n\r\n        window.onresize = () => {\r\n            vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)\r\n            console.log(vw)\r\n            window.mySwipe = new Swiper('.swiper-container', {\r\n                initialSlide: selectedSlide,\r\n                width: vw * 0.905,\r\n                autoHeight: true,\r\n                // loop: true,\r\n            });\r\n            window.mySwipe.on('slideChange', e => {\r\n                setSelectedControl(selectedSlide, e.realIndex);\r\n            });\r\n            // window.mySwipe.on('transitionEnd', e => {\r\n            //     showPortfolio(selectedPortfolio, e.realIndex);\r\n            // })\r\n        }\r\n        baseOverlayInnerHTML = document.getElementById(\"overlay\").innerHTML;\r\n        document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\r\n            anchor.addEventListener('click', function (e) {\r\n                e.preventDefault();\r\n\r\n                document.querySelector(this.getAttribute('href')).scrollIntoView({\r\n                    behavior: 'smooth'\r\n\r\n                });\r\n            });\r\n        });\r\n        document.querySelector(\".show-navigation\").addEventListener('click', e => {\r\n            // Show navigation on sm\r\n            document.querySelector(\".navigation\").style.display = 'block';\r\n            document.querySelector(\".navigation\").style.transition = 'transform 0.2s ease-in-out';\r\n            window.requestAnimationFrame(() => {\r\n                document.querySelector(\".navigation\").style.transform = 'translateY(0)';\r\n            })\r\n        })\r\n        document.querySelector(\".close-navigation\").addEventListener('click', e => {\r\n            // Show navigation on sm\r\n            closeNavigation();\r\n        })\r\n        const closeNavigation = () => {\r\n            if (vw < 900) {\r\n                document.querySelector(\".navigation\").style.transform = 'translateY(-100%)';\r\n                window.requestAnimationFrame(() => {\r\n                    document.querySelector(\".navigation\").style.display = 'none';\r\n                })\r\n            }\r\n\r\n        }\r\n        document.querySelectorAll('.navigation a').forEach(el => {\r\n            el.addEventListener(\"click\", closeNavigation);\r\n        })\r\n        document.querySelectorAll('.navigation-overlay a').forEach(el => {\r\n            el.addEventListener(\"click\", closeNavigation);\r\n        })\r\n        const navigationOffset = 100;\r\n        document.querySelector(\".paralax\").onscroll = e => {\r\n            // Shrink the navigation-sm when scrolled down\r\n            if (document.querySelector(\".paralax\").scrollTop > 5) {\r\n                document.querySelector(\".navigation-sm\").style.height = \"80px\"\r\n                document.querySelector(\".navigation-sm button\").style.top = \"-60px\"\r\n            }\r\n            if (document.querySelector(\".paralax\").scrollTop < 5) {\r\n                document.querySelector(\".navigation-sm button\").style.top = \"-80px\"\r\n                document.querySelector(\".navigation-sm\").style.height = \"120px\"\r\n            }\r\n\r\n            [\"#paralax\", \"#mainText\", \"#mediaInfo\", \"#kontakt\"].forEach((el, i) => {\r\n                let { top, bottom } = document.querySelector(el).getBoundingClientRect();\r\n                // console.log(el, i, top, bottom);\r\n                if (el =  true && document.querySelector(\".paralax\").scrollTop > document.querySelector(\".paralax\").scrollTopMax - 100) {\r\n                    setSelectedNavigation(i);\r\n                }\r\n                if (top < (0 + navigationOffset) && bottom > (0 + navigationOffset)) {\r\n                    setSelectedNavigation(i);\r\n                }\r\n            })\r\n        }\r\n\r\n\r\n        //possibly unused\r\n        document.addEventListener('click', evt => {\r\n            let targetElement = evt.target; // clicked element\r\n            do {\r\n                if (targetElement == document.querySelector('.navigation')) {\r\n                    // This is a click inside. Do nothing, just return.\r\n                    closeNavigation();\r\n                    return;\r\n                }\r\n                // Go up the DOM\r\n                targetElement = targetElement.parentNode;\r\n            } while (targetElement);\r\n        })\r\n\r\n\r\n\r\n        // document.querySelector(\".image-portfolio-predmety\").addEventListener('click', e => {\r\n        //     toggle2(true)\r\n        // })\r\n        const toggle2 = bool => {\r\n            document.getElementById(\"overlay2\").style.display = bool ? 'grid' : 'none';\r\n            document.getElementById(\"overlay2\").style.opacity = bool ? 1 : 0;\r\n        }\r\n        // document.getElementById(\"overlay2\").addEventListener('click', e => {\r\n        //     toggle2(false)\r\n        // });\r\n        document.querySelector(\".close-button-2\").addEventListener('click', e => {\r\n            toggle2(false)\r\n        });\r\n\r\n\r\n\r\n\r\n        document.querySelectorAll('.navigation .hexagon-icon').forEach(el => {\r\n            el.addEventListener('mouseenter', e => document.querySelector('.navigation-wrapper').classList.add('hovered'))\r\n            // el.addEventListener('onmouseover', e=> document.querySelector('.navigation-wrapper').classList.add('hovered'))\r\n        })\r\n        document.querySelector('.navigation-wrapper').addEventListener('mouseleave', e => document.querySelector('.navigation-wrapper').classList.remove('hovered'))\r\n\r\n\r\n\r\n        window.myPortfolio = new Swiper('.swiper-container#myPortfolio', {\r\n            width: (vw > 1000 ? 900 : 0.80 * vw) * 0.9,\r\n            loop: true,\r\n            autoHeight: true,\r\n            // preventClicksPropagation: true,\r\n        });\r\n\r\n\r\n\r\n        document.querySelector('#overlay2 .carousel-control-next').addEventListener('click', e => { window.myPortfolio.slideNext() })\r\n        document.querySelector('#overlay2 .carousel-control-prev').addEventListener('click', e => { window.myPortfolio.slidePrev() })\r\n\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n    const setSelectedNavigation = i => {\r\n        document.querySelectorAll('.navigation a').item(selectedNavigation).classList.remove('selected');\r\n        selectedNavigation = i;\r\n        document.querySelectorAll('.navigation a').item(selectedNavigation).classList.add('selected');\r\n    }\r\n    const openFacebook = (img, url) => {\r\n        //Currently unused\r\n        openOverlay(`<a class=\"content facebook\" href=\"${url}\"><img src=\"${img}\" /></a>`);\r\n    }\r\n    const openYoutubePlayer = url => {\r\n        openOverlay(`<iframe class=\"content youtube\" width=\"100%\" height=\"500px\" src=\"${url}\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>`);\r\n        // document.querySelector('.content.youtube').get\r\n    }\r\n    const openMusicPlayer = (url) => {\r\n        openOverlay(`<iframe class=\"content\" width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\"\r\n        src=\"https://w.soundcloud.com/player/?url=https%3A//${url}&amp;&buying=false&sharing=false&download=false&show_artwork=true&show_playcount=false&show_user=false\">\r\n        </iframe>`)\r\n    }\r\n    const openImage = src => {\r\n        openOverlay(`<img src=\"${src}\" class=\"content\" />`)\r\n    }\r\n    const openVideo = src => {\r\n\r\n    }\r\n\r\n    const openOverlay = innerHTML => {\r\n        overlayToggleVisibility(true);\r\n        document.getElementById(\"overlay\").innerHTML = baseOverlayInnerHTML + innerHTML;\r\n    }\r\n    const overlayToggleVisibility = bool => {\r\n        document.getElementById(\"overlay\").style.display = bool ? 'grid' : 'none';\r\n        document.getElementById(\"overlay\").style.opacity = bool ? 1 : 0;\r\n        if (!bool) document.getElementById(\"overlay\").innerHTML = baseOverlayInnerHTML;\r\n    }\r\n\r\n    // const showPortfolio = (from, to) => {\r\n    //     selectedPortfolio = to;\r\n    //     console.log(\"showing portfolio\", from, to)\r\n    //     document.querySelector(`.slide-${from} .portfolio`).style.opacity = 0;\r\n    //     document.querySelector(`.slide-${from} .portfolio`).style.transform = 'translateY(50px)';\r\n    //     document.querySelector(`.slide-${to} .portfolio`).style.opacity = 1;\r\n    //     document.querySelector(`.slide-${to} .portfolio`).style.transform = 'translateY(0px)';\r\n    // }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://elementweb/./index.js?");
/******/ })()
;