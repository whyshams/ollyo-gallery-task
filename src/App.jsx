import "./App.css";
import Gallery from "./Components/Gallery";

function App() {
  //the below array is consisted with the photos provided by Oyollo
  const photos = [
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-1.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-2.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-3.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-4.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-5.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-6.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-7.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-8.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-9.webp",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-10.jpeg",
    "https://raw.githubusercontent.com/whyshams/ollyo-gallery-task/main/src/assets/images/image-11.jpeg",
  ];
  return (
    <>
      <div className="card">
        <Gallery photos={photos} />
      </div>
    </>
  );
}

export default App;
