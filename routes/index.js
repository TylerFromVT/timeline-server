var express = require('express');
var router = express.Router();
var events = [
    {
        keywords: ['Tyler & Meg'],
        date: 'May 2013',
        title: 'Meg and Tyler vacation in Portugal',
        details: 'Faro, Salema, Lisbon, Sintra, Evora and Esoi'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'May 2012',
        title: 'Meg and Tyler vacation in Germany, France and Switzerland',
        details: 'Baden Baden, Strousburg, Colmar, Benne and Basal'
    },
    {
        keywords: ['Brown'],
        date: 'August 19, 1875',
        title: 'Harry Gardner Brown born in Nebraska'
    },
    {
        keywords: ['Brown'],
        date: 'June 1971',
        title: 'Construction starts on first addition to Northmont'
    },
    {
        keywords: ['Brown'],
        date: 'June 1971',
        title: 'Tyler finishes third grade at Chevy Chase Elementary'
    },
    {
        keywords: ['Brown'],
        date: 'October 1971',
        title: 'Sam the German Shepherd comes to the Browns'
    },
    {
        keywords: ['Brown'],
        date: '1973',
        title: 'Tyler\'s dog bite.'
    },
    {
        keywords: ['Brown'],
        date: 'December 1971',
        title: 'Ron, Betty and Tyler celebrate at Northmont'
    },
    {
        keywords: ['Brown'],
        date: 'Spring 1972',
        title: 'Ron and Betty start building the big addition onto Northmont'
    },
    {
        keywords: ['Brown'],
        date: 'December 1972',
        title: 'Christmas at Northmont',
        details: 'Kathy, Mike Walsh and Sean come to Maine to celebrate. Nana is there too. The new addition is ' +
        'enclosed and we have Christmas morning in the new living room.'
    },
    {
        keywords: ['Brown', 'Overman'],
        date: 'November, 1972',
        title: 'Thanksgiving in Fenton'
    },
    {
        keywords: ['Pop Culture'],
        date: 'December 23, 1972',
        title: 'The Immaculate Reception helps the Steelers beat the Raiders'
    },
    {
        keywords: ['Brown'],
        date: 'September 1970',
        title: 'Betty, Ron and Tyler visit Northmont and meet the David\'s there',
        details: 'This apparently was right after Mom and Dad actually signed the contract on the camp. We stayed on ' +
        'after the David\'s left for some time. I believe I actually had schoolwork that I had ' +
        'to keep up with while we were in Maine.'
    },
    {
        keywords: ['Brown'],
        date: 'May 1970',
        title: 'Betty, Ron and Tyler take a very long vacation indeed down the southeastern coast of these United States',
        details: 'We visited the Okefenokee Swamp and paddled with alligators, stayed on Buck Lake and met the' +
        'folks from Canada who lived out of their RV and hiked in the Smokies. We had a skunk come into the Apache ' +
        'pop-up camper one night. I also remember going on a glass-bottomed boat at Silver Spring Florida and being ' +
        'able to see all the way to the bottom of the very deep lake. It was amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet eget ex ac volutpat. Integer ac risus commodo, sodales sapien et, mattis tellus. Fusce dignissim, tortor eu volutpat feugiat, quam tellus sagittis lorem, ut pharetra lectus mi quis eros. Ut pellentesque sapien sit amet lacus pellentesque, in sodales velit eleifend. Nunc vitae tortor sed velit pretium dapibus. Donec venenatis dolor leo, id vestibulum elit condimentum vel. Vivamus dignissim turpis vel lectus euismod pulvinar. Pellentesque quis eros et eros tincidunt vulputate id quis odio. Donec eu erat et orci consequat tincidunt. Ut ornare lorem ac purus laoreet, ut accumsan ex pharetra. Aliquam bibendum pellentesque viverra.\n' +
        '\n' +
        'Pellentesque ac ante pharetra, semper nulla id, sollicitudin ipsum. Fusce viverra ligula eget nulla facilisis, a cursus tellus ultrices. Nam sem odio, iaculis nec semper ac, lacinia sed metus. Nam gravida vel erat ut egestas. Fusce dui urna, molestie ut dignissim sed, varius non velit. Praesent quis mauris quis leo pulvinar posuere. Fusce varius malesuada efficitur.\n' +
        '\n' +
        'Nulla interdum pharetra dui, ac cursus lorem tristique a. Maecenas eu maximus justo. Ut id turpis eros. Maecenas finibus arcu eu leo luctus feugiat. Etiam sollicitudin sem eu eros maximus, in vehicula nulla porttitor. Mauris eu risus vel eros cursus pulvinar laoreet quis sem. In hac habitasse platea dictumst.\n' +
        '\n' +
        'Nulla et pellentesque quam. Integer fringilla imperdiet risus sit amet sollicitudin. Sed a turpis enim. Suspendisse pellentesque tortor non nibh hendrerit faucibus. Aenean sagittis sapien vitae tortor accumsan luctus. Nam vitae massa odio. Vestibulum eu mauris nisl. Donec aliquam velit metus, nec lobortis metus blandit porttitor. Vivamus id sollicitudin odio. Morbi sit amet finibus metus.\n' +
        '\n' +
        'Sed nec rhoncus nulla, commodo commodo arcu. Curabitur finibus lobortis tellus non auctor. Nunc at lacus sed ante maximus ullamcorper et sed augue. Etiam mattis interdum enim ut faucibus. Sed id ultrices sem, et interdum magna. In tincidunt, nisl in hendrerit consequat, velit dui ullamcorper nibh, non mollis enim augue non eros. In lorem lacus, laoreet eget ante tempus, imperdiet vulputate erat. Proin ac nibh tellus. Mauris pretium, eros sed feugiat efficitur, ante ipsum iaculis metus, sit amet faucibus dui ex eu metus. Nam consequat consequat accumsan. Suspendisse dolor tortor, tempus quis enim ac, sagittis lacinia mi. Nunc vitae mi et est pulvinar gravida.\n' +
        '\n' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vehicula pharetra tincidunt. Nulla facilisi. Fusce dapibus dui id pretium imperdiet. Duis a libero risus. Vivamus rutrum tristique porttitor. Donec at eleifend augue, eu aliquam elit. Donec nisi nibh, dignissim sit amet metus nec, dictum vehicula nulla. Maecenas ut enim imperdiet, sollicitudin ante ac, interdum libero. Vestibulum vel rutrum felis, in tempor diam. Integer maximus mi at hendrerit auctor. Curabitur in felis ultrices, tincidunt urna eget, efficitur nulla. Duis quam diam, vestibulum vitae fermentum a, convallis ut tellus.\n' +
        '\n' +
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut maximus, sem convallis mattis cursus, magna enim vestibulum mi, sed facilisis mi lorem id purus. Donec sollicitudin quam in metus fermentum suscipit. Aenean molestie ex tortor.'

    },
    {
        keywords: ['Brown'],
        date: 'May 26, 1970',
        title: 'Sean Walsh born.'
    },
    {
        keywords: ['Kremzner'],
        date: '1924',
        title: 'Leon T. Kremzner born in Wyszków, Poland'
    },
    {
        keywords: ['Kremzner'],
        date: 'September 20, 1921',
        title: 'Stan Kremzner born in Poland'
    },
    {
        keywords: ['Kremzner'],
        date: 'November 30, 1959',
        title: 'Catherine (Cathy) Kremzner born'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'June 12, 2010',
        title: 'Tyler and Meg meet in Rome for an Italian vacation'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'June 6, 2010',
        title: 'Tyler flies to Lodz, Poland for work'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'March 23, 2011',
        title: 'Meg and Tyler fly to Madrid to vacation in Spain'
    },
    {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'October 14, 2007',
        title: 'Tyler and Ron fly to Denver and meet Rod'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'October 4, 2007',
        title: 'Tyler and Meg meet in Paris'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'October 2007',
        title: 'Tyler has a busy October'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'October 1, 2007',
        title: 'Tyler travels to Ghent for work'
    },
    {
        keywords: ['Kremzner'],
        date: '1921',
        title: 'The Kremzners and Kotulinskis travel to Poland'
    },
    {
        keywords: ['Kremzner'],
        date: '1921',
        title: 'Mary Kotulinski dies in Poland'
    },
    {
        keywords: ['Kremzner'],
        date: '1919',
        title: 'Sid Kremzner born in New Jersey'
    },
    {
        keywords: ['Kremzner'],
        date: '1917',
        title: 'The Kremzners and Kotulinskis return to New Jersey'
    },
    {
        keywords: ['Kremzner'],
        date: '1915',
        title: 'Elizabeth Kotulinski born in Los Angeles'
    },
    {
        keywords: ['Kremzner'],
        date: 'September 1913',
        title: 'Sigmunt Kremzner and Valaria Daneski married'
    },
    {
        keywords: ['Kremzner'],
        date: '1914',
        title: 'The Kremzners go to California'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'August 2007',
        title: 'Tyler and Meg vacation at Sail Away in New Harbor, Maine'
    },
    {
        keywords: ['Tyler & Meg'],
        date: 'March 2007',
        title: 'Tyler and Meg go to Saint Lucia'
    },
    {
        keywords: ['Brown'],
        date: 'April 1973',
        title: 'Betty breaks her leg skiing on Sugarloaf'
    },
    {
        keywords: ['Brown'],
        date: 'October 1972',
        title: 'Ron\'s Uncle Thayne dies'
    },
    {
        keywords: ['Brown'],
        date: 'August 1971',
        title: 'Betty and Ron decide to move to Northmont'
    },
    {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'September 1971',
        title: 'Tyler starts fourth grade at Central Elementary'
    },
    {
        keywords: ['Brown'],
        date: 'September 1970',
        title: 'Betty and Ron buy Northmont'
    },
    {
        keywords: ['Brown'],
        date: 'January 1971',
        title: 'Betty and Ron visit Northmont in the dead of winter'
    },
    {
        keywords: ['Kremzner'],
        date: 'October 1990',
        title: 'Brian Kremzner died'
    },
    {
        keywords: ['Kremzner', 'Tyler & Meg'],
        date: 'July 25, 1987',
        title: 'Meg and Roger married'
    },
    {
        keywords: ['Kremzner'],
        date: 'March 31, 1990',
        title: 'Barbie\'s Wedding'
    },
    {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'October 1, 1962',
        title: 'Tyler born in Washington DC'
    },
    {
        keywords: ['Kremzner', 'Tyler & Meg'],
        date: 'August 15, 1959',
        title: 'Meg born in Morristown, NJ'
    },
    {
        keywords: ['Kremzner', 'Brown', 'Tyler & Meg'],
        date: 'August 23, 2004',
        title: 'Meg and Tyler get married'
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/timeline', function (req, res, next) {
    res.send(addIds(events));
});


// Add Event
router.post('/add', function (req, res) {
    console.log('Adding an event!');
    console.log(req.body);
    events.push(req.body);

    res.send(addIds(events));
});

// Add Event
router.delete('/delete/:id', function (req, res) {
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
router.put('/update', function (req, res) {
    console.log('Updating an event!');
    console.log(req.body);
    var myEvent = events.filter(function(event) {
        return event.id === req.body.id;
    })[0];
    console.log(myEvent);
    myEvent.title = req.body.title;
    myEvent.details = req.body.details;
    myEvent.date = req.body.date.dateString;
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
