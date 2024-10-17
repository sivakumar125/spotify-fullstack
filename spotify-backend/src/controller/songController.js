import {v2 as cloudinary} from 'cloudinary'
import songmodel from '../models/songmodel.js';
const addsong=async (req,res)=>{
    try {
        const name=req.body.name;
        const desc=req.body.desc;
        const album=req.body.album;
        const audioFile=req.files.audio[0];
        const imageFile=req.files.image[0];
        const audioupload =await cloudinary.uploader.upload(audioFile.path,{resource_type:"video"});
        const imageupload =await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        console.log(name,desc,album,audioupload,imageupload);

        const songData={
            name,
            desc,
            album,
            image:imageupload.secure_url,
            file:audioupload.secure_url,
            duration

        }
        const song=songmodel(songData);
        await song.save();
        res.json({success:true,message:"song added"})
    } catch (error) {
        res.json({success:false});
        
    }

}
const listsong=async( req,res)=>{

}
export {addsong,listsong}