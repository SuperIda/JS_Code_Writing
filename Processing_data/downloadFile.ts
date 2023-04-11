
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


  // const elink: any = document.createElement('a');
  //       elink.download = `${name}.xlsx`;
  //       elink.style.display = 'none';
  //       const blob: any = new Blob([res], {
  //         type: 'application/vnd.ms-excel;charset=UTF-8',
  //       });
  //       elink.href = URL.createObjectURL(blob);
  //       document.body.appendChild(elink);
  //       elink.click();
  //       document.body.removeChild(elink);