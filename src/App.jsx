import "./App.css";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Footer from "./Footer";

function App() {

  const blog = {
    name: "Simon",
    about: "I love coding and learning React.",
    articles: [
      {
        title: "Learning React",
        date: "May 2026",
        preview: "React makes frontend development easier."
      },

      {
        title: "JavaScript Basics",
        date: "May 2026",
        preview: "Understanding JavaScript is important for React."
      },

      {
        title: "My Coding Journey",
        date: "May 2026",
        preview: "Every day I become a better developer."
      }
    ]
  };

  return (
    <div>
      <Header name={blog.name} />

      <About about={blog.about} />

      <ArticleList articles={blog.articles} />

      <Footer />
    </div>
  );
}

export default App;