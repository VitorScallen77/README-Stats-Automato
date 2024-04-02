const fs = require('fs');
const https = require('https');

const username = 'vitorscallen77';
const userAgent = 'README-Stats-Automato';

const statsURL = `https://api.github.com/users/${username}`;
const options = {
  headers: {
    'User-Agent': userAgent
  }
};

https.get(statsURL, options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const stats = JSON.parse(data);

    const readme = `# My GitHub Stats\n\n![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&theme=highcontrast)\n\n`;

    fs.writeFileSync('README.md', readme);
  });
}).on('error', (err) => {
  console.error(err);
});

