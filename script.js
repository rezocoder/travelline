const rooms = document.querySelectorAll('.room');
rooms.forEach(room => {
    let onReserveClick = false;
    let roomReserved = false;

    const details = room.querySelector('.details');
    const reserved = room.querySelector('.reserved');
    const line = room.querySelector('.horizontal-line');
    const roomInfo = room.querySelector('.room__info');
    const motivator = room.querySelector('.room__motivator');
    const booking = room.querySelector('.booking');

    booking.addEventListener('click', () => {
        onReserveClick = true;
        booking.classList.add('disabled');
        if (onReserveClick && window.innerWidth <= 575) {
            details.style.display = 'none';
            reserved.style.display = 'flex';
            line.style.visibility = 'hidden';
            roomInfo.classList.add('transparent-bg');
            if (motivator) {
                motivator.style.display = 'none';
            }
            roomReserved = true;
        }
    });

    room.addEventListener('mouseleave', () => {
        if (onReserveClick) {
            details.style.display = 'none';
            reserved.style.display = 'flex';
            line.style.visibility = 'hidden';
            roomInfo.classList.add('transparent-bg');
            if (motivator) {
                motivator.style.display = 'none';
            }
            roomReserved = true;
        }
    });

    room.querySelector('.info').addEventListener('click', () => {

        if (roomReserved) {
            details.style.display = 'flex';
            reserved.style.display = 'none';
            line.style.visibility = 'visible';
            booking.classList.remove('disabled');
            roomInfo.classList.remove('transparent-bg');
            if (motivator) {
                motivator.style.display = 'flex';
            }
            roomReserved = false;
            onReserveClick = false;
        }
    })
});
