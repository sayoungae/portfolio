window.onload=function(){
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor_inner');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    
    });

    document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
        cursorinner.classList.add('cursorinnerhover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorinner.classList.remove('cursorinnerhover');
    });
    })
}