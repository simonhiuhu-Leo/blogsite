import Article from "./Article";

function ArticleList(props) {
  return (
    <div>
      <h2>Articles</h2>

      {props.articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </div>
  );
}

export default ArticleList;