# AWS Static Website Project

## Overview
React application deployed using two different AWS approaches to test deployment methods.

## Deployment Methods

### Method 1: AWS Amplify (Managed)
- **Live Site**: https://main.d2lz8aw5z334sh.amplifyapp.com/
- **Features**: Automatic CI/CD, HTTPS, Global CDN
- **Setup**: Connected GitHub repo for continuous deployment

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

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
node --version

# Install other dependencies
sudo yum install git -y
sudo yum install nginx -y

# Start and enable nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Clone and build
git clone https://github.com/odysian/AWS-S3-Static.git
cd AWS-S3-Static
npm install
npm run build

# Deploy to nginx
sudo cp -r dist/* /usr/share/nginx/html/
```
