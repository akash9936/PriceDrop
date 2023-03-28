var websites = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'GitHub', url: 'https://www.github.com' }
];
var clickWebsiteButton = document.createElement('ul');
clickWebsiteButton.classList.add('website-list');
websites.forEach(function (website) {
    var item = document.createElement('li');
    item.classList.add('website-item');
    var link = document.createElement('a');
    link.textContent = website.name;
    link.href = website.url;
    item.appendChild(link);
    var button = document.createElement('button');
    button.textContent = 'Go';
    button.classList.add('website-button');
    item.appendChild(button);
    clickWebsiteButton.appendChild(item);
});
var div = document.getElementById('websites-list');
if (div) {
    div.appendChild(clickWebsiteButton);
}
function handleClick(event) {
    var button = event.target;
    var item = button.parentNode;
    var link = item.querySelector('a');
    var websiteUrl = link === null || link === void 0 ? void 0 : link.href;
    if (websiteUrl) {
        window.open(websiteUrl, 'Open Website');
    }
}
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});
var div1 = document.getElementById('FoolButton');
if (div1) {
    window.open("facebook.com", 'Open Website');
}
