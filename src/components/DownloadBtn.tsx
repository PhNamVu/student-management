import React from 'react'
import { download } from '../helper/download'
import PrimaryButton from './shared/button/PrimaryBtn'

export const DownloadBtn = () => {
    const urls = [
        { 
            url: 'https://firebasestorage.googleapis.com/v0/b/student-management-e3693.appspot.com/o/magazines%2F9bced9e9-af53-4d38-96c2-6217fab338b3%2Fs8gmfbPhIVfSIFcVnjbbm-Proposal.docx?alt=media&token=727efe1c-1100-4ba4-9683-25b09f6ea881',
            name: 'Proposal.docx'
        },
        { 
            url: 'https://firebasestorage.googleapis.com/v0/b/student-management-e3693.appspot.com/o/magazines%2F9bced9e9-af53-4d38-96c2-6217fab338b3%2FvVC58VKwMtIu4sLOWXnBb-test.docx?alt=media&token=ba005256-d822-41af-adc9-3c0088fb9376',
            name:'test.docx'
        }
    ]
    return(
        <PrimaryButton type="button" onClick={()=>download(urls, 'Art')}>Download</PrimaryButton>
    )
}