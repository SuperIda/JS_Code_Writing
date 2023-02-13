/*
 * @param {Blob} blob
 * @param {String} fileName
 * */
export function downloadFile(blob: any, fileName: string) {
    const nBlob = new Blob([blob]);
    const url = window.URL.createObjectURL(nBlob);
    const $link = document.createElement('a');
    $link.setAttribute('href', url);
    $link.setAttribute('download', `${fileName}`);
    document.body.appendChild($link);
    $link.click();
  }