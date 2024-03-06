import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Check if the file is an image or PDF
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    // console.log(file)
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and PDFs are allowed.'), false);
  }
};
 
const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 10 } });

export default upload;
