import React, { useState } from "react";
/* A react js drag and drop library for getting on drop and on drag data */
import { DndProvider } from "react-dnd";
import Photos from "./Photos";
/* I have used context api because the array of the selected images
needed to be a global state, I would have used redux for bigger 
projects
*/
import { useMyContext } from "../ContextApi/Contexts";
//THIS IS JUST A PRE-REQUISITE PACKAGE OF react-dnd
import { HTML5Backend } from "react-dnd-html5-backend";

const Gallery = ({ photos }) => {
  const [photoData, setPhotoData] = useState(photos);
  const { selectedPhotos, setSelectedPhotos } = useMyContext();

  /* This movePhoto function deletes the image from 
  the array and stores the new array to a constant.
   Secondly it moves the photo to a new index 
  without removing it and updates the state with new order of 
  photo array
 */
  const movePhoto = (fromIndex, toIndex) => {
    const updatedPhotos = [...photoData];
    const [movedPhoto] = updatedPhotos.splice(fromIndex, 1);
    updatedPhotos.splice(toIndex, 0, movedPhoto);
    setPhotoData(updatedPhotos);
  };

  /* function for deleting photo */
  const handleDelete = () => {
    const updatedPhotos = [...photoData];
    selectedPhotos.sort((a, b) => b - a);
    selectedPhotos.forEach((index) => {
      updatedPhotos.splice(index, 1);
    });
    setPhotoData(updatedPhotos);
    setSelectedPhotos([]);
    console.log(selectedPhotos);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center py-4">
        <h2 className="font-bold ">{selectedPhotos.length}</h2>

        <h2 className="px-2">
          {selectedPhotos.length > 1 ? "Images Selected" : "Image Selected"}
        </h2>
      </div>
      {/* Component for rendering photos */}
      <div className="lg:grid lg:grid-cols-6 lg:grid-rows-3 md:flex md:flex-wrap md:justify-center">
        {photoData.map((photo, index) => (
          <div
            className={
              index === 0
                ? "featured row-span-2 col-span-2 lg:ml-28 lg:mt-16 sm:m-10"
                : "photos "
            }
            key={index}
          >
            <Photos movePhoto={movePhoto} url={photo} index={index} />
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button
          className="bg-red-700 rounded-lg py-2 px-5 m-3 text-white"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </DndProvider>
  );
};

export default Gallery;
