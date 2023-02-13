const w = window;
const d = document;

export default function scrollTopBtn(btn){//function btn top scroll
    const $boton = d.querySelector(btn);

    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 103){
            $boton.classList.remove("hidden");
        }
        else{
            $boton.classList.add("hidden");
        }
    });

    $boton.addEventListener("click",(e)=>{
        w.scrollTo({behavior:"smooth", top: 0});//method that active a type scroll
    })
};