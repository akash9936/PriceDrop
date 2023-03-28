
const websites: { name: string, url: string }[] = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'GitHub', url: 'https://www.github.com' }
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
  
  function handleClick(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const item = button.parentNode as HTMLLIElement;
    const link = item.querySelector('a');
    const websiteUrl = link?.href;
    if (websiteUrl) {
      window.open(websiteUrl, 'Open Website');
    }
  }
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });



  const div1 = document.getElementById('FoolButton');
  if (div1) {
    window.open("facebook.com", 'Open Website');
  }
