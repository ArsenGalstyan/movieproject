const api_key = `1a5086c98e86970276abfda2a218703c`;

const host = `https://api.themoviedb.org/3`
export const GET_MOVIES = name => `${host}/search/movie?api_key=${api_key}&query=${name}`;
export const GET_IMAGE = background => `https://image.tmdb.org/t/p/w500${background}`;

export const GET_MOVIE_DEATAILS = id => `${host}/movie/${id}?api_key=${api_key}`;

export const GET_MOVIE_VIDEOS = id =>  `${host}/movie/${id}/videos?api_key=${api_key}`

export const GET_MOVIE_CREDITS = id => `${host}/movie/${id}/credits?api_key=${api_key}`



export const zapros = (url,method)=>new Promise(async(stacvec,dzaxoxvec)=>{
    try{
        const imfetchRsp = await fetch(url,{method:method})
        const patasxan =  await imfetchRsp.json()
        stacvec(patasxan)
    }
    catch(err){
        dzaxoxvec(err)
    }
})