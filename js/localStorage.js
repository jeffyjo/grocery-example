// Get all items
function getAll() {
  return Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))
}

// get from localStorage
function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

// Set single item
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// Remove a single item from storage
function removeItem(key) {
  return localStorage.removeItem(key)
}

// Remove all items
function clearStorage() {
  localStorage.clear()
}