import React, { useState, useRef, useEffect } from 'react'
import SunEditor from 'suneditor-react'
import plugins from 'suneditor/src/plugins'

import '../../static/styles/suneditor.min.css'
import './editor.scss'

export default function Editor({
  //Render subject input field
  subject = false,
  colorsButton = false,
  content = null,

  //Header block
  templateButton = true,
  htmlEditorButton = true,
  headerShow = true,
  headerTitle = 'Content',

  linkButton = false,
  previewContent = true
}) {
  const [preview, setPreview] = useState(null)
  const [template, setTemplate] = useState(null)

  const editor = useRef()

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor
  }

  const handleChange = (content) => {
    setPreview(content)
  }

  const changeTemplateHandler = (e) => {
    let selected = e.target.files
    if (selected && selected[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        setTemplate(e.target.result)
      }
      reader.readAsDataURL(selected[0])
    }
  }

  const fileTemplate = (file) => {
    const [text, setText] = useState(null)

    fetch(file)
      .then((response) => response.text())
      .then((textContent) => {
        setText(textContent)
      })

    return text || null
  }

  const codeViewButton = document.getElementsByClassName('_se_command_codeView')
  const boldButton = document.getElementsByClassName('_se_command_bold')
  const underlineButton = document.getElementsByClassName('_se_command_underline')
  const alignButton = document.getElementsByClassName('se-btn-align')

  const toggleCodeView = () => {
    codeViewButton[0].click()
  }

  useEffect(() => {
    if (codeViewButton && codeViewButton[0]) codeViewButton[0].style.display = 'none'
    if (boldButton && boldButton[0]) boldButton[0].style.borderLeft = '1px solid #D9E6E9'
    if (alignButton && alignButton[0]) alignButton[0].style.borderRight = '1px solid #D9E6E9'
    if (underlineButton && underlineButton[0]) underlineButton[0].style.borderRight = '1px solid #D9E6E9'
  }, [])

  return (
    <React.Fragment>
      {headerShow && (
        <div
          className='text-base font-bold mt-5 mb-5 flex items-center justify-between'
          style={{ color: 'rgba(0, 0, 0, 0.6)', width: '45rem' }}
        >
          {headerTitle}
          <div className='flex items-center'>
            {templateButton && (
              <div className='flex items-center justify-center cursor-pointer'>
                <input
                  className='hidden'
                  type='file'
                  id='template-upload'
                  name='template-upload'
                  accept='*'
                  onChange={changeTemplateHandler}
                />
                <label
                  htmlFor='template-upload'
                  className='w-40 h-8 border rounded-lg text-13px flex items-center justify-center cursor-pointer'
                >
                  <TemplateSvg />
                  Load Template
                </label>
              </div>
            )}
            {htmlEditorButton && (
              <div
                className='w-40 ml-3.5 h-8 border rounded-lg flex items-center cursor-pointer justify-center'
                onClick={() => toggleCodeView()}
              >
                <label className='text-13px flex items-center justify-center cursor-pointer'>
                  <EditHtml />
                  HTML Editor
                </label>
              </div>
            )}
          </div>
        </div>
      )}
      {subject && <input className='editor-subject' placeholder='Subject' type='text' />}
      <div className='editor-container'>
        <SunEditor
          getSunEditorInstance={getSunEditorInstance}
          onChange={handleChange}
          name='my-editor'
          setContents={template === null ? fileTemplate(template) && (content || '') : fileTemplate(template)}
          placeholder='Please type here...'
          setOptions={editorOptions(colorsButton, linkButton)}
        />
        <div id='someContainer' className='sun-editor' />
      </div>
      <p className='text-base font-bold min-h-full mb-5' style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        Preview
      </p>
      {previewContent && <div className='preview-content' dangerouslySetInnerHTML={{ __html: preview }} />}
    </React.Fragment>
  )
}

const editorOptions = (colors, link) => {
  return {
    width: '44.125rem',
    height: '18.75rem',
    plugins: plugins,
    buttonList: [
      ['font', 'fontSize'],
      colors && ['fontColor'],
      ['bold', 'italic', 'underline'],
      ['list', 'align'],
      ['image', 'table'],
      link && ['link'],
      ['codeView']
    ],
    alignItems: ['right', 'center', 'left'],
    icons: {
      bold: "<svg width='9' height='12' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.266147 12H4.47069C7.22069 12 8.35706 10.6591 8.35706 8.90909C8.35706 7.06818 7.08433 6.06818 6.01615 6V5.88636C7.01615 5.61364 7.90251 4.95455 7.90251 3.45455C7.90251 1.75 6.76615 0.363636 4.33433 0.363636H0.266147V12ZM1.67524 10.75V6.70455H4.53887C6.0616 6.70455 7.01615 7.72727 7.01615 8.90909C7.01615 9.93182 6.3116 10.75 4.47069 10.75H1.67524ZM1.67524 5.47727V1.61364H4.33433C5.87978 1.61364 6.5616 2.43182 6.5616 3.45455C6.5616 4.68182 5.5616 5.47727 4.28887 5.47727H1.67524Z' fill='#919EAB' /></svg>",
      italic:
        "<svg width='9' height='12' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M5.50159 11.6748L5.40491 12H0.50061L0.623657 11.6748C1.11584 11.6631 1.44104 11.6221 1.59924 11.5518C1.85706 11.4521 2.04749 11.3145 2.17053 11.1387C2.36389 10.8633 2.56311 10.3711 2.76819 9.66211L4.84241 2.47266C5.01819 1.875 5.10608 1.42383 5.10608 1.11914C5.10608 0.966797 5.06799 0.837891 4.99182 0.732422C4.91565 0.626953 4.79846 0.547852 4.64026 0.495117C4.48792 0.436523 4.18616 0.407227 3.73499 0.407227L3.84045 0.0820312H8.44592L8.34924 0.407227C7.97424 0.401367 7.69592 0.442383 7.51428 0.530273C7.25061 0.647461 7.04846 0.814453 6.90784 1.03125C6.77307 1.24805 6.59729 1.72852 6.38049 2.47266L4.31506 9.66211C4.12756 10.3242 4.03381 10.7461 4.03381 10.9277C4.03381 11.0742 4.06897 11.2002 4.13928 11.3057C4.21545 11.4053 4.33264 11.4844 4.49084 11.543C4.65491 11.5957 4.99182 11.6396 5.50159 11.6748Z' fill='#919EAB'/></svg> ",
      underline:
        "<svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M8.17595 0.363636H9.58504V8.06818C9.58504 8.86364 9.39754 9.57386 9.02254 10.1989C8.65133 10.8201 8.12671 11.3106 7.44868 11.6705C6.77064 12.0265 5.97519 12.2045 5.06231 12.2045C4.14943 12.2045 3.35398 12.0265 2.67595 11.6705C1.99792 11.3106 1.4714 10.8201 1.0964 10.1989C0.72519 9.57386 0.539584 8.86364 0.539584 8.06818V0.363636H1.94868V7.95455C1.94868 8.52273 2.07368 9.02841 2.32368 9.47159C2.57368 9.91098 2.92974 10.2576 3.39186 10.5114C3.85777 10.7614 4.41458 10.8864 5.06231 10.8864C5.71004 10.8864 6.26686 10.7614 6.73277 10.5114C7.19868 10.2576 7.55474 9.91098 7.80095 9.47159C8.05095 9.02841 8.17595 8.52273 8.17595 7.95455V0.363636Z' fill='#919EAB'/><path d='M-0.869507 15.1818H10.9941V16.2727H-0.869507V15.1818Z' fill='#919EAB' /></svg>",
      align_left: `<svg width="17" height="17" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.06018 18H18.0602M3.06018 6H21.0602H3.06018ZM3.06018 12H13.0602H3.06018Z" stroke="#8C9094" stroke-width="2" stroke-linecap="round"/>
      </svg>
      `,
      font_color: `<svg width="25" height="24" viewBox="3 4 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0401 2.56013C12.9761 2.36393 12.8509 2.19337 12.683 2.07341C12.515 1.95345 12.3131 1.89039 12.1067 1.89346H12.0601C11.8515 1.8875 11.6465 1.94922 11.4759 2.06938C11.3053 2.18955 11.1781 2.36171 11.1134 2.56013L5.67341 14.3735C5.61288 14.4958 5.58096 14.6303 5.58008 14.7668C5.58008 14.9436 5.65032 15.1132 5.77534 15.2382C5.90036 15.3632 6.06993 15.4335 6.24674 15.4335C6.40602 15.4368 6.56213 15.3886 6.69185 15.2962C6.82157 15.2037 6.91798 15.0718 6.96674 14.9201L8.35341 11.8201H15.6867L17.0734 14.8801C17.1281 15.0366 17.2285 15.173 17.3616 15.2717C17.4948 15.3703 17.6545 15.4267 17.8201 15.4335C17.9146 15.4335 18.0083 15.4148 18.0956 15.3787C18.183 15.3425 18.2623 15.2894 18.3292 15.2226C18.3961 15.1557 18.4491 15.0763 18.4853 14.989C18.5215 14.9016 18.5401 14.808 18.5401 14.7135C18.5328 14.5821 18.5012 14.4532 18.4467 14.3335L13.0401 2.56013ZM8.96674 10.4735L12.0601 3.66013L15.1267 10.4735H8.96674Z" fill="#8C9094"/>
      <path d="M20.0999 16.6665H4.09993C3.36356 16.6665 2.7666 17.2635 2.7666 17.9998V20.6665C2.7666 21.4029 3.36356 21.9998 4.09993 21.9998H20.0999C20.8363 21.9998 21.4333 21.4029 21.4333 20.6665V17.9998C21.4333 17.2635 20.8363 16.6665 20.0999 16.6665Z" fill="#663174"/>
      </svg>
      `,
      link: `<svg width="18" height="20" viewBox="3 4 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.9998C8.77086 22.0781 6.08724 19.5287 6 16.2998V6.12977C6.06003 3.79573 7.99573 1.94944 10.33 1.99977C12.6681 1.94384 14.61 3.79174 14.67 6.12977V16.3098C14.5837 17.7183 13.4162 18.8164 12.005 18.8164C10.5938 18.8164 9.42632 17.7183 9.34 16.3098V6.91977C9.34 6.36749 9.78772 5.91977 10.34 5.91977C10.8923 5.91977 11.34 6.36749 11.34 6.91977V16.3098C11.3813 16.6457 11.6666 16.8981 12.005 16.8981C12.3434 16.8981 12.6287 16.6457 12.67 16.3098V6.12977C12.6053 4.89858 11.5618 3.94876 10.33 3.99977C9.10199 3.95438 8.0647 4.90263 8 6.12977V16.2998C8.08667 18.4243 9.87517 20.0787 12 19.9998C14.1248 20.0787 15.9133 18.4243 16 16.2998V6.12977C16 5.57749 16.4477 5.12977 17 5.12977C17.5523 5.12977 18 5.57749 18 6.12977V16.2998C17.9128 19.5287 15.2291 22.0781 12 21.9998Z" fill="#8C9094"/>
        </svg>
        `,
      //  code_view: `<div className="hidden"></div>`,
      align_center: `<svg width="17" height="17" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.76331 5.83984H19.3571C19.4688 5.83984 19.5602 5.74844 19.5602 5.63672V4.21484C19.5602 4.10312 19.4688 4.01172 19.3571 4.01172H6.76331C6.65159 4.01172 6.56018 4.10312 6.56018 4.21484V5.63672C6.56018 5.74844 6.65159 5.83984 6.76331 5.83984ZM19.3571 16.6055C19.4688 16.6055 19.5602 16.5141 19.5602 16.4023V14.9805C19.5602 14.8687 19.4688 14.7773 19.3571 14.7773H6.76331C6.65159 14.7773 6.56018 14.8687 6.56018 14.9805V16.4023C6.56018 16.5141 6.65159 16.6055 6.76331 16.6055H19.3571ZM23.0133 20.1602H3.10706C2.99534 20.1602 2.90393 20.2516 2.90393 20.3633V21.7852C2.90393 21.8969 2.99534 21.9883 3.10706 21.9883H23.0133C23.125 21.9883 23.2164 21.8969 23.2164 21.7852V20.3633C23.2164 20.2516 23.125 20.1602 23.0133 20.1602ZM23.0133 9.39453H3.10706C2.99534 9.39453 2.90393 9.48594 2.90393 9.59766V11.0195C2.90393 11.1312 2.99534 11.2227 3.10706 11.2227H23.0133C23.125 11.2227 23.2164 11.1312 23.2164 11.0195V9.59766C23.2164 9.48594 23.125 9.39453 23.0133 9.39453Z" fill="#8C9094"/>
      </svg>
      `,
      align_right: `<svg width="17" height="17" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.06018 18H21.0602M3.06018 6H21.0602H3.06018ZM11.0602 12H21.0602H11.0602Z" stroke="#8C9094" stroke-width="2" stroke-linecap="round"/>
      </svg>
      `,
      image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" fill="#919EAB" transform="translate(-4.4 -3.75)"></path></g></svg>`,
      table: `<svg width="20" height="20" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0602 7V11H16.0602V7H10.0602ZM8.06018 7H2.06018V11H8.06018V7ZM10.0602 16H16.0602V13H10.0602V16ZM8.06018 16V13H2.06018V16H8.06018ZM10.0602 2V5H16.0602V2H10.0602ZM8.06018 2H2.06018V5H8.06018V2ZM16.0602 0C16.5906 0 17.0993 0.210714 17.4744 0.585786C17.8495 0.960859 18.0602 1.46957 18.0602 2V16C18.0602 16.5304 17.8495 17.0391 17.4744 17.4142C17.0993 17.7893 16.5906 18 16.0602 18H2.06018C1.52975 18 1.02104 17.7893 0.645967 17.4142C0.270894 17.0391 0.0601807 16.5304 0.0601807 16V2C0.0601807 1.46957 0.270894 0.960859 0.645967 0.585786C1.02104 0.210714 1.52975 0 2.06018 0H16.0602Z" fill="#8C9094"/>
        </svg>
        `
    },
    toolbarContainer: '#someContainer',
    resizingBar: null
  }
}

const TemplateSvg = () => {
  return (
    <svg width='19' height='18' className='mr-2' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.875 15.375L2.75 16.5V1.5L3.875 2.625L5 1.5L6.125 2.625L7.25 1.5L8.375 2.625L9.5 1.5L10.625 2.625L11.75 1.5L12.875 2.625L14 1.5L15.125 2.625L16.25 1.5V16.5L15.125 15.375L14 16.5L12.875 15.375L11.75 16.5L10.625 15.375L9.5 16.5L8.375 15.375L7.25 16.5L6.125 15.375L5 16.5L3.875 15.375ZM14 5.25V6.75H5V5.25H14ZM5 8.25V9.75H14V8.25H5ZM5 11.25V12.75H14V11.25H5Z'
        fill='#8C9094'
      />
    </svg>
  )
}

const EditHtml = () => {
  return (
    <svg width='18' height='18' className='mr-2' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.495 3.45014L14.55 5.50514C15.1245 6.05246 15.148 6.96139 14.6025 7.53764L7.8525 14.2876C7.60802 14.5301 7.28759 14.681 6.945 14.7151L3.8175 15.0001H3.75C3.55064 15.0013 3.35904 14.923 3.2175 14.7826C3.05927 14.625 2.97954 14.405 3 14.1826L3.3225 11.0551C3.35663 10.7125 3.50757 10.3921 3.75 10.1476L10.5 3.39764C11.0819 2.90605 11.9398 2.92863 12.495 3.45014ZM9.99 6.00014L12 8.01014L13.5 6.54764L11.4525 4.50014L9.99 6.00014Z'
        fill='#8C9094'
      />
    </svg>
  )
}
