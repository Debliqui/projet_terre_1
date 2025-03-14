import { useCallback, useEffect, useState } from "react"
import Api from "../../component/Api"
import PropTypes from "prop-types"
import DataContext from "../DataContext"

export default function DataProvider({ children }) {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const getData = useCallback(async () => {
    try {
      setData(await Api.loadData())
    } catch (err) {
      setError(err)
    }
  }, [])
  useEffect(() => {
    if (data) return
    getData()
  })

  return (
    <DataContext.Provider
      value={{
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
