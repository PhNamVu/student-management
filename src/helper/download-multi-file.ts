import FileSaver from 'file-saver'
import JSZip from 'jszip'

export const downloadMultiFiles = (urls: any, zipFileName: string) => {
  const zip = new JSZip()
  let count = 0

  urls.forEach(async (item: any) => {
    let data = await fetch(item.url).then((r) => r.blob())
    try {
      zip.file(item.name, data, { binary: true })
      count++
      if (count === urls.length) {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          FileSaver.saveAs(content, zipFileName)
        })
      }
    } catch (e) {
      console.log('error', e)
    }
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