# AWS Static Website Project

## Overview
React application deployed using two different AWS approaches to test deployment methods.

## Deployment Methods

### Method 1: AWS Amplify (Managed)
- **Live Site**: https://main.d2lz8aw5z334sh.amplifyapp.com/
- **Features**: Automatic CI/CD, HTTPS, Global CDN
- **Setup**: Connected Github repo for continuous deployment

### Method 2: EC2 Manual Deployment
- **Live Site**: http://3.19.246.244
- **Features**: Manual server configuration, nginx web server
- **Setup**: 
    1. Launched Amazon Linux EC2 Instance
    2. Installed Node.js and Git
    3. Configured nginx web server
    4. Set up security groups for HTTP traffic

## Technologies Used
- React
- Amplify
- EC2
- nginx
- GitHub

## EC2 Setup Commands
```bash
# Install dependencies
sudo yum install git -y
sudo yum install nginx -y

# Clone and build
git clone https://github.com/odysian/AWS-S3-Static.git
cd AWS-S3-Static
npm install
npm run build

# Deploy to nginx
sudo cp -r dist/* /usr/share/nginx/html/
```
