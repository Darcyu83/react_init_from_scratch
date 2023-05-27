export async function getImageDataUrl(image: File) {
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", async () => {
      resolve(fileReader.result);
    });
    fileReader.addEventListener("error", (err) => {
      reject(fileReader.error);
    });

    fileReader.readAsDataURL(image);
  });
}
export async function getImagesDataUrls(images: File[]) {
  const dataUrlPromises = images.map((file, idx) => {
    return getImageDataUrl(file);
  });

  return Promise.all(dataUrlPromises);
}
