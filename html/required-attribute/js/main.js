const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = form.querySelector('input[custom-required]');
  const type = input.getAttribute('type');

  if (type === 'text' && input.value === '') {
    const floatingErrorElement = document.createElement('div');

    const positions = input.getBoundingClientRect();

    floatingErrorElement.style.top = (positions.height + 8) + 'px';
    floatingErrorElement.style.left = '4px';

    floatingErrorElement.classList.add('float-required-error');

    const floatingErrorIconContainerElement = document.createElement('span');
    const floatingErrorIconElement = document.createTextNode('!');
    floatingErrorIconContainerElement.appendChild(floatingErrorIconElement);

    const floatingErrorTextElement = document.createTextNode('Fill out this field');

    floatingErrorElement.appendChild(floatingErrorIconContainerElement);
    floatingErrorElement.appendChild(floatingErrorTextElement);
    input.insertAdjacentElement('afterend', floatingErrorElement);
    input.focus();

    input.addEventListener('blur', (e) => {
      floatingErrorElement.remove();
    });

    return;
  }

  form.submit();
});
