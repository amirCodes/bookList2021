import React, { useEffect, useState } from 'react';

export default function BookForm({ refreshBooks }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const resetForm = () => {
        setName('');
        setDescription('');
        setImage('');
        setUrl('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description, image };
        try {
            const res = await fetch('/.netlify/functions/createBook', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            window.location.reload();
            refreshBooks();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="card" >
            <div className="card-header" > Add Book </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} >

                    <div className="form-group" >
                        <label htmlFor="name" > Name </label>
                        <input type="text"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)}
                        /> </div>
                    <div className="form-group" >
                        <label htmlFor="url" > URL </label>
                        <input type="text"
                            name="url"
                            className="form-control"
                            value={url}
                            onChange={
                                (e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="description"> Description </label>
                        <textarea name="description"
                            className="form-control"
                            value={description}
                            onChange={
                                (e) => setDescription(e.target.value)}
                        /> </div>
                    <div className="form-group" >
                        <label htmlFor="image"> Image Url </label><br />
                        <input  name="image" 
                            className="form-control"
                            value={image}
                            onChange={ (e) => setImage(e.target.value)}
                        /> </div>
                    <button type="submit"
                        className="btn btn-primary" >
                        Submit </button>
                </form>
            </div>
        </div>
    );
}