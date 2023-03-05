/* Variabili Css Dinamiche */
document.addEventListener('DOMContentLoaded', update_dynamic_css_vars);
window.addEventListener('resize', update_dynamic_css_vars);

function update_dynamic_css_vars() {
    document.getElementById('dynamic-css-vars').innerHTML = ':root {--menu-height: ' + document.getElementById('menu').offsetHeight + 'px;}';
}

/* Smooth scroll */
document.querySelectorAll('#menu #section-nav a').forEach(function(anchor) {
   anchor.addEventListener('click', scroll_to_target_section);
});

function scroll_to_target_section(ev) {
    ev.preventDefault();
    const target_id = ev.target.getAttribute('href');
    const target_position = -document.querySelector('main').getBoundingClientRect().top + document.querySelector(target_id).getBoundingClientRect().top;
    window.scroll({
        top: target_position,
        behavior: 'smooth'
    });

}
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('.work iframe');
    for(const iframe of iframes) {
        iframe.onload = function () {
            iframe.contentWindow.document.onclick = function() {
                const url = iframe.getAttribute('src');
                window.open(url);
            };
        }
    }
    
});


function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let time_fraction = (time - start) / duration;
      if (time_fraction  > 1) time_fraction  = 1;
  
      // calculate the current animation state
      let progress = timing(time_fraction)
  
      draw(progress); // draw it
  
      if (time_fraction  < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}
let el = document.querySelector('.outer-figure img');
document.addEventListener('DOMContentLoaded', function() {
    animate({
        duration: 1000,
        timing(time_fraction) {
          return Math.sqrt(time_fraction);
        },
        draw(progress) {
            //let el = document.querySelector('.outer-figure img');
            const new_pos = -(100-100*progress);
            const new_opacity = progress;
            el.style.transform = 'translateX('+new_pos+ '%)';
            el.style.opacity = new_opacity;
        }
    });
});