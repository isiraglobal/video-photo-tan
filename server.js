const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3050;

// Serve static assets with correct MIME types
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/stiff', express.static(path.join(__dirname, 'stiff')));
app.use('/favicon.png', express.static(path.join(__dirname, 'favicon.png')));

// Routes matching specific folders (clean URLs)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'work/index.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'news/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact/index.html'));
});

app.get('/capabilities', (req, res) => {
    res.sendFile(path.join(__dirname, 'capabilities/index.html'));
});

// Work details (e.g. /work/furminator)
const detailSlugs = [
    "furminator", "goat-rodeo", "eq-bank", "firehouse", "sleepwalking", "cox",
    "ed-jones", "remax", "lottery", "remote", "atlantic-union-bank", "greenball",
    "fair-tix", "vacation-days", "financial-planner", "lions-den"
];

detailSlugs.forEach(slug => {
    app.get(`/work/${slug}`, (req, res) => {
        res.sendFile(path.join(__dirname, `work/${slug}/index.html`));
    });
});

// Contact form endpoint mock
app.post('/contactform', (req, res) => {
    res.json({ success: true });
});

// Newsletter endpoint mock
app.post('/newsletterform', (req, res) => {
    res.json({ success: true });
});

// Fallback: serve from root static folder
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
