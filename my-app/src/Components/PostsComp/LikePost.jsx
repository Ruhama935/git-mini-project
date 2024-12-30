import { ToggleButton } from 'primereact/togglebutton';
import 'primeicons/primeicons.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import PostContext from './PostContext';

function LikePost() {
    const { post, setPosts } = useContext(PostContext)
    const [checked, setChecked] = useState(post.like);
    const handleChange = async () => {
        const res = await axios.put(`http://localhost:5000/api/posts/${post._id}`)
        setPosts(res.data);
    }
    return (
        <>
            <ToggleButton
                onLabel=""
                offLabel=""
                onIcon="pi pi-heart-fill"
                offIcon="pi pi-heart"
                style={{
                    fontSize: '1rem',
                    color: checked ? 'black' : 'red',
                    backgroundColor: checked ? 'red' : 'black',
                    borderColor: 'red',
                    borderWidth: '2px'
                }}
                checked={checked} onChange={(e) => { handleChange(); setChecked(!checked) }} />
        </>
    )
}

export default LikePost