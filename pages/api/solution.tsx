import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import * as AWS from 'aws-sdk'

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  }
};

type data = {
  file: {path: string}
}

export default async (req, res) => {
  // parse form with a Promise wrapper
  const data: data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    
    form.parse(req, (err, _fields, files) => {
      if (err) return reject(err)
      resolve({ file: files.solution })
    })
  })

  // read file from the temporary path
  const contents = await fs.readFile(data?.file.path);

  AWS.config.update({
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    accessKeyId: process.env.AWS_KEY_ID,
    region: process.env.AWS_REGION,
  });
  const s3 = new AWS.S3();
  let params = {
    Bucket: 'prova-shrp',
    Key: 'solution.zip' ,
    Body: contents
  };
  try {
    const s3Result = await s3.upload(params).promise();
    console.log(s3Result);
    res.status(200).send();
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
}
