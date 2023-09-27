'use client';

import { Button } from "@nextui-org/react";
import { forwardRef, memo, useEffect, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Image } from "@nextui-org/react";



interface TriggerProps {
    children: React.ReactNode
}

interface ContentProps {
    children: React.ReactNode
}

function Trigger({ children }: TriggerProps) {
    return (
        <div className='bg-red-500 p-5'>
            {children}
        </div>
    )
}

const Content = forwardRef(({ children }: ContentProps, ref: any) => {
    return (
        <div ref={ref} className='bg-transparent fixed top-0 left-0 w-screen h-screen z-10 grid place-content-center'>
            {children}
        </div>
    )
})


interface EditorProps {
    close: (param: boolean) => void
}


interface UploadFromComputerProps {
    setImagesList: (e: any) => void
}

const UploadFromComputer = forwardRef<HTMLDivElement, UploadFromComputerProps>(({ setImagesList }, ref) => {

    return (
        <div ref={ref} className='w-full xl2:w-[1200px] h-[800px] bg-[#293138] rounded-2xl grid place-content-center text-[#CBE4DE] text-center'>
            <h3 className='text-[25px] mb-1'>Select files to begin</h3>
            <p className='text-md mb-2'>Share images or a single video in your post.</p>
            <div className='mt-2'>
                <form className='h-fit'>
                    <label
                        htmlFor="files"
                        className='bg-[#6fb5f9] cursor-pointer px-6 mt-2 py-2 rounded-full text-[16px] text-[#293138] font-medium'
                    >
                        Upload from computer
                    </label>
                    <input type="file" id="files" multiple className='hidden' onChange={setImagesList} />
                </form>
            </div>
        </div>
    )
})

const PreviewGallery = forwardRef<HTMLDivElement, { files: File[] }>(({ files }, ref) => {


    const [selected, setSelected] = useState<string>('/images/test.jpg');


    useEffect(() => {
        if (files.length === 0) return
        setSelected(URL.createObjectURL(files[0]))

    }, [])

    return (
        <div ref={ref} className="flex p-2 w-full xl2:w-[1200px] h-[800px] bg-[#293138] rounded-2xl">
            <div className="flex-[.7] flex items-center h-full">
                <Image
                    alt="image"
                    src={selected}
                    className="object-contain w-full h-full"
                    width={100}
                    height={100}
                    removeWrapper={true}
                />
            </div>
            <div className="flex-[.3] text-[#a4a5a7] p-2 bg-[#1b1f23] rounded-lg overflow-y-auto">
                <div className="mb-4">2 of 3</div>
                <div className='grid grid-cols-2 gap-4'>
                    <FileManager files={files} setSelected={setSelected} />
                </div>
            </div>
        </div>
    )
})


interface FileManagerProps {
    files: File[],
    setSelected: (param: string) => void
}


const MemoImage = memo(({ file }: { file: File }) => {
    return (
        <Image
            isZoomed
            alt="image"
            src={URL.createObjectURL(file)}
            className="object-cover h-full w-full"
            removeWrapper={true}
        />
    )
})


const FileManager = ({ files, setSelected }: FileManagerProps) => {

    const [selectedIndex, setSelectedindex] = useState<number>(-1);

    const slect = (file: File, index: number) => {
        setSelected(URL.createObjectURL(file))
        setSelectedindex(index)
    }

    const hi = () => {
        console.log('hi')


    }


    function arraymove(fromIndex: number, toIndex: number) {
        const element = files[fromIndex];
        files.splice(fromIndex, 1);
        files.splice(toIndex, 0, element);
    }


    return (
        <>
            {files.map((file, index) => (
                <button
                    key={index}
                    className={`h-[200px] relative  overflow-hidden cursor-pointer rounded-large ${selectedIndex === index ? 'outline outline-2' : null }`}
                    onClick={() => slect(file, index)}
                >
                    <MemoImage file={file} />
                    <small>01</small>

                    <div className="absolute text-white text-center space-x-2 w-full bottom-0 z-10">
                        { index !== 0 && <button onClick={() => arraymove(index, index - 1)}>less</button> }
                        { index !== files.length -1 && <button onClick={() => arraymove(index, index + 1)}>more</button> }
                    </div>
                </button>
            ))}
        </>
    )
}



const Editor = ({ close }: EditorProps) => {

    const ref = useOutsideClick(close);
    const [preview, setPreview] = useState('');

    const [files, setFiles] = useState<File[]>([]);

    const setImagesList = (e: any) => {

        console.log(e.target.files)
        setFiles(Array.from(e.target.files))
    }

    return (
        <Content>
            {
                files.length === 0 ?
                    <UploadFromComputer ref={ref} setImagesList={setImagesList} />
                    :
                    <PreviewGallery ref={ref} files={files} />
            }
        </Content>
    )

}

export default function Upload() {

    const [show, setShow] = useState(true);

    return (
        <>
            {show && <Editor close={setShow} />}
            <div className='bg-black/[.9] h-screen w-full flex justify-center items-center'>
                <div className='w-full xl2:w-[1200px] h-[800px] bg-[#293138] rounded-2xl grid place-content-center'>

                    <Button color="primary" onClick={() => setShow(true)}>upload</Button>


                </div>
            </div>
        </>
    )
}
