let scoreCount = 0;
const targetIds = [
    type1num1 = {
        id: 'type1num1',
        startPosition: 'translate(-15px, 125px) rotate(12deg)',
        endPosition: 'translate(15px, -30px) rotate(12deg)'
    },
    type1num2 = {
        id: 'type1num2',
        startPosition: 'translate(0, 125px) rotate(2deg)',
        endPosition: 'translate(0, 0) rotate(2deg)'
    },
    type1num3 = {
        id: 'type1num3',
        startPosition: 'translate(0, 125px) rotate(-2deg)',
        endPosition: 'translate(0, 0) rotate(-2deg)'
    },
    type1num4 = {
        id: 'type1num4',
        startPosition: 'translate(15px, 125px) rotate(-12deg)',
        endPosition: 'translate(-15px, -30px) rotate(-12deg)'
    },
    type1num5 = {
        id: 'type1num5',
        startPosition: 'translate(-25px, 125px) rotate(15deg)',
        endPosition: 'translate(25px, -40px) rotate(15deg)'
    },
    type1num6 = {
        id: 'type1num6',
        startPosition: 'translate(0, 125px) rotate(1deg)',
        endPosition: 'translate(0, 0) rotate(1deg)'
    },
    type1num7 = {
        id: 'type1num7',
        startPosition: 'translate(0, 125px) rotate(-1deg)',
        endPosition: 'translate(0, 0) rotate(-1deg)'
    },
    type1num8 = {
        id: 'type1num8',
        startPosition: 'translate(25px, 125px) rotate(-15deg)',
        endPosition: 'translate(-25px, -40px) rotate(-15deg)'
    }
];
// const targetIdArrays = {
//     r1t1: ['r1t1', 'translate(0, 125px)', 'translate(0, 0)'],
//     r1t2: ['r1t2', 'translate(0, 125px)', 'translate(0, 0)'],
//     r1t3: ['r1t3', 'translate(0, 125px) rotate(-10deg)', 'translate(-20px, 0px) rotate(-10deg)'],
//     r2t1: ['r2t1', 'translate(0, 125px)', 'translate(0, 0)'],
//     r2t2: ['r2t2', 'translate(0, 125px) rotate(-10deg)', 'translate(-20px, 0px) rotate(-10deg)']
// };
$(() => {
    const clickTarget = (event) => {
        const targ = $(event.currentTarget);
        const ident = targ.attr('id');
        targ.off('click', clickTarget);
        targ.css('transform', window[ident].startPosition);
        scoreCount++;
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

const revealTarget = () => {
    const target = targetIds[(Math.floor(Math.random() * targetIds.length))];
    $(`#${target.id}`).css('transform', target.endPosition)
    setTimeout(() => {
        $(`#${target.id}`).css('transform', target.startPosition)
    }, 1500);
}

setInterval(revealTarget, 1000);