var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const websites = [
    { name: 'DesiDimess', url: 'https://www.desidime.com/' },
    { name: 'pricehistoryapp', url: 'https://pricehistoryapp.com/' },
    { name: 'freekaamaal', url: 'https://freekaamaal.com/' }
];
const clickWebsiteButton = document.createElement('ul');
clickWebsiteButton.classList.add('website-list');
websites.forEach((website) => {
    const item = document.createElement('li');
    item.classList.add('website-item');
    const link = document.createElement('a');
    link.textContent = website.name;
    link.href = website.url;
    item.appendChild(link);
    const button = document.createElement('button');
    button.textContent = 'Go';
    button.classList.add('website-button');
    item.appendChild(button);
    clickWebsiteButton.appendChild(item);
});
const div = document.getElementById('websites-list');
if (div) {
    div.appendChild(clickWebsiteButton);
}
function handleClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const button = event.target;
        const item = button.parentNode;
        const link = item.querySelector('a');
        const websiteUrl = link === null || link === void 0 ? void 0 : link.href;
        if (websiteUrl) {
            window.open(websiteUrl, 'Open Website');
        }
    });
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
//# sourceMappingURL=main.js.map