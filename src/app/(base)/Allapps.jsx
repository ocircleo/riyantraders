import React from 'react';
import { API } from '../utls/api/API';
import App from '../utls/app/App';

const Allapps = async () => {
    let data, apps;
    try {
        data = await fetch(API + 'get/popular-apps');
        apps = await data.json();

    } catch (error) {
        console.log(error);
    }
    if (apps) return (
        <>
            {
                apps.map((app, index) => <App key={index} app={app}></App>)
            }
        </>
    );
    return (<div className="col-span-5 text-center py-12">

        <h2 className="text-xl  font-semibold text-red-600">Failed to load resource</h2>

    </div>)
}

export default Allapps;
