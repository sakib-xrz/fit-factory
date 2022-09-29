let breakTime = {};
const addToLocalStorage = (time) => {

    const storedTime = localStorage.getItem("break-time");
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }

    const preTime = breakTime["time"];
    if (preTime) {
        const newTime = time;
        breakTime['time'] = newTime;
    }
    else{
        breakTime["time"] = time;
    }

    localStorage.setItem("break-time", JSON.stringify(breakTime));
}

const getFromLocalStorage = () => {
    const storedTime = localStorage.getItem("break-time");
    if (storedTime) {
      breakTime = JSON.parse(storedTime);
    }
    return breakTime;
}

export { addToLocalStorage, getFromLocalStorage };