const getDataFromAPi = () => {
    const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/phones';
    return fetch(url).then((response) => response.json());
  };
  
  export default getDataFromAPi;