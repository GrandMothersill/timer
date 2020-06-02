const timer = function() {
  let args = process.argv.slice(2);
  args.forEach(alarm => {
    if (alarm >= 0) {
      alarm = alarm * 1000;
      setTimeout(() => {
        process.stdout.write('.');
      }, alarm);
    }
  },
  )
};

timer();