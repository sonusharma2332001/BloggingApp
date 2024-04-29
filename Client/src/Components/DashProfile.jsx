import { Alert, Avatar, Button, TextInput } from "flowbite-react";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ref,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import {app} from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.User);
  const [image, set_image] = useState(null);
  const [imageUrl, set_imageUrl] = useState(null);
  const filePickerRef = useRef();
  const [ImageUplodProcess, setImageUploadProcess] = useState(null);
  const [imageuploadError, setimageuploadError] = useState(null);

  console.log(ImageUplodProcess,imageuploadError);

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      set_image(file);
      set_imageUrl(URL.createObjectURL(file));
    }
  };

  const UploadImage = () => {
    setimageuploadError(null)
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProcess(progress.toFixed(0));
      },
      (error) => {
        setimageuploadError(
          "Could not upload image(file must be less than 2MB)"+error);
          setImageUploadProcess(null)
          set_image(null);
          set_imageUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
          set_imageUrl(DownloadURL);
        });
      }
    );
  };

  useEffect(() => {
    if (image) {
      UploadImage();
    }
  }, [image]);
  return (
    <div className="max-w-lg p-3 w-full flex flex-col m-auto">
      <h1 className="my-7 text-center font-semibold text-3xl">My Profile</h1>
      <form className="flex flex-col gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleimage}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {
            ImageUplodProcess && (
              <CircularProgressbar value={ImageUplodProcess||0} text={`${ImageUplodProcess}%`}
              strokeWidth={5}
              styles={{
                root:{
                  width:'100%',
                  height:'100%',
                  position:'absolute',
                  top:0,
                  left:0,
                },
                path:{
                  stroke:`rgba(62,152,199,${ImageUplodProcess/100})`,
                }

              }}
              />    
            )
          }
          <img
            src={imageUrl ? imageUrl : currentUser.profileImage}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        {imageuploadError && <Alert color='failure'>{imageuploadError}</Alert>}
        <TextInput
          defaultValue={currentUser.username}
          placeholder="User Name"
          id="username"
          type="text"
        ></TextInput>
        <TextInput
          defaultValue={currentUser.email}
          placeholder="User Email Id"
          id="email"
          type="email"
        ></TextInput>
        <TextInput
          placeholder="password"
          id="password"
          type="password"
        ></TextInput>
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-2 cursor-pointer">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default DashProfile;
