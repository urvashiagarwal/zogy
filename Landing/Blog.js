

export const Blog = () => {
    const blogdata = [
        {
            text: "Post 6 Headline",
        },
        {
            text: "Post 5 Headline",
        },
        {
            text: "Post 6 Headline",
        },
        {
            text: "Post 6 Headline"
        }

    ]
    return (
        <>
            <div className='contaier-fluid blog'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1>Check Our Blog</h1>
                    </div>
                    <div className='col-lg-12'>
                        <h5>Sample text. Click to select the Text Element. Image from <span>Freepik</span></h5>
                    </div>

                </div>
                <div>
                    {blogdata.map((item) => (
                        <div className=' blogcard '>
                            <div style={{ width: "400px" }}>
                                <h6>{item.text}</h6>
                                <h5 id="title">{item.text}</h5>
                                <h5 id="b-text">Sample small text. Lorem ipsum dolor sit amet.</h5>
                                <button>Read More</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}