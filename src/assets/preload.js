const { USER, SHELL, PWD } = process.env;
console.log('PRELOAD SCRIPT', { USER, SHELL, PWD });
window.addEventListener('load', (event) => {
  let picker = document.getElementById('picker');
  let list = document.getElementById('list');
  picker.addEventListener('change', e => {
    list.innerHTML = '';
    for (let file of Array.from(e.target['files'])) {
      let item = document.createElement('li');
      item.textContent = file.webkitRelativePath;
      item.addEventListener('click', () => {
        handleClick(file);
      });
      list.appendChild(item);
    }
  });
});

function handleClick(file) {
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = event => {
    console.log({
      file: file.webkitRelativePath,
      content: event.target.result.substring(0, 100),
    });
  };
  reader.onerror = event => {
    console.log(event);
  };
}
