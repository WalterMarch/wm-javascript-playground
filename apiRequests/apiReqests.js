import axios from 'axios'; 

async function getNewsSections(){
  const response = await axios.get("https://ok.surf/api/v1/news-section-names");
  return  response.data; 
}

async function fetchNews(section){
  const postBody = {"sections":[section]};
  const response = await axios.post(
    "https://ok.surf/api/v1/news-section", 
    postBody
  );
  const output = response.data;
  return output;
}

const newsSections = await getNewsSections()
  .then(data => data).catch(err => console.log(err));

const randomNewsSection = newsSections[Math.floor(Math.random() * newsSections.length)];

const news = await fetchNews(randomNewsSection)
  .then(data => data).catch(err => console.log(err));

console.log(news);