document.addEventListener('deviceready', function() {

    window.flurryAnalytics = new FlurryAnalytics();

    flurryAnalytics.init(cordova.platformId === 'ios' ? 'GRJ5MVQFC6CMHDSWVPNW' : '9XJR7BGFN8ZVQ9PNND36', {
        enableLogging: true,
        logLevel: 'debug'
    }, false);

    document.getElementById('helloBtn').addEventListener('click', function() {

        flurryAnalytics.logEvent('helloworld');
    }, false);

    document.getElementById('wazzupBtn').addEventListener('click', function() {

        var name = prompt("Enter a name", "blakgeek");
        flurryAnalytics.logEvent('wazzup', {
            name: name
        });
    },false);

    document.getElementById('deepBtn').addEventListener('click', function() {

        flurryAnalytics.logEvent('deep', {
            when: Date.now(),
            what: {
                it: "is deeply nested",
                way: {
                    down: "inside",
                    foo: [1,2,3]
                }
            },
            who: ['bob', 'jim', 'john']
        });
    }, false);

    document.getElementById('errorBtn').addEventListener('click', function() {

        flurryAnalytics.logError('UH_OH', 'Something bad happened');
    }, false);


}, false);


