/* <input type="text"  id="background" placeholder="bg">
    <input type="text"  id="fontfamily" placeholder="family">
    <input type="text"  id="fontcolor" placeholder="fontcolor">
    <input type="text"  id="lineheight" placeholder="espaçamento">
    <input type="number" id="fontsize" placeholder="fontsize"></input> */

    const background = document.getElementById('background');
    const fontfamily = document.getElementById('fontfamily');
    const fontcolor = document.getElementById('fontcolor');
    const lineheight = document.getElementById('lineheight');
    const fontsize = document.getElementById('fontsize');
    const section = document.getElementById('section')
    



    /* function teste(param0, param1){
        document.body.style[param1] = JSON.parse(localStorage.getItem(param0)) 
        
    } */

    function addToLocalStorage(){

        //teste('backgroundcolor', 'backgroundColor')
        let backgroundColor = JSON.parse(localStorage.getItem('backgroundcolor'))
        document.body.style.backgroundColor = backgroundColor;

        section.style.color = JSON.parse(localStorage.getItem('fontcolor'))

        let fontSize = JSON.parse(localStorage.getItem('fontsize'));
        section.style.fontSize = fontSize;



    }

    
    background.addEventListener('keypress', function(e){
        if(e.key == 'Enter'){
            let valor = background.value;
            let backgroundColor = document.body.style.backgroundColor = valor;
            localStorage.setItem('backgroundcolor', JSON.stringify(backgroundColor))
            document.getElementById('background').value = '';
        }
    })

    

    fontcolor.addEventListener('change', function(){
        let valor = fontcolor.value;
        let fontcolors = section.style.color = valor;
        localStorage.setItem('fontcolor', JSON.stringify(fontcolors))
        document.getElementById('fontcolor').value = '';
    });


    fontsize.addEventListener('change', function(){
        let valor = fontsize.value;
        let fontSize = section.style.fontSize = valor + 'px';
        localStorage.setItem('fontsize', JSON.stringify(fontSize));
    })
   
    lineheight.addEventListener('change', function(){
        let valor = 
    })

    
    window.onload = function(){
    if(localStorage.length > 0){
        addToLocalStorage();   
    }
}