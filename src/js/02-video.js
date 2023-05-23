import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

localStorageTimeGetter();

player.on('timeupdate', throttle(localStorageTimeSetter, 1000));

function localStorageTimeSetter(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime || 0);
};

function localStorageTimeGetter() {
  player.setCurrentTime(
    Number(localStorage.getItem('videoplayer-current-time'))
  );
};
