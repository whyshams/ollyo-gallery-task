import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useMyContext } from "../ContextApi/Contexts";
import { RiVerifiedBadgeLine } from "react-icons/ri";
const Photos = ({ movePhoto, url, index }) => {
  const { selectedPhotos, setSelectedPhotos } = useMyContext();

  /* the below code uses the useDrag and useDrop 
  hook, provided by the react-dnd library. It helps 
  us to get the drag and drop data and which we can use to 
  specify how the drag and drop should look and work.
  */

  const [{ isDragging }, ref] = useDrag({
    type: "PHOTO",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: "PHOTO",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        movePhoto(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  /* Function for toggling selection of photos */

  const selectUnselect = (index) => {
    if (selectedPhotos.includes(index)) {
      setSelectedPhotos(selectedPhotos.filter((i) => i !== index));
    } else {
      setSelectedPhotos([...selectedPhotos, index]);
    }
  };

  return (
    <div
      ref={(node) => {
        ref(drop(node));
      }}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img
        onClick={() => selectUnselect(index)}
        src={url}
        alt={`Photo ${index}`}
        className={
          selectedPhotos.includes(index)
            ? "scale-125 opacity-70 truncate   transition duration-150 ease-out"
            : index === 0 && selectedPhotos.includes(index)
            ? "scale-125 truncate  transition duration-150 ease-out"
            : "transition duration-150 ease-out"
        }
      />
    </div>
  );
};

export default Photos;
