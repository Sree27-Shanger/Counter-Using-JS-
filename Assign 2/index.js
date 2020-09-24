var count=document.getElementById('input');
var plus= document.getElementById('plus');
var minus= document.getElementById('minus');
plus.addEventListener('click', function(){
    count.value=count.innerHTML++;
});
minus.addEventListener('click', function(){
    count.value=count.innerHTML--;

})