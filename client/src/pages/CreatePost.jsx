import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                <TextInput
                type='text'
                placeholder='Title'
                required
                id='title'
                className='flex-1'
                // onChange={(e) =>
                //   setFormData({ ...formData, title: e.target.value })
                // }
                />
                <Select
                    // onChange={(e) =>
                    //   setFormData({ ...formData, category: e.target.value })
                    // }
                >
                    <option value='uncategorized'>Select a category</option>
                    <option value='technology'>Technology</option>
                    <option value='cosmos'>Cosmos</option>
                    <option value='life'>Life</option>
                    <option value='food'>Food</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-300 border-dotted p-3'>
                <FileInput
                // @ts-ignore
                type='file'
                accept='image/*'
                // onChange={(e) => setFile(e.target.files[0])}
                />
                <Button
                type='button'
                gradientDuoTone='greenToBlue'
                size='sm'
                outline
                // onClick={handleUpdloadImage}
                // disabled={imageUploadProgress}
                >Upload Image</Button>
            </div>
            <ReactQuill theme="snow" placeholder='Write your post...' className='h-72 mb-12' 
// @ts-ignore
            required/>
            <Button type='submit' gradientDuoTone='greenToBlue'>Publish</Button>
        </form>
    </div>
  )
}