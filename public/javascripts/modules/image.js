export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve([
      reader.result,
      file,
    ]);
    reader.onerror = error => reject(error);
  });
}

export function setPreviewImage(imgSelector, base64img) {
  const previewImg = document.querySelector(imgSelector);
  previewImg.src = base64img;
}

export async function getImageFromFileInput(fileInput) {
  const file = fileInput.files[0];
  const base64 = await getBase64(file)
    .then(data => data)
    .catch((error) => {
      console.error(error);
    });
  return base64;
}
