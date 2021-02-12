import Sortable from 'sortablejs'

const initSortable = () => {
  const options = {
    invertSwap: true,
    ghostClass: "sortable-ghost",
    animation: 200,
    easing: "cubic-bezier(0.11, 0, 0.5, 0)"
  }
  Sortable.create(results, options)
}

export { initSortable };
