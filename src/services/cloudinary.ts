import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dzl82tvci',
  api_key: '632224873158956',
  api_secret: 'C6m-IpxKC4EzHI5ZAvhKlP4YdI4'
});

export async function uploadToCloudinary(buffer: Buffer, filename: string) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { public_id: filename, resource_type: 'image' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
}