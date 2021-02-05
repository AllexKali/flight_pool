window.addEventListener('load',  ()=> {
    const slide=document.querySelectorAll('.promotions_list-item');
    const sliderLine=document.querySelector('.promotions__slider_line');

    let count = 0;
    let width;

        function init() {
            width=document.querySelector('.promotions__slider').offsetWidth;
            sliderLine.style.width=width*slide.length/2+'px';
            slide.forEach(item=>{
                item.style.width=width/2+'px';
                item.style.height='auto';
            });
            rollSlider();
        }
window.addEventListener('resize',init)
init()

document.querySelector('#butRight').addEventListener('click', ()=>{

    count++;
    if(count>=slide.length-1){
        count=0;
    }
    rollSlider()
})

document.querySelector('#butLeft').addEventListener('click', ()=>{

    count--;
    if(count<=0){
        count=slide.length-2;
    }
    rollSlider()

})

function rollSlider() {
    sliderLine.style.transform='translate(-'+count*width/2+'px)';
    
}

})

