let scoreCount = 0;
const targetIdsType1 = [
    type1num1 = {
        id: 'type1num1',
        startPosition: 'translate(-15px, 125px) rotate(15deg)',
        endPosition: 'translate(15px, -30px) rotate(15deg)',
        pointValue: 1
    },
    type1num2 = {
        id: 'type1num2',
        startPosition: 'translate(-10px, 125px) rotate(3deg)',
        endPosition: 'translate(0, 5px) rotate(3deg)',
        pointValue: 1
    },
    type1num3 = {
        id: 'type1num3',
        startPosition: 'translate(10px, 125px) rotate(-3deg)',
        endPosition: 'translate(0, 5px) rotate(-3deg)',
        pointValue: 1
    },
    type1num4 = {
        id: 'type1num4',
        startPosition: 'translate(15px, 125px) rotate(-15deg)',
        endPosition: 'translate(-15px, -30px) rotate(-15deg)',
        pointValue: 1
    },
    type1num5 = {
        id: 'type1num5',
        startPosition: 'translate(-50px, 125px) rotate(25deg)',
        endPosition: 'translate(25px, -40px) rotate(25deg)',
        pointValue: 1
    },
    type1num6 = {
        id: 'type1num6',
        startPosition: 'translate(0, 125px) rotate(1deg)',
        endPosition: 'translate(0, 0) rotate(1deg)',
        pointValue: 1
    },
    type1num7 = {
        id: 'type1num7',
        startPosition: 'translate(0, 125px) rotate(-1deg)',
        endPosition: 'translate(0, 0) rotate(-1deg)',
        pointValue: 1
    },
    type1num8 = {
        id: 'type1num8',
        startPosition: 'translate(50px, 125px) rotate(-25deg)',
        endPosition: 'translate(-25px, -40px) rotate(-25deg)',
        pointValue: 1
    }
];
const targetIdsType2 = [
    type2num1 = {
        id: 'type2num1',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num2 = {
        id: 'type2num2',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    },
    type2num3 = {
        id: 'type2num3',
        startPosition: 'translate(-10px, 0) rotate(35deg)',
        endPosition: 'translate(50px, -90px) rotate(35deg)',
        pointValue: 2
    },
    type2num4 = {
        id: 'type2num4',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num5 = {
        id: 'type2num5',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    },
    type2num6 = {
        id: 'type2num6',
        startPosition: 'translate(10px, 0px) rotate(-35deg)',
        endPosition: 'translate(-50px, -90px) rotate(-35deg)',
        pointValue: 2
    }
]
$(() => {
    const clickTarget = (event) => {
        const targ = $(event.currentTarget);
        const ident = targ.attr('id');
        targ.off('click', clickTarget);
        targ.css('transform', window[ident].startPosition);
        scoreCount += window[ident].pointValue;
        $('#scoreCount').text(scoreCount);
        setTimeout(function () {
            targ.on('click', clickTarget);
        }, 600);
    }
    const $clickTarget = () => {
        $('.target').on('click', clickTarget)
    }
    $clickTarget()
})
const revealTarget = (targetArray, timeout) => {
    const target = targetArray[(Math.floor(Math.random() * targetArray.length))];
    $(`#${target.id}`).css('transform', target.endPosition)
    setTimeout(() => {
        $(`#${target.id}`).css('transform', target.startPosition)
    }, timeout);
}
setInterval(function(){revealTarget(targetIdsType1, 1600);}, 3000);
setInterval(function(){revealTarget(targetIdsType2, 1000);}, 4000);