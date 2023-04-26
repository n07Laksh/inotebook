
const About = (props) => {
  const html = (
    <>
      <h1>Hello Ji</h1>
      <button onClick={() => props.showAlert("Hello This is the message", "success")}>Click Me!</button>
    </>
  );
  return <>{html}</>;
};

export default About;
