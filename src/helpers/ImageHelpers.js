/**
 * 檢查是否有 Image，沒有塞一張預設照片
 *
 * @param {string} imgUrl - 圖片路徑
 */
export const checkImage = (imgUrl) => {
  const img = imgUrl ? { uri: imgUrl } : require("../images/yeo-khee-vcwI8Rnj2Mw-unsplash.jpg");
  return img;
}
