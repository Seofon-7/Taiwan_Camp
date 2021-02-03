const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground')

/*連線*/
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "連線錯誤:"));
db.once("open", () => {
    console.log("連接資料庫");
})
/*連接ejs*/
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/', (req, res) => {
    res.render('home');
})

/*確認是否傳值*/
app.get('/makecampground', async (req, res) => {
    const camp = new Campground({title: 'My Backyard', description: 'cheap camping'});
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})