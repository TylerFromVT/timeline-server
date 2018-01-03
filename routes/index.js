var express = require('express');
var router = express.Router();

var url = '/timeline';
var events = [
    {
        keywords: ['Nixon'],
        date: 'April 22, 1994',
        title: 'Nixon dies'
    },
    {
        keywords: ['Nixon'],
        date: 'October 1973',
        title: 'Nixon fires Archibald Cox',
        details: 'He also fired a bunch of other people'
    },
    {
        keywords: ['Nixon'],
        date: 'November 19, 1973',
        title: 'Nixon says he\'s not a crook',
        details: 'People have got to know whether or not their President is a crook. Well, I\'m not a crook. ' +
        'I\'ve earned everything I\'ve got.'
    },
    {
        keywords: ['Nixon', 'Ford'],
        date: 'August 9, 1974',
        title: 'Nixon resigns'
    },
    {
        keywords: ['Nixon'],
        date: 'September 8, 1974',
        title: 'Ford pardons Nixon',
        details: 'a tragedy in which we all have played a part. It could go on and on and on, or someone must write ' +
        'the end to it. I have concluded that only I can do that, and if I can, I must.'
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get(url, function (req, res, next) {
    res.send(addIds(events));
});

router.post(url, function (req, res) {
    console.log('Adding an event!');
    events.push(req.body);
    res.send(addIds(events));
});

router.delete(url + '/:id', function (req, res) {
    console.log('Deleting an event!');
    console.log(req.params.id);
    var newEvents = addIds(events).filter(function(event) {
        if (event.id === +req.params.id) {
            console.log('We have a winner');
        }
        return event.id !== +req.params.id;
    });
    // console.log(newEvents);
    events = newEvents;

    res.send(addIds(events));
});

// Update Event
router.put(url, function (req, res) {
    console.log('Updating an event!');
    console.log(req.body);
    var myEvent = events.filter(function(event) {
        return event.id === req.body.id;
    })[0];
    console.log(myEvent);
    myEvent.title = req.body.title;
    myEvent.details = req.body.details;
    myEvent.date = req.body.date;
    myEvent.keywords = req.body.keywords;

    res.send(addIds(events));
});

function addIds(events) {
    var id = 0;
    for (var i = 0; i < events.length; i++) {
        events[i].id = id++;
    }
    return events;
}

module.exports = router;
