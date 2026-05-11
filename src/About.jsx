import blogLogo from "./assets/react.svg";

function About(props) {
  return (
    <aside>
      <h2>About Me</h2>

      <img src={blogLogo} alt="blog logo" />

      <p>{props.about}</p>
    </aside>
  );
}

export default About;