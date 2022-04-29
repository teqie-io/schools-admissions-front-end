import React from 'react'
import { useDropzone } from 'react-dropzone'

import { illustrations } from '../../../../../static/image'
import { doc, pdf } from '../image'

export default function Accept() {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: '.pdf,.doc,.docx'
  })

  const files = acceptedFiles.map((file) => {
    const date = JSON.stringify(file.lastModifiedDate).substr(1, 10) + ' By Mrs. Meena Atluri'
    const typeFile = file.path.search('pdf') !== -1 ? pdf : doc

    return (
      <li key={file.path} className='flex items-center mt-2'>
        <img src={typeFile} alt={typeFile} className='w-10 h-10 mr-3' />
        <div>
          <p className='text-sm text-main-black font-semibold mb-1'>{file.path}</p>
          <p className='text-second-gray text-10px'>{date}</p>
        </div>
      </li>
    )
  })

  return (
    <div className='container-dropzone'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img src={illustrations} alt='illustrations' className='w-32 h-32 2xl:w-52 2xl:h-52' />
        <div className='ml-5'>
          <p className='font-semibold text-xl mb-2'>
            {isDragActive ? 'Please drop PDF, DOC, DOCX' : 'Scan and Upload Test Results'}
          </p>
          <p className='text-sm text-second-gray'>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      {acceptedFiles.length > 0 && (
        <aside>
          <h4 className='text-base font-semibold text-main-black mt-5'>Uploaded Files</h4>
          <ul>{files}</ul>
        </aside>
      )}
    </div>
  )
}
