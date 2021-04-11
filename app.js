// Remove statement if you get this error [Uncaught ReferenceError: require is not defined]
// const { default: axios } = require("axios")

const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/.netlify/functions/1-hello')
    const { data } = await axios.get('/api/1-hello')
    result.textContent = data
  } catch (error) {
    console.log(error.response)
    result.textContent = error.response.data
  }
}

fetchData()