/* eslint-disable no-unused-vars */
import FileSaver from 'file-saver'
import JSZip from 'jszip'


export const downloadMultiFiles = async (arr: any, zipFileName: string) => {
  const zip = new JSZip()

  arr = arr.filter(function( element:any ) {
    return element !== undefined;
  })
  try {
    let count = 0
    await arr.forEach(async (subArr: any) => {
      const folders:any = zip.folder(subArr.name)
      for (const el of subArr.info) {
        const data = await fetch(el.assetUrl).then((r) => r.blob())
        folders.file(el.name, data, { binary: true })
      }
      count++
      if (count == arr.length) {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          FileSaver.saveAs(content, zipFileName)
        })
      }
    })
  } catch (error) {
    console.log(error)
  }
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