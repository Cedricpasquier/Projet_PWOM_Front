export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return {
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5hIiwiaWF0IjoxNjA4MTk1Mjk3LCJleHAiOjE2MDgyODE2OTd9.sbmvQ5hUg1p-kTW-vKFP2xQ19cHSK3PrW0FyN6sL9oqBdEkAd-5BGa0F74-TOF4dRlE4ceDoVvEIo3PhAEGBcg`};
    } else {
        return {};
    }
}