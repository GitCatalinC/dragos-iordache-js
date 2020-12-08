const img = document.querySelector('.image');
const paragraph = img.parentElement;
const loaded = 'imaginea s-a incarcat';

img.addEventListener('load', () => {
  const messageContainer = document.createElement('span');
  messageContainer.innerText = loaded;

  paragraph.append(loaded);
});
