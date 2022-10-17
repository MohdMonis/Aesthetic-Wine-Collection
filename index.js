const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-section]'),
    smooth: true
});


var la = document.getElementsByClassName('line-animation');
var main = document.getElementById('main');
for(var i = 0 ; i< la.length ; i++){
    la[i].addEventListener('mouseover', (val)=>{
        // console.log(val.target.querySelector('.aln'))
        val.target.querySelector('.aln').style = 'left:0; right:none; width:100%;'
        val.target.querySelector('.line').style = 'margin-left: 40px;'
    })
}
for(var i = 0 ; i< la.length ; i++){
    la[i].addEventListener('mouseout', (val)=>{
        val.target.querySelector('.aln').style = 'left:none; right:0; width:0;'
        val.target.querySelector('.line').style = 'margin-left: 20px;'
    })
}