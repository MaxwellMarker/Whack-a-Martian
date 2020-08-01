let scoreCount = 0;
$(()=>{
    const clickTarget = (event) => {
        $(event.currentTarget).off('click', clickTarget);
        $(event.currentTarget).css('transform', 'translate(0, 125px)')
        scoreCount++
        $('#scoreCount').text(scoreCount);
        setTimeout( function () {$(event.currentTarget).on('click', clickTarget);}, 600);
    }
    const $clickTarget = () =>{
        $('button').on('click', clickTarget)
    } 
    $clickTarget()
})