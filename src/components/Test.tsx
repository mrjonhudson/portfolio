import React from 'react'

async function Test() {
    const image = await fetch('https://www.instagram.com/p/C4Ntmguo1Gm/media/', {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).catch((error) => (console.error(error)))

    return (
        <p>{"moo"}</p>
        // <img src={image} alt={'Foo'} crossOrigin="anonymous" height={150} width={150} />
    )
}

export default Test