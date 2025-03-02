import axios from 'axios'; 

async function getNewsSections(){
  const response = await axios.get('https://ok.surf/api/v1/news-section-names')
  return  response.data; 
}

const newsSections = await getNewsSections()
  .then(data => data).catch(err => console.log(err));

console.log(newsSections);