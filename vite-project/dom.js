const DOMSelectors = {
    cool: document.querySelector('#coolbutton'),
    warm: document.querySelector('#warmbutton'),
};

DOMSelectors.cool.addEventListener('click', function(event){
    e.currentTarget.parentNode.cool();
});
