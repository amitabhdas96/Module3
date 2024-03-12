const sydney = {
    name: "Sydney",
    population: 5_121_000,
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney",
  };
  
  const melbourne = {
    name: "Melbourne",
    population: 5_030_000,
    state: "Victoria",
    founded: "30 August 1835",
    timezone: "Australian Eastern Daylight Time",
  };
  
  for (let key in sydney) {
    console.log(key + ":" + sydney[key]);
  }
  
  for (let key in melbourne) {
    console.log(key + ":" + melbourne[key]);
  }
  