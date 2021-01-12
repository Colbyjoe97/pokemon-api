import React , {useState, useEffect} from 'react';



const News = () => {

    const [news, setNews] = useState([])
    
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448")
            .then(newsdata => {
                return newsdata.json()
            })
            .then(newsdata => {
                console.log("logging the new data below")
                console.log(newsdata.articles)
                setNews(newsdata.articles)

            } )
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    
    const getNews = (e)=> {

        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448")
            .then(newsdata => {
                return newsdata.json()
            })
            .then(newsdata => {
                console.log("logging the new data below")
                console.log(newsdata.articles)
                setNews(newsdata.articles)

            } )
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className = "container">
            <div className="jumbotron">

                <h1>Top Headlines for today!</h1>
                <button className = "mb-3"onClick= {getNews}>Click for some news!</button>
                {
                    news.map((newsObj, i) => {
                        return <div className = "card p-2 mb-2"key= {i}>
                            <h3>{newsObj.title}</h3>
                            <p>{newsObj.description}</p>
                            </div>
                    })
                }
            </div>

            
        </div>
    );
};



export default News;