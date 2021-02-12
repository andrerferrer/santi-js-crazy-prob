import MarkdownIt from 'markdown-it'


const translate = () => {
  // console.log(normalTextBox)
  const md = new MarkdownIt;
  const result = md.render(normalTextBox.value);
  markdownTextBox.innerText = result
}

const initMarkdown = () => {
  // Selections
  const normalTextBox = document.querySelector('#editor')
  const markdownTextBox = document.querySelector('#preview')

  if (normalTextBox && markdownTextBox) {
    normalTextBox.addEventListener('keyup', translate)
  }
}

export { initMarkdown };
