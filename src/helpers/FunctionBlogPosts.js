//import {data} from './posts'

export const getPostTitle = (title) => (title.replace(/[&\\#, +()$~%.'":*?<>{}]/g, '_')) 

export const getPostLink = (title) => ('/posts/' + getPostTitle(title)) 

export const getPosts = async (id) => {
    
    const posts = await fetch(`/s3/posts.json`);
    const data = await posts.json();
    
    if(id){
       
        let post = data.filter(p => getPostTitle(p.title) === id)
        return post && post[0];
    }
    
    return data;
}