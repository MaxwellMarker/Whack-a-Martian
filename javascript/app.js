let scoreCount = 0;
const targetIds = [
    r1t1 = {
        id: 'r1t1',
        startPosition: 'translate(0, 125px)',
        endPosition: 'translate(0, 0)'
    },
    r1t2 = {
        id: 'r1t2',
        startPosition: 'translate(0, 125px)',
        endPosition: 'translate(0, 0)'
    },
    r1t3 = {
        id: 'r1t3',
        startPosition: 'translate(0, 125px) rotate(-10deg)',
        endPosition: 'translate(-20px, 0px) rotate(-10deg)'
    },
    r2t1 = {
        id: 'r2t1',
        startPosition: 'translate(0, 125px)',
        endPosition: 'translate(0, 0)'
    },
    r2t2 = {
        id: 'r2t2',
        startPosition: 'translate(0, 125px) rotate(-10deg)',
        endPosition: 'translate(-20px, 0px) rotate(-10deg)'
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
    }, 1200);
}

setInterval(revealTarget, 2000);