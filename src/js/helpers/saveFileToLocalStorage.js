/**
 * 
 * @param {File} file 
 * @param {String} key 
 */
export const saveFileToLocalStorage = (file, key = "file", dataPrefix = "") => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      localStorage.setItem(key, dataPrefix + base64String);
    };
    reader.readAsDataURL(file);
}