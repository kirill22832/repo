document.addEventListener('DOMContentLoaded', function () {

    const first = document.querySelector('#first')
    first.addEventListener('keyup', function (e) {
        if (e.target.value.length == 3)
        {
            const second = document.querySelector('#second')
            second.focus()
            second.addEventListener('keyup', function (e) {
                if (e.target.value.length == 3) {
                    const third = document.querySelector('#third')
                    third.focus()
                }
            })
        }
    })

})
