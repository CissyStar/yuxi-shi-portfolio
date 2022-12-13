import { useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { dbRef, storage } from "../../firebase";

const Home = () => {
  const form = useRef([]);

  const submitPortfolio = (event) => {
    event.preventDefault();
    const itemName = form.current[0]?.value;
    const itemDescription = form.current[1]?.value;
    const itemURL = form.current[2]?.value;
    const image = form.current[3]?.files[0];
    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((downloadUrl) => {
          console.log(downloadUrl);
          savePortfolio(downloadUrl);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const savePortfolio = (imageURL) => {
      const portfolioItem = {
        itemName,
        itemDescription,
        itemURL,
        imageURL,
      };
      addDoc(dbRef, portfolioItem)
        .then((documentRef) => {
          form.current.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h3>You are logged in</h3>
      <form ref={form} onSubmit={submitPortfolio}>
        <input type="text" placeholder="Name" />
        <br />
        <textarea type="text" placeholder="Description" />
        <br />
        <input type="text" placeholder="Url" />
        <br />
        <input type="file" placeholder="image" />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
};

export default Home;
