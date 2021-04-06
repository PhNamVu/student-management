import FileSaver from 'file-saver'
import JSZip from 'jszip'

export const downloadMultiFiles = (arr: any, zipFileName: string) => {
  const zip = new JSZip()
  let count = 0
  arr = arr.filter(function( element:any ) {
    return element !== undefined;
 });
  arr.forEach((subArr: any) => {
    const folder = zip.folder(subArr.name)
    subArr.info.forEach( async (el: any) => {
      console.log(el)
      const data = await fetch(el.assetUrl).then((r) => r.blob())
      console.log(data)
      folder?.file(el.name, data, { binary: true });
    })
    count++
      if (count === arr.length) {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          FileSaver.saveAs(content, zipFileName)
        })
      }
      console.log(zip)
  })
}

// How the func works
// the "urls" parameter you should put the argument which have a structure like this 
/*
  [ 
    this one is which contribution that you are selecting to zip and download
    { url: artical[0].assetUrl,
      name: artical[0].name
    },
    { url: artical[1].assetUrl,
      name: artical[1].name
    },....
  ]
*/

// and the zipFileName you should put the magazine tilte to it