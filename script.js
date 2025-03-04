AOS.init();

// Scroll to Top Button
let scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};


function message(){
    let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let text = document.getElementById('text').value;
    alert(name+ ' ' + email + ' ' + text);
}


scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

