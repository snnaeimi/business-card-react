import "./App.css";
import ImagePart from "./components/ImagePart";
import Title from "./components/Title";
import EmailButton from "./components/EmailButton";
import AboutAndInterest from "./components/AboutAndInterest";
import SocialButtons from "./components/SocialButtons";

function App() {
  return (
    <div className="App">
      <ImagePart />
      <Title />
      <EmailButton />
      <AboutAndInterest />
      <SocialButtons />
    </div>
  );
}

export default App;
