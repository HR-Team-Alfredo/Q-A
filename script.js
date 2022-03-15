import http from "k6/http";

import { check, sleep } from "k6";

export let options = {
  vus: 500,
  duration: "30s"
};




const randomNumber = () => {
  return (Math.floor(Math.random() * Math.floor(10000000)) + 1);
};

export default function () {
  // const url = `http://localhost:3000/qa/questions/?product_id=${randomNumber()}`;
  const url = 'http://localhost:3000/qa/questions/';

  check(http.get(`${url}?product_id=${randomNumber()}`), { 'Status is 200': (r) => r.status === 200, }) || errorRate.add(1);

  sleep(1);
}