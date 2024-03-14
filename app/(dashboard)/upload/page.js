"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [file, setFile] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputFile = useRef(null);
  const handleButtonClick = (event) => {
    event.preventDefault();
    inputFile.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Handle the file upload here
  };

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      console.log("resdata", resData);
      setCid(resData.IpfsHash);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const data = [
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Liam James",
      email: "liamjames@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Jenny Swift",
      email: "jenny@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
      name: "Richard Roe",
      email: "richardroe@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/91.jpg",
      name: "Mary Johnson",
      email: "maryjohnson@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
      name: "James Brown",
      email: "jamesbrown@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/93.jpg",
      name: "Patricia Williams",
      email: "patriciawilliams@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/94.jpg",
      name: "Robert Jones",
      email: "robertjones@example.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/95.jpg",
      name: "Jennifer Davis",
      email: "jenniferdavis@example.com",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex bg-white rounded-md gap-4 shadow-lg p-3"
          >
            <img
              className="border rounded-lg border-cyan-100 border-spacing-4"
              src={item.avatar}
              alt=""
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-md font-medium">{item.name}</p>
                <p>{item.email}</p>
              </div>
              <div>
                <button
                  onClick={handleButtonClick}
                  className="mb-2 hover:text-black ml-40 bg-blue-500 btn text-white"
                >
                  Add Report
                </button>
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <main className="w-full min-h-screen m-auto flex flex-col justify-center items-center">
    //   <input type="file" id="file" ref={inputFile} onChange={handleChange} />
    //   <button disabled={uploading} onClick={() => inputFile.current.click()}>
    //     {uploading ? "Uploading..." : "Upload"}
    //   </button>
    // </main>
  );
}
