"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const website_1 = require("../src/website");
// Define an array of website objects with name and URL properties
const websites = [
    { name: 'DesiDime', url: 'https://www.desidime.com/' },
    { name: 'pricehistoryapp', url: 'https://pricehistoryapp.com/' },
    { name: 'freekaamaal', url: 'https://freekaamaal.com/' },
    { name: 'freekaamaal', url: 'https://freekaamaal.com/' } // Example of a duplicate object
];
// Create a new unordered list element and add a class to it
const clickWebsiteButton = document.createElement('ul');
clickWebsiteButton.classList.add('website-list');
// For each website object, create a list item element, anchor element with href set to the website URL, and a button element with text and a class
websites.forEach((website) => {
    const item = document.createElement('li');
    item.classList.add('website-item');
    const link = document.createElement('a');
    link.textContent = website.name;
    link.href = website.url;
    item.appendChild(link);
    const button = document.createElement('button');
    button.textContent = 'Visit';
    button.classList.add('website-button');
    item.appendChild(button);
    clickWebsiteButton.appendChild(item);
});
// Find the HTML element with the ID "websites-list" and append the new unordered list element to it
const div = document.getElementById('websites-list');
if (div) {
    div.appendChild(clickWebsiteButton);
}
// Define a function to handle click events on the "Visit" buttons
function handleClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const button = event.target;
        const item = button.parentNode;
        const link = item.querySelector('a');
        const websiteUrl = link === null || link === void 0 ? void 0 : link.href;
        if (websiteUrl) {
            window.open(websiteUrl, 'Open Website'); // Open the website in a new window
        }
    });
}
// Get all the "Visit" buttons on the page and add an event listener to each one that calls the handleClick function when clicked
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
// Example of a class definition
website_1.newFile.getWebsite();
//# sourceMappingURL=main.js.map