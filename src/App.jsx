import "./App.css";
import Gallery from "./Components/Gallery";

function App() {
  //the below array is consisted with the photos provided by Oyollo
  const photos = [
    "/src/assets/images/image-1.webp",
    "/src/assets/images/image-2.webp",
    "/src/assets/images/image-3.webp",
    "/src/assets/images/image-4.webp",
    "/src/assets/images/image-5.webp",
    "/src/assets/images/image-6.webp",
    "/src/assets/images/image-7.webp",
    "/src/assets/images/image-8.webp",
    "/src/assets/images/image-9.webp",
    "/src/assets/images/image-10.jpeg",
    "/src/assets/images/image-11.jpeg",
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
