window.onload = function() {
    // Create the thing to hold our 400 elements. 
    let container = document.querySelector('.container');
    
    // Set the height, width, and background color of our container
    // center it horizontally with margin = auto
    // and use grid layout to make the boxes nice. 
    // container.style.height = '120px';
    // container.style.width = '120px';
    // container.style.backgroundColor = 'gray';
    // container.style.margin = 'auto';
    // container.style.display = 'grid';
    // container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)'
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '1px solid black';
      box.style.height = '8px';
      box.style.width = '8px'
      box.style.backgroundColor = 'white';
  
      container.appendChild(box);
    }
  
    document.body.appendChild(container);
  }