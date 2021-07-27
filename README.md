# Connect to your MongoDB Atlas Cluster

- Be sure to sign up for a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account
- After cloning this repo, from the terminal run: `npm install`
- Rename `.env.local.example` to `.env.local`
- Enter your MONGODB_URI and MONGODB_DB in `.env.local`
  - From your Atlas Dashboard under Databases, click "Connect"
  ![Step 1](/readme_img/1.png)
  - Then select "Connect your application"
  ![Step 2](/readme_img/2.png)
  - Now copy your connection string. This is the MONGODB_URI
  ![Step 3](/readme_img/3.png)
  - For the MONGODB_DB you can use "todo", but you can also name it whatever you want.
- Run `npm run dev`