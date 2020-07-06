document.addEventListener("DOMContentLoaded", function() {
let DomElement = function () {
    this.height = 0;
    this.width = 0;
    this.backgroundColor = "";
    this.position = "";
};

DomElement.prototype.create = function (height, width, backgroundColor, position, funcMovie) {
            const classElem = document.createElement('div');
                 classElem.style.cssText = 'height: ' + height + '; \
                    width: ' + width + '; \
                    background-color: ' + backgroundColor + '; \
                    position: ' + position; 
                    document.body.appendChild(classElem);
                    funcMovie();

                }
DomElement.prototype.movie = function() {
    const sqrt = document.querySelector('div');
    let left = 0;
    let top = 0;
    document.body.addEventListener('keydown', function(event) {
      

        
if(event.key == 'ArrowRight') {
    sqrt.style.left = left + 'px';
    left+=10;
}
if(event.key == 'ArrowDown') {
    sqrt.style.top = top + 'px';
    top+=10;
}
if(event.key == 'ArrowLeft') {
    sqrt.style.left = left + 'px';
    left-=10;
}
if(event.key == 'ArrowUp') {
    sqrt.style.top = top + 'px';
    top-=10;
}
        
    })
    
}
      
        DomElement.prototype.create("100px", "100px", "red", "absolute", DomElement.prototype.movie);

})