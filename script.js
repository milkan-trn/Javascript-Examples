
/* 
 * This is mobile menu togle script and FAQ table manu show hide script. 
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function menu_toggle(){
    var menu = document.querySelector('.mobile-menu-toggle');
     var menu2 = document.querySelector('.mobile-menu-toggle2');
   
    menu.addEventListener('click', function(){
         var offcanvas = document.querySelector('.offcanvas');
        offcanvas.style.display= "flex";
        });
        
        menu2.addEventListener('click', function(){
         var offcanvas = document.querySelector('.offcanvas');
        offcanvas.style.display= "none";
        });
}
menu_toggle();

function remove_show () {
var find_show = document.querySelectorAll('.triangle-up');
for(let i = 0; i<find_show.length; i++) {
    var isset_show = find_show[i].parentElement.querySelector(".show"); 
    if(isset_show){
        isset_show.classList.remove('show');
    }
    var triangle_up = find_show[i].parentElement.querySelectorAll('.triangle-up')[0];
    if(triangle_up){
        triangle_up.classList.remove('triangle-up-rotate')
    }
    find_show[i].parentElement.querySelectorAll("h3")[0].classList.remove('faq_box');
}
}



function triangle01_open(){
    var tridw = document.querySelectorAll('.triangle-up')[0];
    tridw.addEventListener('click', function(){
        remove_show ();
        var tridw = document.querySelectorAll('.triangle-up')[0];
        var parentTri = document.querySelectorAll('.triangle-up')[0].parentElement;
        parentTri.querySelectorAll("[itemprop='text']")[0].classList.toggle('show')
        parentTri.querySelectorAll("h3")[0].classList.toggle('faq_box')
        tridw.classList.toggle('triangle-up-rotate');
        });
        
}
triangle01_open();
function triangle02_open(){
    var tridw = document.querySelectorAll('.triangle-up')[1];
    tridw.addEventListener('click', function(){
        remove_show ();
        var tridw = document.querySelectorAll('.triangle-up')[1];
        var parentTri = document.querySelectorAll('.triangle-up')[1].parentElement;
        parentTri.querySelectorAll("[itemprop='text']")[0].classList.toggle('show')
        parentTri.querySelectorAll("h3")[0].classList.toggle('faq_box')
        tridw.classList.toggle('triangle-up-rotate');
        });
        
}
triangle02_open();
function triangle03_open(){
    var tridw = document.querySelectorAll('.triangle-up')[2];
    tridw.addEventListener('click', function(){
        remove_show ();
        var tridw = document.querySelectorAll('.triangle-up')[2];
        var parentTri = document.querySelectorAll('.triangle-up')[2].parentElement;
        parentTri.querySelectorAll("[itemprop='text']")[0].classList.toggle('show')
        parentTri.querySelectorAll("h3")[0].classList.toggle('faq_box')
        tridw.classList.toggle('triangle-up-rotate');
        });
        
}
triangle03_open();
function triangle04_open(){
    var tridw = document.querySelectorAll('.triangle-up')[3];
    tridw.addEventListener('click', function(){
        remove_show ();
        var tridw = document.querySelectorAll('.triangle-up')[3];
        var parentTri = document.querySelectorAll('.triangle-up')[3].parentElement;
        parentTri.querySelectorAll("[itemprop='text']")[0].classList.toggle('show')
        parentTri.querySelectorAll("h3")[0].classList.toggle('faq_box')
        tridw.classList.toggle('triangle-up-rotate');
        });
        
}
triangle04_open();
