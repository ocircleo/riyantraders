import { deleteObject, getStorage, ref } from "firebase/storage";
import FireApp from "../FireApp/FireApp";

let storage = getStorage(FireApp);
const deleteImage = async (imgUrl) => {
  if (!imgUrl) {
    return { error: true };
  }
  try {
    let mainUrlPart;
    if (imgUrl) {
      let firstUrlPart = imgUrl.split("?");
      let secondUrlPart = firstUrlPart[0].split("o/");
      mainUrlPart = secondUrlPart[1];
      mainUrlPart = mainUrlPart.replace("%2F", "/");
      mainUrlPart = mainUrlPart.replace("%2f", "/");
    }
    const storageRef = ref(storage, mainUrlPart);
    await deleteObject(storageRef).then(() =>
      console.log("image deleted successfully")
    );
    return { error: false };
  } catch (error) {
    console.log(error.message);
    return { error: true };
  }
};

export { deleteImage };
