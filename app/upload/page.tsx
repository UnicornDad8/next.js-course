"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}
      <CldUploadWidget
        uploadPreset="a8ihhzc9"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info?.public_id);
        }}
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
      >
        {({ open }) => {
          function handleOpen(e) {
            e.preventDefault();
            open();
          }
          return (
            <button className="btn btn-primary" onClick={handleOpen}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
