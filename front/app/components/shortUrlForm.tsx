'use client';

import {useState} from "react";

export default function UrlForm() {

    // todo - move this to types folder
    enum Url {
        Short,
        Long
    }

    const [actionUrl, setActionUrl] = useState('http://localhost:3001/s');
    const [urlPlaceHolder, setUrlPlaceHolder] = useState('Paste URL');
    const [formData, setFormData] = useState({
        url: ""
    });

    // change endpoint depends on radio button selected
    const handleRadioButton = (e) => {
        if (e.target.id === 'getOriginalUrl') {
            setActionUrl('http://localhost:3001/l');
            setUrlPlaceHolder('Paste Short URL');
        }
        if (e.target.id === 'createShortUrl') {
            setActionUrl('http://localhost:3001/s');
            setUrlPlaceHolder('Paste URL');
        }
    };

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormData((prevState: any) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        const formURL = e.target.action;
        const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {'accept': 'application/json'},
        }).then(() => {
            // todo - display url from response
        })
    };



    return (
        <fieldset>
            <form method="POST" action={actionUrl} onSubmit={submitForm}>
                <div className="mt-6 flex items-center gap-x-6">
                    <div className="flex items-center gap-x-3">
                        <input defaultChecked onChange={handleRadioButton}
                               value={Url.Long}
                               id="createShortUrl"
                               type="radio"
                               name="mode"
                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                            Create Short URL
                        </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <input onChange={handleRadioButton}
                            value={Url.Short}
                            id="getOriginalUrl"
                            type="radio"
                            name="mode"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                            Get Original URL
                        </label>
                    </div>
                </div>

                <label className="block mt-6">
                    <input type="url" name="url" onChange={handleInput}
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           placeholder={urlPlaceHolder}/>
                </label>
                <button type="submit"
                        className="mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send
                </button>
            </form>
        </fieldset>
    );
}
