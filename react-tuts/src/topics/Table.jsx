import React, { useEffect, useState } from 'react'

const Table = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [dataToDisplay, setDataToDisplay] = useState([])

    const fetRecords = async () => {

        try {
            setLoader(true)
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json();
            console.log(data);
            setData(data)
            setDataToDisplay(data)

        } catch (e) {
            setData([])
            console.log(e);

        } finally {
            setLoader(false)
        }
    }

    useEffect(() => { fetRecords() }, [])

    const searchRecords = (e)=>{
        const searchKey = String(e.target.value).toLowerCase();
        let fdata = data.filter((ele)=>ele.title.toLowerCase().includes(searchKey))
        setDataToDisplay(fdata);
    }


    if (loader) return <p>Loading...</p>

    return (
        <>
            <div style={{ width: 800, margin: 'auto' }}>
                <input type="text" onChange={searchRecords} />
                <table >
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>ID</th>
                            <th style={{ border: '1px solid black' }}>Title</th>
                            <th style={{ border: '1px solid black' }}>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataToDisplay.map((ele) => {
                                return <tr key={ele.id} style={{ border: '1px solid black' }}>
                                    <td style={{ border: '1px solid black' }}>{ele.id}</td>
                                    <td style={{ border: '1px solid black' }}>{ele.title}</td>
                                    <td style={{ border: '1px solid black' }}>{ele.body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Table