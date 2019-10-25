;(async () => {
  // Get items from localStorage
  const items = await getAll()

  const basketList = document.querySelector('#basketList')
  const basketItemTemplate = document.querySelector('#basketItemTemplate').innerHTML

  items.forEach(item => {
    let copy = basketItemTemplate
    copy = copy.replace(/\{\{id\}\}/gi, item.id)
    copy = copy.replace(/\{\{title\}\}/gi, item.title)
    copy = copy.replace(/\{\{img\}\}/gi, item.img)
    copy = copy.replace(/\{\{count\}\}/gi, item.count)

    basketList.insertAdjacentHTML('beforeend', copy)
  })
})()

function updateCount(button, id, isIncrementing) {
  const el = document.querySelector(`[data-id="${id}"]`)
  const item = getItem(id)
  let newCount = isIncrementing ? item.count + 1 : item.count - 1
  setItem(id, {...item, count: newCount})
  updateListItem(el, newCount)
}

function updateListItem(el, newCount) {
  if (newCount <= 0) {
    removeFromList(el)
    return
  }

  const countEl = el.querySelector('[data-ref="count"]')
  let templateText = countEl.dataset.text
  templateText = templateText.replace(/\%count\%/gi, newCount)
  countEl.innerHTML = templateText
}

function removeFromList(el) {
  const { id } = el.dataset
  document.querySelector('#basketList').removeChild(el)
  removeItem(id)
}