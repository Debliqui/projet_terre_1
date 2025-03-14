const Api = {
  loadData: async () => {
    const json = await fetch("/assets/data/article-content.json")
    return json.json()
  },
}

export default Api
