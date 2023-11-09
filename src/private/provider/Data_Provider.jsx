import { useEffect } from "react";
import { createContext, useState } from "react";

export const dataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Data_Provider = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const [initialData, setInitaialData] = useState([])
  let searchData = {};
  const setSearchData = (a, b) => {
    searchData.region = a;
    searchData.city = b;
    setTimeout(() => {
      searchData = {}
    }, 10000)
  }
  useEffect(() => {
    fetch(`http://localhost:3000/user/productSearch?city=&region=&price=0&skip=0`).then(res => res.json()).then(d => { setInitaialData(d) })
  }, [])

  const data = { navState, setNavState, searchData, setSearchData, initialData };


  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default Data_Provider;
