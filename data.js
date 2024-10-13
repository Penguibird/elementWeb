module.exports = {
    test: "TEST",
    mediaCategoriesControls: [
        {
            first: true,
            title: "Tradiční média",
            img: "./assets/tradMedia.svg",
            color: 'deep-purple',

        }, {
            title: "Digitální média",
            img: "./assets/DigiMedia.svg",
            color: 'light-blue',

        }, {
            title: "Copywriting",
            img: "./assets/Copywriting.svg",
            color: 'pink',

        }, {
            title: "Produkce",
            img: "./assets/Produkce.svg",
            color: 'deep-purple',

        }, {
            title: "Eventy",
            img: "./assets/Eventy.svg",
            color: 'light-blue',

        }, {
            title: "Kapela<br />NANOVO",
            img: "./assets/Nanovo.webp",
            color: 'pink',

        },
    ],
    tradMedia: {
        first: true,
        title: "Tradiční média",
        color: 'deep-purple',
        twoPart: true,
        icon: "./assets/tradMedia.svg",
        icon2: "./assets/televize.svg",
        // longPhoto: "",
        list: `kampaň v rádiích <span class="bullet">•</span> načasování <span class="bullet">•</span> plánování včetně strategie komunikace <span     class="bullet">•</span> scénář reklamních spotů <span     class="bullet">•</span> castingu <span class="bullet">•</span> realizace <span class="bullet">•</span> zvukové logo <span class="bullet">•</span> televizní kampaň <span     class="bullet">•</span> sponzoring <span class="bullet">•</span> nákup včetně plánování`,
        mainText: [
            {
                isHeading: true,
                text: 'Rádio'
            },
            {
                text: `Chcete umocnit a povýšit Váš brand? <b>Rádio přenáší emoce, zvuky,
                podporuje představivost</b> a je všude všudypřítomné. Patří mezi nadlinková média, <b>buduje značku</b>. <br />
                Práce v rádiu a pro rádia mě provází celým životem. Zkušenosti promítám do
                plánování kampaní i přípravy spotů. Nejde totiž jen o sdělení. <b>Nastavení komunikace v
                rádiu vypovídá o firmě mnohem víc.</b> Vím, jak je pro výsledek kampaně důležitý dobře
                připravený a profesionálně zpracovaný spot. Velmi doporučuji i zvukovou identifikaci –
                zvukové logo. <b>Chcete přece, ať Vás poznají…</b>`
            },
        ],
        mainText2: [
            {
                isHeading: true,
                text: 'Televize'
            },
            {
                text: `Je čas se blýsknout? Jste připraveni posunout brand, službu či
                produkt mílovými kroky? <b>Televize je stále velice efektivním komunikačním kanálem.</b> <br /> Plánování, nákup i příprava šotů vychází z
                předem definovaného cíle. <b>V rámci spolupráce s produkčními studii není problém stát se
                součástí některých populárních pořadů,</b> soutěžit s diváky či prezentovat produkt.`
            },
        ],
        //radio portfolio
        firstPortfolio: [
            {
                heading: 'Zvukové logo',
                text: [`<b>Koupelny Jas</b> – z původního Cup songu se znělka
                časem vyloupla do modernějšho soundu. Má svou rockovou a drum verzi. Někteří
                tvrdí, že se nedá dostat z hlavy…`,
                    `<b>Malý a Velký</b> – někdy se představa o zvuku klientovi špatně
                interpretuje. Toto zvukové logo vzniklo bez souhlasu klienta. Naštěstí se líbilo! Dokonce
                i porotě celostátní soutěže rozhlasových spotů.`,
                    `<b>Ski aréna Karlov</b> – jéé, jéé…taky byste lyžovali?`
                ],
                image: './assets/tradMedia_photo2.jpg'
            },
            {
                heading: `Spoty`,
                text: [
                    `<b>Koupelny JaS</b> budují svůj brand dlouhodobě přes
                    éter zejména celoplošných rádií. Tato <a class="portfolio-link music">varianta
                        aktuálního spotu</a> je hudebně obohacena o prvky rocku. Hudba je autorská, klient ji využívá pod veškerým potřebným audio i vedio
                    obsahem.`,
                    `Vzhledem k částečně italskému sortimentu je <b>Vivaldiho STORM</b> jasnou volbou. Navíc
                    upozorní na originalitu a exkluzivitu značky. Crossoverová úprava podtrhuje
                    dynamičnost brandu, moderní pojetí showroomů a atraktivitu sortimentu.
                    Netradiční zpracován í poskytla popová houslistka <b>Lucie Klasek a The Stringz</b>.
                    Voceover – Jan Šťastný`,
                    `<b>Malý a Velký</b> – ukázka práce se zvukovým logem v produktovém spotu`,
                    `<b>Obchody 24</b> – jeden ze spotů úspěšné série produktových rádiových spotů. Voiceover -Jan Dolanský.`
                ]
            }
        ],
        //tv portfolio
        portfolio: [
            {
                heading: 'Televizní šoty, sponzoring',
                text: [
                    `<b>Koupelny JaS</b> - série tří image televizních  šotů pro sponzoring pořadu Jak se staví sen na TV prima. Nízkého rozpočtu jsme dosáhli natáčením přímo v koupelnovém studiu a malým štábem. `
                ]
            }
        ],
        OLDportfolio: [
            {
                heading: 'Koupelny JaS',
                img: './assets/music.svg',
                text: `<a href="">zvukové logo</a> <a class="portfolio-link music" data-src="api.soundcloud.com/tracks/979262794">image spot</a> <br /> <a href="">produktový spot</a> <a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980572237">rocková  mutace spotu</a>`
            }, {
                heading: 'Nejči Nábytek',
                img: './assets/music.svg',
                text: `<a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980570656">Rozhlasový spot</a> a <a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980569795&color=%23ff5500">spot pro vysílání v obchodních centrech</a> s hudbou The Stringz.`
            }, {

                heading: 'Ford Malý a Velký',
                img: './assets/music.svg',
                text: `<a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980566585&">Zvukové logo</a> a práce se zvukovým logem ve <a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980567776">spotu></a>`
            }, {
                heading: 'Koupelny JaS - TV',
                img: './assets/youtube.svg',
                // https://youtu.be/omZu8wDno94
                // https://youtu.be/ac8VRJQ3hfg
                // https://www.youtube.com/playlist?list=PL_aEqRRwrwVuXl5tRUaVqI3ME_VksIRkt
                text: `<a class="portfolio-link youtube" data-src="https://www.youtube.com/embed/videoseries?list=PL_aEqRRwrwVuXl5tRUaVqI3ME_VksIRkt">Seriál tří nízkorozpočtových televizních šotů</a> využitých při sponsoringu série Jak se staví sen.`,
            }
        ]
    },

    digiMedia: {
        title: 'Digitální média',
        color: 'light-blue',
        list: 'RTB Display a FB bannery, prospekting a retargeting, brandink na klik, SEO, PPC, PR články, obsah, video na FB,YT, spoznzorované příspěvky, spolupráce s influencery'.split(', ').join(' <span class="bullet">•</span> '),
        mainText: [
            {
                isHeading: true,
                text: 'Online marketing'
            },
            {
                text: `Svět online marketingu zásadně změnilo programatické plánování. <b>Najdou si nás!</b> Všichni to známe. <b>Zanecháváme stopy, které využívají správci kampaní a cíleně servírují nabídky.</b>
                Umíme se pohybovat v 98% on-line prostředí a trefit zákazníky s velkou přesností.
                Pro většinu segmentů je online nezastupitelný a do komunikačního mixu prostě patří. Navíc, dobře zanalyzovaná kampaň <b>umí najít odpovědi na mnoho otázek o konzumentech.</b>`
            },
            {
                isHeading: true,
                text: `Sociální média`
            },
            {
                text: `Facebook, Instagram, Youtube! <b>Tvrdí někdo, že tam nemá zákazníky? OMYL!</b> Jen najít způsob, jak se jim vetřít do přízně, mluvit jejich řečí a trefit se do myšlení a vkusu – co největší části z nich!
                <b>A co obecně fanoušci chtějí?</b> Kámoše – ne mentory! Inspiraci – ne obchodní tlak!                    
                A hlavně – připravte se na to, že <b>budování vztahu chce čas!</b> Jako v životě.`
            },
            {
                isHeading: true,
                text: 'Tvorba webů'
            }, {
                text: `Tvrorba webů má své fáze! Příprava zadání, nastavení cílů, struktura, textace, web design a samotné programování.
                  <b>Je to proces, kdy se z ničeho narodí něco a hraje významnou roli.</b> Ať už je web prodejním či pouze informačním kanálem.`
            }
        ],
        portfolio: [
            {
                heading: 'MŠ EDIN',
                img: "./assets/photo.svg",
                text: `<a class="portfolio-link image" data-src="assets\\portfolio\\Edyn.gif">Banner na web 1</a>, <a class="portfolio-link image" data-src="assets\\portfolio\\Edyn2.gif">banner na web 2</a> a pro display FB Kampaň`
            }, {
                heading: 'Optika Brylex',
                img: "./assets/photo.svg",
                text: `Sada banerů pro RTB Display, prospecting a retargeting. <a class="portfolio-link image" data-src="assets\\portfolio\\Brylex.gif">Modrá varianta</a>, 
                <a class="portfolio-link image" data-src="assets\\portfolio\\Brylex_grey.gif">šedá varianta</a>`
            }, {
                heading: 'Bazar Lesní Techniky',
                img: "./assets/photo.svg",
                text: `<a class="portfolio-link image" data-src="assets\\portfolio\\bazar.gif">Bannery pro RTB display a FB Kampaň</a>`
            }, {
                heading: 'The Stringz',
                img: "./assets/facebook.svg",
                text: `<a class="portfolio-link facebook" data-src="https://www.facebook.com/media/set?vanity=thestringzcz&set=a.2352727218323099">Spoluvytváření obsahu FB Stránky</a> instrumentálního tria The Stringz`
            }, {
                heading: 'Koupelny JaS',
                img: "./assets/facebook.svg",
                text: `<a class="portfolio-link facebook" data-src="https://www.facebook.com/JaSkoupelny/?view_public_for=525219261202067">Tvorba obsahu firemní stránky</a>`,
            }
        ]
    },
    mediaCategories: [
        {
            title: 'Copywriting',
            color: 'pink',
            list: 'Tisková zpráva;PR článek;scénář reklamního spotu;komentář k videoprezentaci;textace webu'.split(';').join(' <span class="bullet">•</span> '),
            mainText: [
                {
                    isHeading: true,
                    text: 'Copywriting'
                }, {
                    text: `Slovo má obrovskou moc. Potěší, povzbudí, urazí, rozpláče, přesvědčí i manipuluje. <b>Slovu předchází myšlenka.</b>
                     Věříte v sílu myšlenky? <b>Potom pozor na to, co říkáme a píšeme.</b> V komunikaci se zákazníkem <b>hledáme přesnost vyjadřování, efektivitu, styl, formu a jeho pohled.</b>
                      KOMU-nikace. Vidíte? Nedůležitější v komunikaci je <b>KOMU je sdělení určeno.</b> Občas přirovnávám marketingovou komunikaci k radě profesora Matějíčka týkající se výchovy dětí. <b>Něco se nesmí, něco se musí a o zbytku můžeme diskutovat.</b>
                       Ano, určitá pravidla je potřeba ctít.`
                },
            ],
            portfolio: [
                {
                    heading: "Nejči Nábytek",
                    img: "./assets/youtube.svg",
                    text: `Komentář k videoprezentaci - <a class="portfolio-link video" data-src="https://www.youtube.com/watch?v=0UCv0jNCBuU">Sedačky by Nejči design</a>. Voiceover Jan Šťastný`
                }, {
                    heading: "Rozhlasové spoty",
                    img: "./assets/docs.svg",
                    text: `<a class="portfolio-link music" data-src="api.soundcloud.com/tracks/980583994">Personální inzerce Pruniwerk</a>,
                     <a class="portfolio-link docs" data-src="assets\\portfolio\\Irský kotlet -Chodura - final.docx">Beskydské uzeniny Chodura</a>,
                      <a class="portfolio-link docs" data-src="assets\\portfolio\\SEN final.docx">Hotel SEN</a> - dva produkty`
                }, {
                    heading: "Nejči Nábytek",
                    img: "./assets/docs.svg",
                    text: `PR Článek - <a class="portfolio-link docs" data-src="assets\\portfolio\\Jak vybrat správnou.docx">Jak vybrat správnou sedačku</a>`
                }, {
                    heading: "The Stringz",
                    img: "./assets/docs.svg",
                    text: `<a class="portfolio-link docs" data-src="assets\\portfolio\\Interview popová Lucie Klasek.pdf">Interview</a> s popovou houslistkou Lucie Klasek a
                     <a class="portfolio-link docs" data-src="assets\\portfolio\\The Stringz Ostrava TZ.docx">tisková zpráva</a> ke koncertu`
                }
            ]
        }, {
            title: 'Produkce',
            color: 'deep-purple',
            list: 'audio spot – video šot – video prezentaci – content pro sociální média – prezentační film – produktová videa – reportáž – pozvánku - reklamní grafiku - corporate indentity -  tiskoviny -  bannery – venkovní reklamu - polepy vozového parku'.split(' – ').join(' <span class="bullet">•</span> '),
            mainText: [
                {
                    text: `Kreativní cesta od zadání k cíli! Správně vystavěný brief, nápady, brainstormingy, různé pohledy, konfrontace.
                     SHODA! <b>Sejít se v představě o výsledném produktu. Sejít se v týmu, sejít se s klientem.</b> Spolupráce a sdílení myšlenek s kameramany, zvukaři, střihači, animátory, grafiky.
                      <b>A je to.</b>`
                }
            ], portfolio: [
                {
                    heading: 'PARS Komponenty',
                    img: "./assets/youtube.svg",
                    text: `Technologická videa <a class="porfolio-link yotuube" data-src="https://www.youtube.com/watch?v=q_9khLdS828">in-house</a>  by PARS Komponenty, Brožury na veletrh
                    <a class="porfolio-link yotuube" data-src="https://www.youtube.com/watch?v=YxIk86I_Qfk">LED stripe</a>, <a class="portfolio-link image" data=src="assets\\portfolio\\revolut_maketa.jpg">revolut</a>
                     a <a class="portfolio-link docs" data-src="assets\\portfolio\\Stepper_MQ.pdf">stepper</a>
                      <a class="portfolio-link image" data-src="assets\\portfolio\\stepper_maketa.jpg">(nahled brozury)</a>`
                }, {
                    heading: 'Obchody 24',
                    img: "./assets/music.svg",
                    text: `<a class="porfolio-link music" data-src="api.soundcloud.com/tracks/980585413">Scénář rozhlasové spotu</a>`
                }, {
                    heading: 'Koupelny JaS - TV',
                    img: './assets/youtube.svg',
                    text: `<a class="portfolio-link youtube" data-src="https://www.youtube.com/embed/videoseries?list=PL_aEqRRwrwVuXl5tRUaVqI3ME_VksIRkt">Seriál tří nízkorozpočtových televizních šotů</a>
                     využitých při sponsoringu série Jak se staví sen, <a class="portfolio-link youtube" data-src="https://youtu.be/rP4KFWGD4Gg">produktové video na sociální média</a>`,
                }, {
                    heading: 'Nejči Nábytek',
                    img: './assets/youtube.svg',
                    text: `<a class="portfolio-link youtube" data-src="https://www.youtube.com/embed/videoseries?list=PL_aEqRRwrwVu8YqcU-UmIFsb9jQtQ-h9u">Série šotů na sociální media</a> a  
                    <a class="portfolio-link youtube" data-src="https://youtu.be/uMqG7j4sb40">spot Showroomy Nejči Design</a>`,
                }, {
                    heading: 'Bazar lesní techniky',
                    img: "./assets/photo.svg",
                    text: `<a class="portfolio-link image" data-src="./assets/portfolio/polep.jpg">Polep firemního vozu</a>`
                }
            ]
        }, {
            title: 'Eventy',
            color: 'light-blue',
            list: 'Firemní family day – konference – slavnostní recepce – výročí – otevření či znovuotevření í pobočky – prezentace nového produktu – společenská akce – team building – hudební produkce všetně suportu – hudební vystoupení'.split(' – ').join(' <span class="bullet">•</span> '),
            mainText: [
                {
                    text: `Doba virová zastavila veškerá setkávání, prezentace, akce. A potvrdilo se, jak všem chybí. 
                <b>Ani nejlepší online přenosy zkrátka nezajistí to pravé prožívání, emoce, zážitky a sdílení.</b>
                Pokud Vás čeká firemní událost a potřebujete ji zorganizovat komplexně nebo jen částečně doplnit, jsem k dispozici.`
                }
            ],
            portfolio: [

            ]
        }, {
            title: 'Kapela NANOVO',
            color: 'pink',
            mainText: [
                {
                    text: `I hudba je komunikační prostředek. A jaký.
                    Co teprve komunikace v kapele, v týmu, s pořadateli, médii – nekonečný prostor pro stále nové situace a zkušenosti.
                    Přes občasné svízele je to prostě „lovejob“`,
                }, 
                // {
                //     text: `<b>A potisk? Většinou platí méně je více.</b> Pak stoupá i užitnost a střízlivější potisk udělá často větší efekt. Vše je individuální. Po zvážení konkrétní nabídky budete mít snazší rozhodování.`
                // }
            ],
            portfolio: [
                {
                    heading: 'Bazar Lesní Techniky',
                    img: './assets/photo.svg',
                    text: `<a  class="portfolio-link docs" data-src="./assets/portfolio/mikiny.pdf">Firemní mikiny</a>`
                }, {
                    heading: 'Reklamní předměty',
                    img: './assets/photo.svg',
                    // TODO Vymyslet Slider v portfoliu
                    text: `<a class="portfolio-link image-portfolio-predmety">Selekce předmětů</a>` // TODO consider elongating text
                }
            ]
        }
    ],
    myPortfolio: [
        // "./assets/portfolio/predmety/94192_15_apl (1).jpg",
        // "./assets/portfolio/predmety/AD_diar-2021 (1).jpg",
        // "./assets/portfolio/predmety/cajova-kolekce_apl (1).jpg",
        // "./assets/portfolio/predmety/coko_apl.jpg",
        // "./assets/portfolio/predmety/kalendar-stolni_2021_simulace-listy.jpg",
        // "./assets/portfolio/predmety/STRETCH_apl.jpg",
    ]
}