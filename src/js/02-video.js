import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(getVideoCurTime, 1000));

function getVideoCurTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  });
}

const getTimeFromLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(getTimeFromLocalStorage);
