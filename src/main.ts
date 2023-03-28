import { newFile } from "../src/website";

// Define an array of website objects with name and URL properties
const websites: { name: string, url: string }[] = [
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
async function handleClick(event: MouseEvent) {
  const button = event.target as HTMLButtonElement;
  const item = button.parentNode as HTMLLIElement;
  const link = item.querySelector('a');
  const websiteUrl = link?.href;
  if (websiteUrl) {
      window.open(websiteUrl, 'Open Website'); // Open the website in a new window
  }
}

// Get all the "Visit" buttons on the page and add an event listener to each one that calls the handleClick function when clicked
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});


// Example of a class definition
newFile.getWebsite();