const thisShouldNotWork = () => {
  console.log(normalTextBox)
}

const initMarkdown = () => {
  const normalTextBox = document.querySelector('#editor')
  thisShouldNotWork()
}

export { initMarkdown };
