$(document).ready(function() {


    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA ' },
        to: { color: 'rgb(255, 0, 0)' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 1000);
            circle.setText(value);
        }

    });

     // Progress bar
     let containerB = document.getElementById("circleB");
     let circleB = new ProgressBar.Circle(containerB, {
 
         color: '#64DAF9',
         strokeWidth: 8,
         duration: 1600,
         from: { color: '#AAA' },
         to: { color: 'rgb(118, 184, 53) ' },
 
         step: function(state, circle) {
             circle.path.setAttribute('stroke', state.color);
 
             let value = Math.round(circle.value() * 2);
             circle.setText(value + " horas");
         }
 
     });
 
     // Progress bar
     let containerC = document.getElementById("circleC");
     let circleC = new ProgressBar.Circle(containerC, {
 
         color: '#64DAF9',
         strokeWidth: 8,
         duration: 2000,
         from: { color: '#AAA' },
         to: { color: 'rgb(62, 62, 210);' },
 
         step: function(state, circle) {
             circle.path.setAttribute('stroke', state.color);
 
             let value = Math.round(circle.value() * 100);
             circle.setText(value + "%");
         }
 
     });

     // iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 1000) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);

            stop = 1;

        }

    });
});