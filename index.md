<!doctype html>

<html lang="ru">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="CSS/style.css" />
        <link rel=”icon” href=”/favicon.ico” type=”image/x-icon”>
        <link rel="stylesheet" href="css/colorpicker.css" type="text/css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Сочетание цветов интерьера</title>
    </head>

    <svg style="display:none;">
        <symbol id = "up" viewBox="0 0 21.36 10.36">
            <g><path  d="M.71,10.36a.7.7,0,0,1-.5-.21.7.7,0,0,1,0-1L9.15.21a.7.7,0,0,1,1,0,.7.7,0,0,1,0,1L1.21,10.15A.7.7,0,0,1,.71,10.36Z"/><path  d="M18.65,10.36a.7.7,0,0,1-.5-.21L9.21,1.21a.7.7,0,0,1,0-1,.7.7,0,0,1,1,0l8.94,8.94a.71.71,0,0,1-.5,1.21Z"/></g>
        </symbol>
        <symbol id = "down" viewBox="0 0 21.36 10.36">
            <g><path d="M9.71,10.36a.71.71,0,0,1-.5-1.21L18.15.21a.7.7,0,0,1,1,0,.7.7,0,0,1,0,1l-8.94,8.94A.7.7,0,0,1,9.71,10.36Z"/><path  d="M9.65,10.36a.7.7,0,0,1-.5-.21L.21,1.21a.7.7,0,0,1,0-1,.7.7,0,0,1,1,0l8.94,8.94a.71.71,0,0,1-.5,1.21Z"/></g>
        </symbol>
        <symbol id = "order" viewBox="0 0 26.22 23.76">
            <g><path  d="M10.5,18.78a2.56,2.56,0,0,1,1.95,2.92,2.49,2.49,0,0,1-4.91,0c-.25-1.26.43-2.33,1.9-2.93l-.3,0H7a.65.65,0,0,1-.75-.63Q4.81,11.07,3.41,4l-.07-.24h-2c-.21,0-.43,0-.64,0A.63.63,0,0,1,0,3.16a.62.62,0,0,1,.66-.65H3.77a.65.65,0,0,1,.74.61c.12.62.24,1.24.37,1.89H8.73c.21,0,.32,0,.39-.27a6.83,6.83,0,0,1,13,0,.31.31,0,0,0,.36.25h3c.63,0,.86.27.74.88Q25,12,23.74,18.17a.64.64,0,0,1-.72.59h-2.5c1.57.71,2.2,1.72,1.92,3a2.5,2.5,0,0,1-4.89,0c-.28-1.26.36-2.27,1.88-3Zm5.11-6.28A5.62,5.62,0,1,0,10,6.85,5.6,5.6,0,0,0,15.61,12.5ZM6.86,15H23.11l1.77-8.7H22.5a7.53,7.53,0,0,1-.69,3.6,6.87,6.87,0,0,1-2.43,2.75,6.66,6.66,0,0,1-3.47,1.11,6.61,6.61,0,0,1-4.35-1.32A6.94,6.94,0,0,1,8.74,6.28H5.14Zm.53,2.52h15c.08,0,.21-.06.22-.12.09-.35.15-.71.23-1.09H7.14Zm2.62,5A1.25,1.25,0,0,0,10,20a1.25,1.25,0,1,0,0,2.5Zm11.23-1.26A1.25,1.25,0,0,0,20,20a1.25,1.25,0,1,0,0,2.5A1.25,1.25,0,0,0,21.24,21.25Z"/>
                <path  d="M15,6.26v-3a.63.63,0,1,1,1.24,0v3h3c.45,0,.75.26.74.64s-.29.6-.73.6h-3v3a.64.64,0,0,1-.61.72c-.37,0-.63-.28-.63-.73v-3H12c-.43,0-.72-.24-.72-.61A.64.64,0,0,1,12,6.27h3Z"/></g>
        </symbol>
        <symbol id = "bin" viewBox="0 0 26.2 23.8">
            <g >
                <path d="M10.5,18.8c1.3,0.3,2.2,1.6,1.9,2.9c-0.2,1.4-1.5,2.3-2.9,2c-1-0.2-1.9-1-2-2c-0.2-1.3,0.4-2.3,1.9-2.9H9.1H7
                    c-0.4,0.1-0.7-0.2-0.7-0.5c0,0,0-0.1,0-0.1C5.3,13.4,4.3,8.7,3.4,4L3.3,3.8h-2c-0.2,0-0.4,0-0.6,0C0.4,3.8,0,3.6,0,3.2
                    c0,0,0,0,0,0c0-0.3,0.2-0.6,0.6-0.7c0,0,0,0,0.1,0h3.1c0.4-0.1,0.7,0.2,0.7,0.6c0,0,0,0,0,0.1C4.6,3.7,4.8,4.4,4.9,5h3.8
                    c0.2,0,13.6,0,13.8,0h3c0.6,0,0.9,0.3,0.7,0.9c-0.8,4.1-1.6,8.2-2.5,12.3c0,0.4-0.3,0.6-0.7,0.6c0,0,0,0,0,0h-2.5
                    c1.6,0.7,2.2,1.7,1.9,3c-0.3,1.4-1.6,2.2-3,1.9c-1-0.2-1.7-1-1.9-1.9c-0.3-1.3,0.4-2.3,1.9-3L10.5,18.8z M6.9,15h16.2l1.8-8.7
                    l-19.7,0L6.9,15z M7.4,17.5h15c0.1,0,0.2-0.1,0.2-0.1c0.1-0.4,0.1-0.7,0.2-1.1H7.1L7.4,17.5z M10,22.5c0.7,0,1.3-0.6,1.3-1.3
                    c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.2,0.6-1.2,1.2S9.3,22.5,10,22.5L10,22.5z M21.2,21.3c0-0.7-0.5-1.3-1.2-1.3c0,0,0,0,0,0
                    c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2C20.7,22.5,21.2,21.9,21.2,21.3L21.2,21.3z"/>
            </g>
        </symbol>
        <symbol id = "vertcolor" viewBox="0 0 27.42 27.42">
            <g><path  d="M0,0V27.42H27.42V0ZM17.09,1.42V26h-3V1.42Zm-15.67,0H12.63V26H1.42ZM26,26H18.5V1.42H26Z"/></g>
        </symbol>
        <symbol id = "minus" viewBox="-4 0 27 2">
            <g> <rect " width="20" height="2"/></g>
        </symbol>
        <symbol id = "plus" viewBox="0 0 20 20">
            <g> <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"/></g>
        </symbol>
        <symbol id = "icon" viewBox="0 0 29.75 34.31"">
            <g><defs><style>.cls-1{fill:red;}.cls-2{fill:#ff0;}.cls-3{fill:blue;}.cls-4{fill:lime;}.cls-5{fill:#f0f;}.cls-6{fill:aqua;}</style></defs></g><polygon class="cls-1" points="14.88 17.15 14.83 0 29.71 8.54 14.88 17.15"/><polygon class="cls-2" points="14.88 17.15 0 8.62 14.83 0 14.88 17.15"/><polygon class="cls-3" points="29.75 25.69 14.92 34.31 14.88 17.15 29.75 25.69"/><polygon class="cls-4" points="14.88 17.15 0.04 25.77 0 8.62 14.88 17.15"/><polygon class="cls-5" points="29.75 25.69 14.88 17.15 29.71 8.54 29.75 25.69"/><polygon class="cls-6" points="14.92 34.31 0.04 25.77 14.88 17.15 14.92 34.31"/></g></g>
        </symbol>
    </svg>    
      
<body>
  
    <header class="header">
      <div class="container">
        <div class="header__inner">
            
                <div class="header__logo"><img src="img/logo_choocol.png" 
                    alt="select color logo">
                </div>    
                <nav class="nav">
                    <a class="nav__link" href="#"> Курсы</a>
                    <a class="nav__link" href="#"> Блог</a>
                    <a class="nav__link" href="#"> Магазин</a>
                </nav>
                <button class="burger" type = "button">
                  <div class = "burger_item"> Menu_nav</div> 
                   
                </button>
                <div class = "containerOrder" >
                    <button class="buttOrderCosult" >Рекомендация</button>
                    <svg class="buttOrder" > <use xlink:href="#bin"></use> </svg>
                </div>
                
               
        </div>
     </div>

    <div class="tabs">
        <div class="bnt_menu"> <div class = h1NavClass> ИНТЕРЬЕР ˬ </div> 
            <div class="menu">
                <!-- <li class="menu_link" href="#"> Интерьер</li> -->
                 <li class="menu_link" href="#"> Сайт</li>
                 <li class="menu_link" href="#"> Одежда</li>
                 <li class="menu_link" href="#"> Цвет </li>
            </div>
        </div>
        <div class="tabs__nav">
           
          <div class="tabs__nav-btn" > Спальня </div>
          <div class="tabs__nav-btn" > Гостиная</div>
          <div class="tabs__nav-btn" > Кухня</div>
          <div class="tabs__nav-btn" > Детская</div>
          <div class="tabs__nav-btn" > Кабинет</div>
          <div class="tabs__nav-btn" > Холл</div>
          <div class="tabs__nav-btn" > Ванная </div>
          <div class="tabs__nav-btn" > Туалет</div>
      </div>
    </div>
    </header>
    <div class="intro">
        <div class = "container_buttons">
                <svg class = "icon"> <use xlink:href="#icon"></use> </svg>
                <svg class = "butt"> <use xlink:href="#up"></use> </svg>
                <svg class = "butt"> <use xlink:href="#down"></use> </svg>
                <svg class = "butt"> <use xlink:href="#plus"></use> </svg>
                <svg class = "butt"> <use xlink:href="#minus"></use> </svg>
                <svg class = "butt"> <use xlink:href="#vertcolor"></use> </svg>
                <!-- <svg class = "butt"> <use xlink:href="#order"></use> </svg> -->
        </div> 
        <div class="intro_1" id="sleepRoom"  >
                <span class="color1" style  = "background: #f7d5d5" ></span>
                <span class="color2"></span>
                <span class="color3"></span>
                <span class="color4" > </span>

                <span class="color5" > </span>
                <span class="color6" ></span>
                <span class="color7" ></span>
                <span class="color8" > </span>

        </div>
        <div class="intro_1" id="gostinaya">
            <span class="color1" ></span>
            <span class="color2" style  = "background: #5ee411"    ></span>
            <span class="color3"  ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1" id="kitchen">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1" id="babeRoom">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1"  id="bussinesRoom">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1"  id="Holl">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1"  id="bathRoom">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
        <div class="intro_1"  id="WC">
            <span class="color1" ></span>
            <span class="color2" ></span>
            <span class="color3" ></span>
            <span class="color4" ></span>
            <span class="color5" ></span>
            <span class="color6" ></span>
            <span class="color7" ></span>
            <span class="color8" ></span>
        </div>
    </div>
       
            
       <script src="js1/app.js"></script>
       
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
       <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
       <script type="text/javascript" src="js1/colorpicker.js"></script> 
       
    </body>
</html>


