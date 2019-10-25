(async () => {
  // Get groceryList
  const groceryList =  document.querySelector('#groceryList')
  const groceryItemTemplate = document.querySelector('#groceryItemTemplate').innerHTML
  
  if (groceryList.children.length > 0) return

  // Fetch groceries
  const groceries = await fetch('./js/grocery.json')
    .then(res => res.json())

  // Append grocieries
  groceries.forEach(item => {
    let groceryItemCopy = groceryItemTemplate
    groceryItemCopy = groceryItemCopy.replace(/\{\{id\}\}/gi, item.id)
    groceryItemCopy = groceryItemCopy.replace(/\{\{img\}\}/gi, item.image)
    groceryItemCopy = groceryItemCopy.replace(/\{\{title\}\}/gi, item.title)
    groceryList.insertAdjacentHTML('beforeend', groceryItemCopy)
  })
})()

function addToBasket(el, id) {
  const item = getItem(id)

  if (item) {
    setItem(id, {...item, count : item.count + 1})
    return
  }

  const { title, img } = document.querySelector(`[data-id="${id}"]`).dataset
  let groceryObj = {
    id,
    title,
    img,
    count: 1
  }
  setItem(id, groceryObj)
}