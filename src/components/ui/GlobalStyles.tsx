 

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Cinzel:wght@400;500;600&display=swap');
    *,*::before,*::after{box-sizing:border-box;}
    html{scroll-behavior:smooth;}
    body{margin:0;background:#EDE9E6;color:#5C4F4A;font-family:'DM Sans',sans-serif;overflow-x:hidden;}
    ::selection{background:#C9996B;color:#EDE9E6;}
    ::-webkit-scrollbar{width:3px;}
    ::-webkit-scrollbar-track{background:#EDE9E6;}
    ::-webkit-scrollbar-thumb{background:#C9996B;}
    *{cursor:none!important;}
    .ff-display{font-family:'Cormorant Garamond',serif;}
    .ff-cinzel{font-family:'Cinzel',serif;}

    @keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
    .marquee-track{animation:marquee 26s linear infinite;display:flex;width:max-content;}
    .marquee-track:hover{animation-play-state:paused;}

    @keyframes spin-slow{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
    .spin-slow{animation:spin-slow 18s linear infinite;}

    .nav-link{position:relative;}
    .nav-link::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:#C9996B;transition:width .4s ease;}
    .nav-link:hover::after{width:100%;}

    .dish-card-wrap:hover .dish-inner{box-shadow:0 32px 64px rgba(46,36,32,.25)!important;}
    .dish-card-wrap:hover .dish-img-el{transform:scale(1.06);}
    .dish-card-wrap:hover .dish-meta{opacity:1;transform:translateY(0);}
    .dish-card-wrap:hover .dish-label-default{opacity:0;}

    .dish-img-el{transition:transform .6s cubic-bezier(.25,.46,.45,.94);}
    .dish-meta{opacity:0;transform:translateY(8px);transition:opacity .4s ease,transform .4s ease;}
    .dish-label-default{transition:opacity .3s ease;}

    input,textarea{outline:none!important;}
    .form-field{border-bottom:1px solid rgba(92,79,74,.25);background:transparent;width:100%;padding:10px 0;font-family:'DM Sans',sans-serif;color:#5C4F4A;font-size:15px;transition:border-color .3s;}
    .form-field::placeholder{color:rgba(92,79,74,.45);}
    .form-field:focus{border-bottom-color:#C9996B;}

    .grain{position:fixed;inset:0;pointer-events:none;z-index:9900;opacity:.03;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");}
  `}</style>
);

export default GlobalStyles;
