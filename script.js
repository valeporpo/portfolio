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