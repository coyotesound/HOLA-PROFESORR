const colors = {
    'u': 'green',         
    'l': 'red',       
    't': 'brown',      
    'r': 'blue',    
    'a': 'purple'       
};


document.addEventListener('keydown', function(event) {
   
    const key = event.key.toLowerCase();
    if (colors[key]) {
        
        document.body.style.backgroundColor = colors[key];
    }
});