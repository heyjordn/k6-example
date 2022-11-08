import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '1s',
  vus: 500,
};

export default function () {
  // Choose a route to send the load to
  const res = http.get('https://admin.metroipo.com/api/v1/offers');
  sleep(1);
}
