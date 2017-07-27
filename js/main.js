$('#responsiveTabs').responsiveTabs({
    startCollapsed: 'accordion'
});

$.backstretch('img/009.jpg');

$('.skillbar').skillBars({

  // number start
    from: 0,

  // number end
    to: false,

  // animation speed
    speed: 3000,

  // how often the element should be up<a href="http://www.jqueryscript.net/time-clock/">date</a>d
    interval: 100,

  // the number of decimal places to show
    decimals: 0,

  // callback method for every time the element is updated,
    onUpdate: null,

  // callback method for when the element finishes updating
    onComplete: null,

  // CSS classes
    classes: {
        skillBarBar: '.skillbar-bar',
        skillBarPercent: '.skill-bar-percent',
    }
});
