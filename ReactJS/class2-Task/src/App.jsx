import React from 'react'
import Card from './components/Card'

const App = () => {
    const people = [
    {
        fullName: "Aarav Sharma",
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        coverImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        intro: "Frontend developer passionate about clean UI and smooth user experiences.",
        likesCount: 1240,
        postCount: 56,
        viewsCount: 18230
    },
    {
        fullName: "Meera Iyer",
        profilePic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        coverImg: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200",
        intro: "UI/UX designer who loves minimal design and typography.",
        likesCount: 980,
        postCount: 42,
        viewsCount: 15400
    },
    {
        fullName: "Rohan Verma",
        profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400",
        coverImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200",
        intro: "Full-stack developer building scalable web applications.",
        likesCount: 2100,
        postCount: 88,
        viewsCount: 30120
    },
    {
        fullName: "Ananya Gupta",
        profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
        coverImg: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXJ8ZW58MHx8MHx8fDA%3D",
        intro: "Content creator sharing tech tutorials and daily productivity tips.",
        likesCount: 1670,
        postCount: 73,
        viewsCount: 24560
    },
    {
        fullName: "Kunal Mehta",
        profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
        coverImg: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y292ZXJ8ZW58MHx8MHx8fDA%3D",
        intro: "Backend engineer with a love for APIs and databases.",
        likesCount: 890,
        postCount: 34,
        viewsCount: 12040
    },
    {
        fullName: "Sneha Patel",
        profilePic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
        coverImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200",
        intro: "Digital artist exploring illustrations and concept art.",
        likesCount: 2560,
        postCount: 91,
        viewsCount: 38900
    },
    {
        fullName: "Aditya Singh",
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        coverImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
        intro: "Tech enthusiast and blogger writing about JavaScript and AI.",
        likesCount: 1430,
        postCount: 61,
        viewsCount: 21080
    },
    {
        fullName: "Neha Kapoor",
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
        coverImg: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200",
        intro: "Lifestyle influencer sharing travel and productivity hacks.",
        likesCount: 3320,
        postCount: 110,
        viewsCount: 51200
    },
    {
        fullName: "Vikram Rao",
        profilePic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
        coverImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        intro: "Software engineer focused on performance and system design.",
        likesCount: 760,
        postCount: 29,
        viewsCount: 9800
    },
    {
        fullName: "Pooja Malhotra",
        profilePic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400",
        coverImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        intro: "Marketing strategist turning ideas into impactful campaigns.",
        likesCount: 1890,
        postCount: 67,
        viewsCount: 27450
    }
    ];

    return (
        <div className='h-screen w-screen p-7 flex flex-wrap gap-5'>
            {people.map(function(elem){
                return <Card {...elem}/>
            })}
        </div>
    )
}

export default App
