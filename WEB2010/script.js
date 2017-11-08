const colors = [
    'rgb(255,127,80)',
    'rgb(128,0,128)',
    'rgb(255,20,147)',
    'rgb(0,128,128)',
    'rgb(0,191,255)',
    'rgb(220,20,60)',
    'rgb(0, 255, 0)',
    'rgb(218,112,214)',
    'rgb(127,255,212)'
  ]

  class Squares {
    constructor (boxes, colors) {
      this.addClickHandler(boxes, colors);
    }

   changeNumber (i, boxes) {
    //    console.log("Running function" changeNumber);
      for(var k = i; k >= 0; k--) {
        const n = parseInt(boxes[k].innerText) + 1;
        boxes[k].innerText = (n > 9)? 1 : n;
      }
    }

   changeColor (i, boxes, colors) {
    //    console.log("Running function" changeColor);
      for(var k = i; k >= 0; k--) {
        let style = window.getComputedStyle(boxes[k]);
        let index = colors.indexOf(style.backgroundColor);
        boxes[k].style.backgroundColor = (index > 7)? colors[0] : colors[index + 1];
        console.log(style.backgroundColor, index);
      }
    }

   addClickHandler (boxes, colors) {
      boxes.forEach((box, i) => {
        box.addEventListener('click', evt => {
          this.changeNumber(i, boxes);
          this.changeColor(i, boxes, colors);
        })
      })
    }
  }

  const boxes = document.querySelectorAll('.col');
  const squares = new Squares(boxes, colors);

  boxes.forEach((el, i) => {
    el.innerText = i + 1;
    el.style.backgroundColor = colors[i];
  });